import React from "react";
import { useCart } from "../../context/cartcontext";

function Carttotal() {
  const { cartState, dispatch } = useCart();
  return (
    <div className="price-system flex-col">
      <h2 className="h2-text text-align-center">PRICE DETAILS</h2>
      <div className="price-cart">
        <div className="price-list flex-row">
          <h4 className="h4-text wt-md">Total Price :</h4>
          <h4 className="h4-text wt-md price">₹{cartState.price}</h4>
        </div>
        <div className="price-list flex-row">
          <h4 className="h4-text wt-md">Discount :</h4>
          <h4 className="h4-text price wt-md">₹{cartState.discount}</h4>
        </div>
        <div className="price-list flex-row">
          <h4 className="h4-text wt-md">Delivery Charges :</h4>
          <h4 className="h4-text price wt-md">₹0</h4>
        </div>
        <div className="price-list flex-row">
          <h4 className="h4-text">Total Price :</h4>
          <h4 className="h4-text price wt-md prime-color-text">
            ₹{cartState.total}
          </h4>
        </div>
      </div>
      <button className="btn-primary small-btn checkout-btn">CHECKOUT</button>
    </div>
  );
}

export default Carttotal;
