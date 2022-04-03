import React from 'react'
import { useWishlist } from "../context/wishlistcontext"
import { useCart } from "../context/cartcontext"

function WishlistCard() {
    const { currState, wishFunc } = useWishlist();
    const { state, dispatch } = useCart();
    return (
        currState.wishlist.length !== 0 ? currState.wishlist.map(item => {
            return <div className="e-basic-card" key={item._id}>
                <div className="e-card-dismiss"><i className="wishlist-trash fas fa-trash-alt" onClick={() => wishFunc({ type: "REMOVE_FROM_WISHLIST", payload: item })}></i></div>
                <img src={item.image} alt="" className="e-card-img" />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <span className="e-card-subtext">{item.subtext}
                        <br />
                        <span className="prime-color-text h4-text">₹{item.price}</span> <del>₹{item.originalprice}</del> <span
                            className="small-grey"> Save ₹{item.discount}</span>
                    </span>
                    <div className="card-footer">
                        <button className="mid-btn btn-primary" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add to cart</button>
                    </div>
                </div>
            </div>
        }) : <h2 className="main-h2">Sorry! Looks like there are no items in Wishlist!</h2>



    )
}
export { WishlistCard }