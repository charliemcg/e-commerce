import { ACTIONS } from "../constants";

const initialState = {
  cart: [],
};

//TODO remove any
export default function (state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ACTIONS.removeFromCart:
      state.cart.splice(
        //TODO remove any
        state.cart.findIndex(function (e: any) {
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
