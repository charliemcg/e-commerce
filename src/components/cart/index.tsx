import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";
import strings from "./strings";

function Cart(props: {cart: {cart: {_id: string, price: string, image: string, brand: string, model: string}[]}, removeFromCart: (data: string) => void}) {
  const handleRemoval = (id: string) => {
    props.removeFromCart(id);
  };

  const getNoItems = () => {
    return (
      <div>
        <div>
          <div>{strings.noItems}</div>
        </div>
      </div>
    );
  };

  const getItems = () => {
    return props.cart.cart.map((product) => {
      return (
        <div>
          <img
            src={`data:image/jpeg;base64,${product.image}`}
            alt={strings.accessibility.productImage}
          />
          <div>
            <div>{product.brand}</div>
            <div>{product.model}</div>
          </div>
          <div>
            <div onClick={() => handleRemoval(product._id)}>
              {strings.remove}
            </div>
          </div>
          <div>${product.price}</div>
        </div>
      );
    });
  };

  const getGrandTotal = () => {
    let grandTotal = 0;
    for (let i in props.cart.cart) {
      grandTotal += parseInt(props.cart.cart[i].price);
    }
    return grandTotal;
  };

  return props.cart.cart.length === 0 ? (
    getNoItems()
  ) : (
    <div>
      <div>
        <div>{getItems()}</div>
        <div>
          Put user shipping details here. Total price: ${getGrandTotal()}
        </div>
      </div>
    </div>
  );
}

//TODO remove any
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//   removeFromCart: (product) => {
//     dispatch(removeFromCart(product));
//   },
//   };
// };

export default connect(mapStateToProps, { removeFromCart })(Cart);
