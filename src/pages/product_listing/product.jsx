import React from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

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