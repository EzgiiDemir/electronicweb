import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import justArrived from '../components/justArrived';
import Data from '../assets/item';
import { FiHeart } from 'react-icons/fi';

function FavPage() {
  useEffect(() => {
    // Sayfa yüklendiğinde en üste kaydır
    window.scrollTo(0, 0);
  }, []);

  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    // Favori ürünler local storage'dan alınıyor
    const storedFavItems = JSON.parse(localStorage.getItem('favItems')) || [];
    setFavItems(storedFavItems);
  }, []);

  // Favorilerden ürünü kaldır
  const removeFromFavorites = (item) => {
    const updatedFavItems = favItems.filter((favItem) => favItem.ItemName !== item.ItemName);
    setFavItems(updatedFavItems);
    localStorage.setItem('favItems', JSON.stringify(updatedFavItems));
  };

  return (
    <>
      <section className="py-5 mb-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="page-title px-1 btn-dark">Favorites</h1>
            <nav className="breadcrumb fs-6">
              <Link className="breadcrumb-item nav-link" to="/">Home</Link>
              <span className="breadcrumb-item active" aria-current="page">Favorites</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="shopify-cart padding-large">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="cart-table">
                <div className="cart-header">
                  <div className="row d-flex">
                    <h6 className="cart-title text-uppercase text-muted col-lg-4 pb-3">Product</h6>
                    <h6 className="cart-title text-uppercase text-muted col-lg-3 pb-3">Quantity</h6>
                    <h6 className="cart-title text-uppercase text-muted col-lg-3 pb-3">Price</h6>

                  </div>
                </div>

                {favItems.length === 0 ? (
                  <div className="text-center">No favorite items yet.</div>
                ) : (
                  favItems.map((item, index) => (
                    <div key={index} className="cart-item border-top border-bottom">
                      <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3">
                          <div className="cart-info d-flex flex-wrap align-items-center">
                            <div className="col-lg-5">
                              <div className="card-image">
                                <img src={item.pic} alt="product" className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-detail ps-3">
                                <h5 className="card-title">
                                  <Link to={`/explore/${item.ItemName}`} className="text-decoration-none">{item.ItemName}</Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="row d-flex">
                            <div className="col-lg-4">
                              <div className="input-group product-qty">
                                <span id="quantity" name="quantity" className="form-control input-number text-center">{item.quantity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="cart-price">
                            <span className="money text-dark">{item.price} TL</span>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                          <button onClick={() => removeFromFavorites(item)} className="btn btn-danger btn-sm text-uppercase">

                          <i className="pi pi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default FavPage;
