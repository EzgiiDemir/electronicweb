import React from "react";
import { CustomLink } from "./Header";

function ShowMenu({ handleCloseM, showM }) {
  const showHideClassName = showM
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div
        className="offcanvas offcanvas-end show"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleCloseM}
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* <select className="filter-categories border-0 mb-0 me-5">
            <option disabled defaultValue hidden>Shop by Departments</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
          </select> */}

          <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
          <CustomLink to="/shop">Store</CustomLink>
                  <CustomLink to="/shop/raspberry">Raspberry</CustomLink>
                  <CustomLink to="/shop">Arduino</CustomLink>
                  <CustomLink to="/shop/solar-pannels-batteries">Solar</CustomLink>
                  <CustomLink to="/shop">IC</CustomLink>
                  <CustomLink to="/shop/hand-tools">Handtools</CustomLink>
                  <CustomLink to="/shop">Adaptors</CustomLink>
                  <CustomLink to="/shop/motor-motor-controllers">Motors</CustomLink>
                  <CustomLink to="/shop">Modules</CustomLink>
                  <CustomLink to="/shop/microcontrollers">Microcontrollers</CustomLink>
                  <CustomLink to="/shop">Sound Systems</CustomLink>
                  <CustomLink to="/shop">HDMI cable, USB cable and others</CustomLink>
                  <CustomLink to="/shop">Computer networks and cabling</CustomLink>

                  <CustomLink to="/shop">Accessories</CustomLink>


          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowMenu;
