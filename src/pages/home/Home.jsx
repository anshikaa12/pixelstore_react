import React from "react";
import { Nav, Footer, PromoCard, Brand } from "../../components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <section className="hero-section flex-col">
        <div className="hero-content">
          <div className="hero-text flex-col">
            <h1 className="main-h1-xl prime-color-text">Powered</h1>
            <h1 className="main-h1-xl">By Intellect</h1>
            <h1 className="main-h1-xl">Driven By Values</h1>
            <div className="btn-container">
              <Link to="/product">
                <button className="btn btn-primary-outline">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="hero-img-container flex-row">
            <img
              className="hero-img"
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1648492828/img_i49plp.png"
            />
          </div>
        </div>
      </section>
      <section className="promos">
        <h2 className="main-h2 flex-col-center">NEW PROMOS</h2>
        <div className="promo-container">
          <PromoCard />
        </div>
      </section>
      <section className="hero-section">
        <h2 className="main-h2 flex-col-center" style={{ paddingTop: "15px" }}>
          FEATURED BRANDS
        </h2>
        <div className="featured-section">
          <Brand />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
