import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Data from "../assets/item";
import { Link } from "react-router-dom";

const productsPerPage = 12;

function ProductItem(props) {
  const { imageUrl, title, unit, rating, price, category } = props;

  const [initialQuantity, setInitialQuantity] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setInitialQuantity(initialQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (initialQuantity > 1) {
      setInitialQuantity(initialQuantity - 1);
    }
  };

  const addToFavorite = (e) => {
    e.preventDefault();
    const favoriteItem = {
      name: title,
    };

    const existingfavoriteItems =
      JSON.parse(localStorage.getItem("favoritesItems")) || [];

    existingfavoriteItems.push(favoriteItem);

    localStorage.setItem(
      "favoritesItems",
      JSON.stringify(existingfavoriteItems)
    );

    alert(`${title} added to favorite`);
  };

  const handleAddtoCart = (e) => {
    e.preventDefault();
    const cartItem = {
      name: title,
      quantity: initialQuantity,
      price: price,
      image: imageUrl,
    };

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    existingCartItems.push(cartItem);

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    alert(`${title} added to cart`);
  };

  return (
    <Link to={`/explore/${title}`}>
      <div className="col">
        <div className="product-item">
          <figure>
            <div title={title} className="overflow-none">
              <img src={imageUrl} className="tab-image" alt="Product Thumbnail" />

            </div>
          </figure>
          <h3>{title}</h3>
          <h5 className="qty">{category}</h5>
          <span className="price">{price} TL</span>
          <div className="d-flex align-items-center justify-content-between">
            <div className="input-group product-qty">
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-left-minus btn btn-danger btn-number"
                  data-type="minus"
                  onClick={handleDecrement}
                >
                  <AiOutlineMinus height="16" width="16" />
                </button>
              </span>

              <input
                type="text"
                id="quantity"
                name="quantity"
                className="form-control input-number"
                value={initialQuantity}
                onChange={(e) => setInitialQuantity(e.target.value)}
                min="1"
                max="100"
              />
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-right-plus btn btn-success btn-number"
                  data-type="plus"
                  onClick={handleIncrement}
                >
                  <AiOutlinePlus height="16" width="16" />
                </button>
              </span>
            </div>

            <button className="rfces text-white" onClick={handleAddtoCart}>
              Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

const ProductsPageSmallMotor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const totalProducts = Data.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const range = 5;
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const newData = Data?.filter(
    (item) => item.category === "motor-ve-motor-suruculer"
  );

  const filteredProducts = newData?.filter((item) =>
    item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTag("");
  };

  const displayedProducts = filteredProducts
    ?.filter(
      (item) =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (!selectedTag || (item.tags && item.tags.includes(selectedTag))) &&
        (!selectedBrand ||
          (item.brand && item.brand.includes(selectedBrand))) &&
        (!selectedPriceRange ||
          (item.price >= selectedPriceRange.min &&
            item.price <= selectedPriceRange.max))
    )
    .slice(startIndex, endIndex);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory("All");
    setSelectedTag("");
  };

  const handlePriceRangeClick = (priceRange) => {
    setSelectedPriceRange(priceRange);
    setSelectedCategory("All");
    setSelectedTag("");
    setSelectedBrand("");
  };

  return (
    <div className="shopify-grid">
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3">
            <div className="sidebar">
              <div className="widget-menu">
                <div className="widget-search-bar pe-5">
                  <form role="search" method="get" className="d-flex">
                    <input
                      className="form-control form-control-lg rounded-start rounded-0 bg-light"
                      type="email"
                      placeholder="Search"
                      aria-label="What are you looking for?"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <button
                      className="btn btn-dark rounded-end rounded-0"
                      type="submit"
                    >
                      <i class="pi pi-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget-product-categories pt-5">
  <h5 className="widget-title">Categories</h5>
  <ul className="product-categories sidebar-list list-unstyled ">
    <li
      className={`cat-item ${
        selectedCategory === "All" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("All")}>
        All
      </Link>
    </li>


    <li
      className={`cat-item ${
        selectedCategory === "Raspberry" ? "active" : ""
      }`}
    >
      <Link to="/shop/raspberry" onClick={() => handleCategoryClick("Raspberry")}>
        Raspberry
      </Link>
    </li>

    <li
      className={`cat-item ${
        selectedCategory === "Arduino" ? "active" : ""
      }`}
    >
      <Link to="/shop/arduino" onClick={() => handleCategoryClick("Arduino")}>
        Arduino
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Microcontrollers" ? "active" : ""
      }`}
    >
      <Link to="/shop/microcontrollers" onClick={() => handleCategoryClick("Microcontrollers")}>
        Microcontrollers
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Handtools" ? "active" : ""
      }`}
    >
      <Link to="/shop/hand-tools" onClick={() => handleCategoryClick("Handtools")}>
        Handtools
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Adaptors" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("Adaptors")}>
        Adaptors
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Motors" ? "active" : ""
      }`}
    >
      <Link to="/shop/motor-motor-controllers" onClick={() => handleCategoryClick("Motors")}>
        Motors
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "IC" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("IC")}>
        IC
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Solar" ? "active" : ""
      }`}
    >
      <Link to="/shop/solar-pannels-batteries" onClick={() => handleCategoryClick("Solar")}>
        Solar
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Modules" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("Modules")}>
        Modules
      </Link>
    </li>
    <li
      className={`cat-item ${
        selectedCategory === "Accessories" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("Accessories")}>
        Accessories
      </Link>
    </li>



    <li
      className={`cat-item ${
        selectedCategory === "Sound System" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("Sound System")}>
        Sound System
      </Link>
    </li>





    <li
      className={`cat-item ${
        selectedCategory === "Computer Networks and Cabling" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("Computer Networks and Cabling")}>
        Computer Networks and Cabling
      </Link>
    </li>

    <li
      className={`cat-item ${
        selectedCategory === "HDMI Cable, USB Cable and Others" ? "active" : ""
      }`}
    >
      <Link to="/shop" onClick={() => handleCategoryClick("HDMI Cable, USB Cable and Others")}>
        HDMI Cable, USB Cable and Others
      </Link>
    </li>
  </ul>
</div>


              <div className="widget-price-filter pt-3">
                <h5 className="widget-title">Filter By Price</h5>
                <ul className="product-tags sidebar-list list-unstyled text-dark">
                  {[
                    { min: 10, max: 50 },
                    { min: 50, max: 200 },
                    { min: 200, max: 500 },
                    { min: 500, max: 1000 },
                    { min: 1000, max: 5000 },
                    { min: 5000, max: 10000 },
                  ].map((priceRange) => (
                    <li
                      className="tags-item"
                      key={`${priceRange.min}-${priceRange.max}`}
                    >
                      <span
                        className={`nav-link ${
                          selectedPriceRange === priceRange ? "active" : ""
                        }`}
                        onClick={() => handlePriceRangeClick(priceRange)}
                        style={{ cursor: "pointer" }}
                      >
                        {`${priceRange.min}TL - ${priceRange.max}TL`}
                      </span>
                    </li>
                  ))}
                </ul>
                {selectedPriceRange && (
                  <p>
                    Selected Price Range: {selectedPriceRange.min}TL -
                    {selectedPriceRange.max}TL
                  </p>
                )}
              </div>
            </div>
          </aside>
          <main className="col-md-9">
            <div className="filter-shop d-flex justify-content-between">
              <div className="showing-product">
                <p>Showing 1–9 of 55 results</p>
              </div>
            </div>
            <div className="product-grid row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
              {displayedProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  title={item.ItemName}
                  imageUrl={item.pic}
                  category={item.category}
                  unit="15 Unit"
                  rating="4.5"
                  price={item.price}
                  initialQuantity="1"
                />
              ))}
            </div>
            <nav
              className="navigation paging-navigation text-center padding-medium"
              role="navigation"
            >
              <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
                <AiOutlineArrowLeft
                  className="chevron-left pe-3"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />

                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                  <span
                    key={startPage + index}
                    className={`page-numbers nav-link ${
                      currentPage === startPage + index ? "current" : ""
                    }  pe-3`}
                    onClick={() => handlePageChange(startPage + index)}
                  >
                    {startPage + index}
                  </span>
                ))}
                <AiOutlineArrowRight
                  className="chevron-right ps-3"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </div>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageSmallMotor;
