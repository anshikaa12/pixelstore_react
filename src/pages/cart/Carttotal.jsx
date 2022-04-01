import React from 'react'
import { useCart } from '../../services/context/cartcontext'

function Carttotal() {
    const { state, dispatch } = useCart();
    return (
        <div class="price-system flex-col">
            <h2 class="h2-text text-align-center">PRICE DETAILS</h2>
            <div class="price-cart">
                <div class="price-list flex-row">
                    <h4 class="h4-text wt-md">Total Price :</h4>
                    <h4 class="h4-text wt-md price">₹{state.price}</h4>
                </div>
                <div class="price-list flex-row">
                    <h4 class="h4-text wt-md">Discount :</h4>
                    <h4 class="h4-text price wt-md">₹{state.discount}</h4>
                </div>
                <div class="price-list flex-row">
                    <h4 class="h4-text wt-md">Delivery Charges :</h4>
                    <h4 class="h4-text price wt-md">₹0</h4>
                </div>
                <div class="price-list flex-row">
                    <h4 class="h4-text">Total Price :</h4>
                    <h4 class="h4-text price wt-md prime-color-text">₹{state.total}</h4>
                </div>
            </div>
            <button class="btn-primary small-btn checkout-btn">CHECKOUT</button>
        </div>

    )
}

export default Carttotal