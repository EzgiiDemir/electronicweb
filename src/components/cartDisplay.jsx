import React from 'react';

function CartDisplay() {
  // Sepet öğeleri
  const cartItems = [
    { name: 'Growers cider', price: 12 },
    { name: 'Fresh grapes', price: 8 },
    { name: 'Heinz tomato ketchup', price: 5 }
  ];

  // Sepet toplamı hesapla
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-labelledby="My Cart">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-dark">Your cart</span>
            <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{item.name}</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">${item.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (TRY)</span>
              <strong>{total}</strong>
            </li>
          </ul>
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartDisplay;
