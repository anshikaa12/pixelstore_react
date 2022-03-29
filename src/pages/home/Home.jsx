import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'



function Home() {
    return (
        <div>
            <section className="hero-section flex-col">
                <Nav />
                <div className="hero-content">
                    <div className="hero-text flex-col">
                        <h1 className="main-h1-xl prime-color-text">Powered</h1>
                        <h1 className="main-h1-xl">By Intellect</h1>
                        <h1 className="main-h1-xl">Driven By Values</h1>
                        <div className="btn-container">
                            <button className="btn btn-primary-outline">Shop Now</button>
                        </div>
                    </div>
                    <div className="hero-img-container flex-row">
                        <img className="hero-img" src="https://res.cloudinary.com/de5it79dw/image/upload/v1648492828/img_i49plp.png" />
                    </div>
                </div>
            </section>
            <section className="promos">
                <h2 className="main-h2 flex-col-center">NEW PROMOS</h2>
                <div className="promo-container">
                    <div className="promo-card">
                        <a href="/css/pages/products/product.html"> <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491357/phone_fznttf.png" className="promo-card-img" />
                            <div className="overlay">
                                <div className="text-overlay">PHONES</div>
                            </div>
                        </a>
                    </div>

                    <div className="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491457/headphones_dx7w9g.png" className="promo-card-img" />
                            <div className="overlay">
                                <div className="text-overlay">HEADPHONES</div>
                            </div>
                        </a>
                    </div>

                    <div className="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491260/speaker_jetzi6.png" className="promo-card-img" />
                            <div className="overlay">
                                <div className="text-overlay">SPEAKER</div>
                            </div>
                        </a>
                    </div>
                    <div className="promo-card">
                        <a href="/css/pages/products/product.html">
                            <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491384/lap_qyyy4c.png" className="promo-card-img" />
                            <div className="overlay">
                                <div className="text-overlay">LAPTOP</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="hero-section">
                <h2 className="main-h2 flex-col-center" style={{ paddingTop: "15px" }}>FEATURED BRANDS</h2>
                <div className="featured-section">
                    <div className="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491317/samsung_tcokhr.png" className="promo-card-img" />
                    </div>
                    <div className="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491345/oneplus_ziu18z.png" className="promo-card-img" />
                    </div>
                    <div className="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648494496/a-removebg-preview_n9pgdn.png" className="promo-card-img" />
                    </div>
                    <div className="brand">
                        <img src="https://res.cloudinary.com/de5it79dw/image/upload/v1648491483/boat_2_ernimv.png" className="promo-card-img" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home