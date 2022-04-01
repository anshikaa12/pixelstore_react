import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartreducer";

const cart = createContext();
const useCart =()=> useContext(cart);
const CartProvider =({children})=>{
    
    const [state,dispatch]=useReducer(cartReducer,{price:0,discount:0,total:0,cartlist:[]})

return <cart.Provider value={{state,dispatch}}>
    {children}
</cart.Provider>
}
export { CartProvider, useCart };