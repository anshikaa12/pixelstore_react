import React from 'react'
import { Nav, Footer } from "../../components";
import Cartlist from './Cartlist';
import Carttotal from './Carttotal';
function Cart() {
    return (
        <div>
            <Nav />
            <div className="cart-management flex-col">
                <h3 className="main-h3">MY CART</h3>
                <div className="cart-main-container flex-row">
                    <Cartlist />
                    <Carttotal />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart