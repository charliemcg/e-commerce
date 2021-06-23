import { ACTIONS } from "../constants";

//TODO remove any
export const addToCart = (product: any) => (dispatch: any) => {
  dispatch({
    type: ACTIONS.addToCart,
    payload: product,
  });
};

//TODO remove any
export const removeFromCart = (id: any) => (dispatch: any) => {
  dispatch({
    type: ACTIONS.removeFromCart,
    payload: id,
  });
};
