import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div>
            <div className="nav">
                <div className="first-nav">
                    <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491301/Pixelion_2_-PhotoRoom_q7mfmo.png" alt="" />
                </div>
                <div className="mid-nav flex-row">
                    <ul className="nav-links">
                        <Link className="li-link-a" to="/"> <li className="li-link">Home</li></Link>
                        <Link className="li-link-a" to="/product"> <li className="li-link">Shop Now</li></Link>
                    </ul>
                </div>
                <div className="last-nav flex-row">
                    <input type="text" className="input-md input-box" placeholder="Search" />
                    <ul className="nav-connect nav-links">
                        <a href="./css/pages/login/login.html" className="nav-connect-a li-link-a">
                            <li className="connect-link h6-text flex-col-center">
                                <i className="fas fa-user  h5-text"></i>
                                <p className="h6-text i-link-nav-name">User</p>
                            </li>
                        </a>
                        <a href="./css/pages/wishlist/wishlist.html" className="nav-connect-a li-link-a ">
                            <li className="connect-link  flex-col-center ">
                                <i className="fas fa-heart h5-text"></i>
                                <p className="h6-text i-link-nav-name">Wishlist</p>
                            </li>
                        </a>
                        <a href="./css/pages/cart/cart.html" className="nav-connect-a li-link-a">
                            <li className="connect-link flex-col-center h6-text">
                                <i className="fas fa-shopping-cart  h-text"></i>
                                <p className="h6-text i-link-nav-name">Cart</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav