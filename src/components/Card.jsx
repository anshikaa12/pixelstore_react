import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then((data) => {
            setCardData(data.data.products);
        }).catch((err) => { console.error(err) });
    }, []);

    return (

        cardData && cardData.map(item => {
            return (
                <div className="e-basic-card">
                    <img src={item.image} className="e-card-img" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <span className="e-card-subtext">{item.subtext}
                            <br />
                            <span className="prime-color-text h4-text" >₹{item.price}</span> <del>₹{item.originialprice}</del> <span
                                className="small-grey" > Save ₹{item.discount}</span>
                        </span>

                        <div className="card-footer">
                            <button className="mid-btn btn-primary">Add to cart</button>
                            <div className="connect-part"><i className="far fa-heart card-icon"></i></div>
                        </div>
                    </div>
                </div>
            )
        })



    )
}

export default Card