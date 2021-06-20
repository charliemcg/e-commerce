import { ACTIONS } from "../constants";

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ACTIONS.removeFromCart:
      state.cart.splice(
        state.cart.findIndex(function (e) {
          return e._id === action.payload;
        }),
        1
      );
      return {
        ...state,
      };
    default:
      return state;
  }
}
