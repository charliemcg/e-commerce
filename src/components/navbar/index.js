import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ROUTES} from "../../constants";
import strings from "./strings";
import iconPhone from "./graphics/phoneIcon.png";
import iconLocation from "./graphics/locationIcon.png";
import iconCart from "./graphics/cartIcon.png";

 function Navbar(props) {
     return(
    <div>
      <div>
        <div>
          <div>
            <img alt="" src={iconPhone} />
            <div>{strings.phone}</div>
          </div>
          <div>
            <Link to={ROUTES.PRODUCTS}>
              {strings.products}
            </Link>
            <Link to={ROUTES.UNDER_CONSTRUCTION} >
              {strings.about}
            </Link>
            <Link to={ROUTES.UNDER_CONSTRUCTION}>
              {strings.contact}
            </Link>
          </div>
        </div>
        <div>
          <Link to={ROUTES.HOME}>
            {strings.shopName}
          </Link>
        </div>
        <div>
          <div>
            <img alt="" src={iconLocation}/>
            <div>{strings.address}</div>
          </div>
          <div>
          <Link to={ROUTES.CART}>
      <div>{strings.cart}</div>
      {props.cart.cart.length > 0 && <div>({props.cart.cart.length})</div>}
      <img src={iconCart} alt="" />
    </Link>
          </div>
        </div>
      </div>
    </div>
  )};


const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);