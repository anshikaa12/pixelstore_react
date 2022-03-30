import React from 'react'
import { Nav, Footer, Card } from "../../components/index";

function Product() {
    return (
        <div>
            <Nav />
            <div className="product-container">
                <div className="product-card-container column-3-grid">
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product