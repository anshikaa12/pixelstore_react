import React from 'react'
import { useCart } from '../../services/context/cartcontext'



function Cartlist() {
    const { state, dispatch } = useCart();

    return (
        <div className="product-system">

            {state.cartlist.length !== 0 ? state.cartlist.map(item => {
                return (
                    <div>
                        <div className="basic-card">
                            <div className="card-header">
                                <img className="card-img-header card-img" src={item.image} />
                                <div className="header-text flex-col">
                                    <h3 className="card-title h3-text">{item.name}</h3>
                                    <h4 className="h4-text prime-color-text">₹{item.price}</h4>
                                    <div className="cart-qnt">
                                        <h3 className="h3-text"><span className="prime-color-text plus" onClick={() => dispatch({ type: "INCREMENT_QTY", payload: item })}>+</span><span className="qnt">{item.qty}</span><span className="prime-color-text minus" onClick={() => dispatch({ type: "DECREMENT_QTY", payload: item })}>-</span></h3>
                                    </div>
                                    <button className="btn-primary">Move to Wishlist</button>
                                </div>
                                <i className="far fa-times-circle cross-cart-item" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            }) : (<div>
                <h2 className="main-h2">No Items in cart yet!</h2>
            </div>)
            }

        </div>

    )
}

export default Cartlist