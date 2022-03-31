import { createContext, useContext, useReducer } from "react";
const cart = createContext();
const useCart =()=> useContext(cart);

const CartProvider =({children})=>{
    function addToCartList(state,action){
        const {name,_id,subtext,price,originialprice,discount,image,quantity} = action.payload;
        let isProductPresent= false;
        let updatedList= state.cartlist.map(item=>{
            if(item._id===action.payload._id){
                isProductPresent=true;
                return {...item,quantity:item.quantity-1,qty:item.qty+1}
            }
            return item;
        })
        if(!isProductPresent){
            updatedList=[...state.cartlist,{name,_id,subtext,price,originialprice,discount,image,quantity:quantity-1,qty:1}];
        }
       return updatedList;
    }

    function plusQuantityCart(state,action){
        let updatedQntList= state.cartlist.map(item=>{
            if(item._id===action.payload._id){
                return {...item,qty:item.qty+1}
            }
            return item;
        })
        return updatedQntList;
    }

    function minusQuantityCart(state,action){
        let updatedQntList= state.cartlist.map(item=>{
            if(item._id===action.payload._id){
                return {...item,qty:item.qty-1}
            }
            return item;
        })
      
        return updatedQntList;
    }
    
    const [state,dispatch]=useReducer((state,action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            return {...state,price: state.price+action.payload.price,discount: state.discount+action.payload.discount,total:state.total+action.payload.price,
                cartlist: addToCartList(state,action)};
        case "REMOVE_FROM_CART":
            return {...state,price: state.price-(action.payload.price*action.payload.qty),discount: state.discount-(action.payload.discount*action.payload.qty),total:state.total-(action.payload.price*action.payload.qty),cartlist:state.cartlist.filter(item=>item._id!==action.payload._id)};
        case "INCREMENT_QTY":
            return {...state,price:state.price+action.payload.price,discount: state.discount+action.payload.discount,total:state.total+action.payload.price,cartlist:plusQuantityCart(state,action)}
        case "DECREMENT_QTY":
            return {...state,price:state.price-action.payload.price,discount: state.discount-action.payload.discount,total:state.total-action.payload.price,cartlist:minusQuantityCart(state,action)}
        default :
            return state;
    }
},{price:0,discount:0,total:0,cartlist:[]})

return <cart.Provider value={{state,dispatch}}>
    {children}
</cart.Provider>
}
export { CartProvider, useCart };