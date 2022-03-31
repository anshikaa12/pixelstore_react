import React from 'react';
import { useCart } from '../services/context/cartcontext';
import { useProduct } from "../services/product_api";

function Card() {
    const { state, dispatch } = useCart();
    const { cardData } = useProduct();
    return (
        cardData && cardData.map(item => {
            return (
                <div className="e-basic-card">
                    <img src={item.image} className="e-card-img" alt="Loading" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <span className="e-card-subtext">{item.subtext}
                            <br />
                            <span className="prime-color-text h4-text" >₹{item.price}</span> <del>₹{item.originialprice}</del> <span
                                className="small-grey" > Save ₹{item.discount}</span>
                        </span>

                        <div className="card-footer">
                            <button className="mid-btn btn-primary" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add to cart</button>
                            <div className="connect-part"><i className="far fa-heart card-icon"></i></div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card