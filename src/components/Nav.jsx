import React from 'react'


function Nav() {
    return (
        <div>
            <div class="nav">
                <div class="first-nav">
                    <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491301/Pixelion_2_-PhotoRoom_q7mfmo.png" alt="" />
                </div>
                <div class="mid-nav flex-row">
                    <ul class="nav-links">
                        <a class="li-link-a" href="/index.html">
                            <li class="li-link">Home</li>
                        </a>
                        <a class="li-link-a" href="/css/pages/products/product.html">
                            <li class="li-link">Shop Now</li>
                        </a>
                    </ul>
                </div>
                <div class="last-nav flex-row">
                    <input type="text" class="input-md input-box" placeholder="Search" />
                    <ul class="nav-connect nav-links">
                        <a href="./css/pages/login/login.html" class="nav-connect-a li-link-a">
                            <li class="connect-link h6-text flex-col-center">
                                <i class="fas fa-user  h5-text"></i>
                                <p class="h6-text i-link-nav-name">User</p>
                            </li>
                        </a>
                        <a href="./css/pages/wishlist/wishlist.html" class="nav-connect-a li-link-a ">
                            <li class="connect-link  flex-col-center ">
                                <i class="fas fa-heart h5-text"></i>
                                <p class="h6-text i-link-nav-name">Wishlist</p>
                            </li>
                        </a>
                        <a href="./css/pages/cart/cart.html" class="nav-connect-a li-link-a">
                            <li class="connect-link flex-col-center h6-text">
                                <i class="fas fa-shopping-cart  h-text"></i>
                                <p class="h6-text i-link-nav-name">Cart</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav