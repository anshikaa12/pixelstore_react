import React from 'react'
import { Nav, Footer } from "../../components";
import { CartProvider } from '../../services/context/cartcontext';
import Cartlist from './Cartlist';
import Carttotal from './Carttotal';
function Cart() {
    return (
        <div>
            <Nav />
            <div class="cart-management flex-col">
                <h3 class="main-h3">MY CART</h3>
                <div class="cart-main-container flex-row">
                    <Cartlist />
                    <Carttotal />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart