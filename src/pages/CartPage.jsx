import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    // Calculate the total quantity and total cost
    let quantity = 0;
    let cost = 0;
    storedCartItems.forEach((item) => {
      quantity += item.quantity;
      cost += item.quantity * item.price;
    });
    setTotalQuantity(quantity);
    setTotalCost(cost);
  }, [cartItems]); // Burada cartItems'i izlememiz gerekiyor.

  const handleQuantityChange = (index, action) => {
    const updatedCartItems = [...cartItems];
    if (action === 'add') {
      updatedCartItems[index].quantity++;
    } else if (action === 'subtract') {
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity--;
      }
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Vergi oranı
  const taxRate = 0.15; // %15

  // Kargo ücreti
  const shippingCost = 80; // 80 TL

  // Toplam ücreti hesapla (vergi ve kargo ücreti dahil)
  const calculateTotalCost = (subtotal) => {
    const total = subtotal * (1 + taxRate) + shippingCost;
    return total.toFixed(2);
  };

  return (
    <>
      <section
        className="py-5 mb-5"
        style={{
          // backgroundImage: `url(${backgroundpattern})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="page-title pb-2 btn-dark" >
              Cart
            </h1>
            <nav className="breadcrumb fs-6">
              <Link className="breadcrumb-item nav-link" to="/">
                Home
              </Link>
              <span className="breadcrumb-item active" aria-current="page">
                Cart
              </span>
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
                    <h6 className="cart-title text-uppercase text-muted col-lg-4 pb-3">Subtotal</h6>
                  </div>
                </div>

                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item border-top border-bottom">
                    <div className="row align-items-center">
                      <div className="col-lg-4 col-md-3">
                        <div className="cart-info d-flex flex-wrap align-items-center">
                          <div className="col-lg-5">
                            <div className="card-image">
                              <img src={item.image} alt="product" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="card-detail ps-3">
                              <h5 className="card-title">
                                <a href="https" className="text-decoration-none">
                                  {item.name}
                                </a>
                              </h5>
                              <div className="card-price">
                                <span className="money text-dark">{item.price} TL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-7">
                        <div className="row d-flex">
                          <div className="col-lg-4">
                            <div className="input-group product-qty">
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-left-minus btn btn-light btn-number"
                                  onClick={() => handleQuantityChange(index, 'subtract')}
                                >
                                  -
                                </button>
                              </span>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                className="form-control input-number text-center"
                                value={item.quantity}
                                readOnly
                              />
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="quantity-right-plus btn btn-light btn-number"
                                  onClick={() => handleQuantityChange(index, 'add')}
                                >
                                  +
                                </button>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-8 text-center">
                            <div className="total-price">
                              <span className="money text-dark">{item.quantity * item.price} TL</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-2">
                        <div className="cart-remove">
                          <button className='btn' onClick={() => handleRemoveItem(index)}>
                            <i className="pi pi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart-totals bg-grey padding-medium">
                <h4 className="text-dark pb-4">Cart Total : {totalQuantity} items</h4>
                <div className="total-price pb-5">
                  <table cellSpacing="0" className="table text-uppercase">
                    <tbody>
                      <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                          <span className="price-amount amount text-dark ps-5">
                            <bdi>
                              <span className="price-currency-symbol">{totalCost.toFixed(2)} </span> TL
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total pt-2 pb-2 border-bottom">
                        <th>Total + Shipping</th>
                        <td data-title="Total">
                          <span className="price-amount amount text-dark ps-5">
                            <bdi>
                              <span className="price-currency-symbol">{calculateTotalCost(totalCost)}</span> TL
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="button-wrap row g-2">
                  <Link to="/shop" className="col-md-6">
                    <button className="btn btn-light btn-lg  btn-rounded-none w-100">
                      Back to shop
                    </button>
                  </Link>
                  <Link to="/checkout" className="col-md-6">
                    <button className="btn btn-dark btn-lg p-2  btn-rounded-none w-100">
                      Payment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
