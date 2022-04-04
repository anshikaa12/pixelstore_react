import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartreducer";

const cart = createContext();
const useCart = () => useContext(cart);
const CartProvider = ({ children }) => {
  const [cartState, cartFunc] = useReducer(cartReducer, {
    price: 0,
    discount: 0,
    total: 0,
    cartlist: [],
  });

  return (
    <cart.Provider value={{ cartState, cartFunc }}>{children}</cart.Provider>
  );
};
export { CartProvider, useCart };
