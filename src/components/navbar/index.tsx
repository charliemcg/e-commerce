import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../../constants";
import strings from "./strings";
import iconPhone from "./graphics/phoneIcon.png";
import iconLocation from "./graphics/locationIcon.png";
import iconCart from "./graphics/cartIcon.png";

//TODO remove any
function Navbar(props: any) {
  return (
    <div className="flex-1 align-center justify-center p-2">
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="flex flex-row border-b border-black h-1/2">
            <img alt="" src={iconPhone} className="w-5 h-5" />
            <div className="text-base text-gray-400 px-4">{strings.phone}</div>
          </div>
          <div className="flex flex-row justify-around align-center h-1/2">
            <Link
              to={ROUTES.PRODUCTS}
              className="text-gray-700 no-underline flex align-center h-6"
            >
              {strings.products}
            </Link>
            <Link
              to={ROUTES.UNDER_CONSTRUCTION}
              className="text-gray-700 no-underline flex align-center h-6"
            >
              {strings.about}
            </Link>
            <Link
              to={ROUTES.UNDER_CONSTRUCTION}
              className="text-gray-700 no-underline flex align-center h-6"
            >
              {strings.contact}
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center border border-yellow-700 bg-yellow-100 rounded-full p-8 h-14">
          <Link to={ROUTES.HOME} className="text-center">
            {strings.shopName}
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-end align-center h-1/2 border-b border-black">
            <img alt="" src={iconLocation} className="w-5 h-5" />
            <div className="text-base px-4 text-gray-400">
              {strings.address}
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={ROUTES.CART}
              className="text-gray-700 no-underline flex align-center h-6"
            >
              <div className="flex justify-around align-center text-gray-700">
                {strings.cart}
              </div>
              {props.cart.cart.length > 0 && (
                <div>({props.cart.cart.length})</div>
              )}
              <img src={iconCart} alt="" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO don't use any
const mapStateToProps = (state: any) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);
