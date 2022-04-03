import React from 'react';
import { useCart } from '../context/cartcontext';
import { useProduct } from "../services/product_api";
import { useWishlist } from "../context/wishlistcontext";
import { useFilter } from '../context/filtercontext';
import { sortedData } from "../context/filtercontext"
import { sorted_price_list } from "../reducer/filterreducer";

function Card() {
    const { state, dispatch } = useCart();
    const { cardData } = useProduct();
    const { currState, wishFunc } = useWishlist();
    const { filterState, filterFunc } = useFilter();
    const sortedData = sorted_price_list(filterState.sortBy, cardData);
    const productsList = filterState.sortBy !== "" ? sortedData : cardData;
    return (
        productsList.map(item => {
            return (
                <div className="e-basic-card" key={item._id}>
                    <img src={item.image} className="e-card-img" alt="Loading" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <span className="e-card-subtext">{item.subtext}
                            <br />
                            <span className="prime-color-text h4-text" >₹{item.price}</span> <del>₹{item.originalprice}</del> <span
                                className="small-grey" > Save ₹{item.discount}</span>
                        </span>

                        <div className="card-footer">
                            <button className="mid-btn btn-primary" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add to cart</button>
                            <div className="connect-part"><i className="far fa-heart card-icon" onClick={() => wishFunc({ type: "ADD_TO_WISHLIST", payload: item })}></i></div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card