import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import constants from "../../constants";
import strings from "./strings";
import iconPhone from "./graphics/phoneIcon.png";
import iconLocation from "./graphics/locationIcon.png";
import iconCart from "./graphics/cartIcon.png";

 Navbar = () => (
    <div>
      <div>
        <div>
          <div>
            <img alt="" src={iconPhone} className="nav-icon" />
            <div>{strings.phone}</div>
          </div>
          <div>
            <Link to={constants.routes.BRANDS} className="nav-btn">
              {strings.watches}
            </Link>
            <Link to={constants.routes.UNDER_CONSTRUCTION} className="nav-btn">
              {strings.about}
            </Link>
            <Link to={constants.routes.UNDER_CONSTRUCTION} className="nav-btn">
              {strings.contact}
            </Link>
          </div>
        </div>
        <div>
          <Link to={constants.routes.HOME} id="logo-link">
            {strings.watchShop}
          </Link>
        </div>
        <div>
          <div>
            <img alt="" src={iconLocation} className="nav-icon" />
            <div>{strings.address}</div>
          </div>
          <div>
          <Link to={constants.routes.CART} className="nav-btn">
      <div>{strings.cart}</div>
      {props.cart.cart.length > 0 && <div>({props.cart.cart.length})</div>}
      <img src={iconCart} alt="" id="cart-icon" />
    </Link>
          </div>
        </div>
      </div>
    </div>
  );


const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);