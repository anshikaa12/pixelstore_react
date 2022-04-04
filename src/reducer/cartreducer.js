import {
  plusQuantityCart,
  minusQuantityCart,
  addToCartList,
} from "./utils/cartUtils";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        price: state.price + action.payload.price,
        discount: state.discount + action.payload.discount,
        total: state.total + action.payload.price,
        cartlist: addToCartList(state, action),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        price: state.price - action.payload.price * action.payload.qty,
        discount: state.discount - action.payload.discount * action.payload.qty,
        total: state.total - action.payload.price * action.payload.qty,
        cartlist: state.cartlist.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        price: state.price + action.payload.price,
        discount: state.discount + action.payload.discount,
        total: state.total + action.payload.price,
        cartlist: plusQuantityCart(state, action),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        price: state.price - action.payload.price,
        discount: state.discount - action.payload.discount,
        total: state.total - action.payload.price,
        cartlist: minusQuantityCart(state, action),
      };
    default:
      return state;
  }
};

export { cartReducer };
