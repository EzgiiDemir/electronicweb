import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/ALEMDAR_TEKNIK_LOGO.png";
import giftIcon from "../images/gift.svg";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Popup from "./PopUp";
import SearchPop, { Matched } from "./searchPop";
import ShowMenu from "./showMenu";
import Data from "../assets/item";
import 'primeicons/primeicons.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  let filteredItems = Data.filter((item) => {
    return (
      item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  if (searchTerm.trim() !== "") {
    filteredItems = filteredItems.slice(0, 12);
  }


  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Use history.push to navigate programmatically
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    setCartItems(storedCartItems);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [showPopupS, setShowPopupS] = useState(false);
  const togglePopupS = () => {
    setShowPopupS(!showPopupS);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSearchResults(true);
      } else {
        setShowSearchResults(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = (item) => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newCartItems = [...storedCartItems, item];
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));

    setCartItems(newCartItems);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <>
      <Popup show={showPopup} handleClose={togglePopup} />
      <SearchPop showS={showPopupS} handleCloseS={togglePopupS} />
      <ShowMenu showM={showMenu} handleCloseM={toggleMenu} />

      <header>
        <div className="container-fluid">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" className="img-fluid px-2 py-2" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar row  p-2 my-2 rounded-4">

                <div
                  className="col-11 col-md-7"
                  style={{ marginLeft: ".75rem" }}
                >
                  <form
                    id="search-form"
                    className="text-center"
                    action=""
                    method=""
                  >
                    <input
                      type="text"
                      id="h_text"
                      className="form-control border-0 bg-light"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li className="border-0 btn text-dark d-lg-none px-3">
                  <a href="https://alemdar-register-school.netlify.app/" >Register Lab</a>
                </li>

                <li className="">
                  <Link
                    onClick={togglePopup}
                    className="rounded-circle bg-light  mx-1 "
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      position: "relative", // Add this line
                    }}
                  >
                         <i className="pi pi-shopping-cart"></i>
                    {totalQuantity > 0 && ( // Add this line
                      <span
                        style={{
                          position: "absolute",
                          top: "-13px",
                          right: "-7px",
                          background: "transparent",
                          color: "black",
                          borderRadius: "50%",
                          padding: "10px",
                          fontSize: "11px",

                        }}
                      >
                        {totalQuantity}
                      </span>
                    )}
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={togglePopupS}
                    className="rounded-circle bg-light d-lg-none mx-1"
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <AiOutlineSearch height="24" width="24" />
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
              <nav className="main-menu d-flex navbar navbar-expand-lg">
                <button
                  onClick={toggleMenu}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header justify-content-center">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">

                      <CustomLink to="/register">REGISTER TO LAB</CustomLink>
                      <CustomLink to="/shop">Store</CustomLink>
                      <CustomLink to="/shop/raspberry">Raspberry</CustomLink>
                      <CustomLink to="/shop">Arduino</CustomLink>
                      <CustomLink to="/shop/motor-motor-controllers">Motors</CustomLink>

                      <CustomLink to="/shop/solar-pannels-batteries">Solar</CustomLink>

                      <CustomLink to="/shop/microcontrollers">Microcontrollers</CustomLink>
                      <CustomLink to="/shop/hand-tools">Handtools</CustomLink>

                      <CustomLink to="/shop">Accessories</CustomLink>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="d-none d-lg-block">
                <a href="#discount" className="nav-link btn-coupon-code">
                  <strong className="ms-2">Get your coupon code</strong>
                  <i className="pi pi-gift px-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={showSearchResults ? "srcsrc d-none" : "srcsrc"}>
        <ul className="list-group mb-3 mt-3" style={{ overflowY: "hidden" }}>
          {searchTerm.trim() !== "" && (
            <ul className="list-group mb-3 mt-3">
              {filteredItems.map((item, index) => (
                <Link to={`/explore/${item.ItemName}`} key={index}>
                  <Matched
                    title={item.ItemName}
                    category={item.category}
                  />
                </Link>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;

export function CustomLink({ to, children, ...props }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
}
