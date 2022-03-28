import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'


function Home() {
    return (
        <div>
            <section className="hero-section flex-col">
                <Nav />
                <div class="hero-content">
                    <div class="hero-text flex-col">
                        <h1 class="main-h1-xl prime-color-text">Powered</h1>
                        <h1 class="main-h1-xl">By Intellect</h1>
                        <h1 class="main-h1-xl">Driven By Values</h1>
                        <div class="btn-container">
                            <button class="btn btn-primary-outline">Shop Now</button>
                        </div>
                    </div>
                    <div class="hero-img-container flex-row">
                        <img class="hero-img" src="https://res.cloudinary.com/de5it79dw/image/upload/v1648492828/img_i49plp.png" alt="" />
                    </div>
                </div>
            </section>
            <section class="promos">
                <h2 class="main-h2 flex-col-center">NEW PROMOS</h2>
                <div class="promo-container">
                    <div class="promo-card">
                        <a href="/css/pages/products/product.html"> <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491357/phone_fznttf.png" alt="" class="promo-card-img" />
                            <div class="overlay">
                                <div class="text-overlay">PHONES</div>
                            </div>
                        </a>
                    </div>

                    <div class="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491457/headphones_dx7w9g.png" alt="" class="promo-card-img" />
                            <div class="overlay">
                                <div class="text-overlay">HEADPHONES</div>
                            </div>
                        </a>
                    </div>

                    <div class="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491260/speaker_jetzi6.png" alt="" class="promo-card-img" />
                            <div class="overlay">
                                <div class="text-overlay">SPEAKER</div>
                            </div>
                        </a>
                    </div>
                    <div class="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491384/lap_qyyy4c.png" alt="" class="promo-card-img" />
                            <div class="overlay">
                                <div class="text-overlay">LAPTOP</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="hero-section">
                <h2 class="main-h2 flex-col-center" style={{ paddingTop: "15px" }}>FEATURED BRANDS</h2>
                <div class="featured-section">
                    <div class="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491317/samsung_tcokhr.png" alt="" class="promo-card-img" />
                    </div>
                    <div class="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491345/oneplus_ziu18z.png" alt="" class="promo-card-img" />
                    </div>
                    <div class="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648494496/a-removebg-preview_n9pgdn.png" alt="" class="promo-card-img" />
                    </div>
                    <div class="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491483/boat_2_ernimv.png" alt="" class="promo-card-img" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home