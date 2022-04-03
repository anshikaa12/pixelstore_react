import React from 'react'
import { Nav, Footer, Card } from "../../components";
import Filter from './Filter';

function Product() {
    return (
        <div className="product-section">
            <Nav />
            <div className="product-main flex-row">
                <Filter />
                <div className="product-container">
                    <div className="product-card-container column-3-grid">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product