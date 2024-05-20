import React, { useEffect, useState } from "react";
// import backgroundpattern from "../images/background-pattern.jpg";
import { Link } from "react-router-dom";

function CheckOut() {
  const [totalCost, setTotalCost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "",
    city: "",
    street: "",
    phone: "",
    selectedOption: "",
    cardNumber: "",
    cardExp: "",
    cardCVC: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption: selectedValue,
    }));
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.selectedOption === "credit_card" &&
      (!formData.cardNumber ||
        !formData.cardExp ||
        !formData.cardCVC ||
        !formData.fname ||
        !formData.lname)
    ) {
      alert("Please fill in all required fields for credit card payment.");
    } else {
      setOrderPlaced(true);
      console.log("Checkout Data:", formData);
      // Ödeme işlemleri burada yapılacak
    }
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let quantity = 0;
    let cost = 0;
    storedCartItems.forEach((item) => {
      quantity += item.quantity;
      cost += item.quantity * item.price;
    });

    setTotalCost(cost);
    setTotalQuantity(quantity);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className="py-5 mb-5"
        style={{
          // backgroundImage: `url(${backgroundpattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="page-title pb-2">Checkout</h1>
            <nav className="breadcrumb fs-6">
              <Link className="breadcrumb-item nav-link" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item nav-link" to="/cart">
                Cart
              </Link>
              <span className="breadcrumb-item active" aria-current="page">
                Checkout
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className="shopify-cart checkout-wrap padding-large">
        <div className="container-fluid">
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="row d-flex flex-wrap">
              <div className="col-lg-6">
                <h4 className="text-dark pb-4">Billing Details</h4>
                <div className="billing-details">
                  <label htmlFor="fname">First Name*</label>
                  <input
                    value={formData.fname}
                    onChange={(e) => handleInputChange("fname", e.target.value)}
                    type="text"
                    id="fname"
                    name="firstname"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                  <label htmlFor="lname">Last Name*</label>
                  <input
                    value={formData.lname}
                    onChange={(e) => handleInputChange("lname", e.target.value)}
                    type="text"
                    id="lname"
                    name="lastname"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                  <label htmlFor="email">Email address *</label>
                  <input
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                  <label htmlFor="country">Country / Region*</label>
                  <input
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    type="text"
                    id="country"
                    name="country"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                  <label htmlFor="city">Town / City *</label>
                  <input
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    type="text"
                    id="city"
                    name="city"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                  <label htmlFor="address">Street Address*</label>
                  <input
                    value={formData.street}
                    onChange={(e) => handleInputChange("street", e.target.value)}
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="House number and street name"
                    className="form-control mt-3 ps-3 mb-3"
                    required
                  />
                  <label htmlFor="phone">Phone *</label>
                  <input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control mt-2 mb-4 ps-3"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="text-dark pb-4">Payment Information</h4>
                <div className="billing-details">
                  <div className="list-group mt-5 mb-3">
                    <label className="list-group-item d-flex gap-2 border-0">
                      <input
                        className="form-check-input flex-shrink-0"
                        type="radio"
                        name="listGroupRadios"
                        id="listGroupRadios1"
                        value="credit_card"
                        checked={formData.selectedOption === "credit_card"}
                        onChange={handleRadioChange}
                        required
                      />
                      <span>
                        <strong className="text-uppercase">Credit Card/Bank Card</strong>
                      </span>
                    </label>
                  </div>
                  {formData.selectedOption === "credit_card" && (
                    <div className="credit-card-details">
                      <label htmlFor="fullname">Full Name *</label>
                      <input
                        value={`${formData.fname} ${formData.lname}`}
                        onChange={(e) =>
                          handleInputChange("fullname", e.target.value)
                        }
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control mt-2 mb-4 ps-3"
                        required
                      />
                      <label htmlFor="cardNumber">Card Number *</label>
                      <input
                        value={formData.cardNumber}
                        onChange={(e) =>
                          handleInputChange("cardNumber", e.target.value)
                        }
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="form-control mt-2 mb-4 ps-3"
                        required
                      />
                      <label htmlFor="cardExp">Expiration Date (MM/YYYY) *</label>
                      <input
                        value={formData.cardExp}
                        onChange={(e) =>
                          handleInputChange("cardExp", e.target.value)
                        }
                        type="text"
                        id="cardExp"
                        name="cardExp"
                        className="form-control mt-2 mb-4 ps-3"
                        required
                      />
                      <label htmlFor="cardCVC">CVC *</label>
                      <input
                        value={formData.cardCVC}
                        onChange={(e) =>
                          handleInputChange("cardCVC", e.target.value)
                        }
                        type="text"
                        id="cardCVC"
                        name="cardCVC"
                        className="form-control mt-2 mb-4 ps-3"
                        required
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-dark text-uppercase btn-rounded-none w-50 mt-3"
                    disabled={orderPlaced}
                  >
                    {orderPlaced ? "Order Placed" : "Place an order"}
                  </button>
                  {orderPlaced && (
                    <p className="text-success mt-3">Your order has been placed successfully.</p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
