import React from "react";
import { useCart } from "../context/cartcontext";
import { useProduct } from "../services/product_api";
import { useWishlist } from "../context/wishlistcontext";
import { useFilter } from "../context/filtercontext";

import {
  sortedPriceList,
  sortedCategoryList,
  sortedBrandsList,
  sortedStockList,
  sortedRatingList,
} from "../reducer/filterreducer";

function Card() {
  const { cartFunc } = useCart();
  const { cardData } = useProduct();
  const { wishFunc } = useWishlist();
  const { filterState } = useFilter();
  console.log(filterState);
  const sortedData =
    filterState.sortBy !== ""
      ? sortedPriceList(filterState.sortBy, cardData)
      : cardData;

  const sortedCategoryData =
    filterState.categories.length !== 0
      ? sortedCategoryList(filterState.categories, sortedData)
      : sortedData;

  const sortedBrandData =
    filterState.brand.length !== 0
      ? sortedBrandsList(filterState.brand, sortedCategoryData)
      : sortedCategoryData;
  const sortedStockData = sortedStockList(filterState.stock, sortedBrandData);

  const sortedRatingData = sortedRatingList(filterState.rate, sortedStockData);

  const productsList = filterState.rate ? sortedRatingData : sortedStockData;

  return productsList.map((item) => {
    return item.inStock ? (
      <div className="e-basic-card" key={item._id}>
        <div class="e-card-badge">{item.rating}⭐</div>
        <img src={item.image} className="e-card-img" alt="Loading" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <span className="e-card-subtext">
            {item.subtext}
            <br />
            <span className="prime-color-text h4-text">₹{item.price}</span>{" "}
            <del>₹{item.originalprice}</del>{" "}
            <span className="small-grey"> Save ₹{item.discount}</span>
          </span>

          <div className="card-footer">
            <button
              className="mid-btn btn-primary"
              onClick={() => cartFunc({ type: "ADD_TO_CART", payload: item })}
            >
              Add to cart
            </button>
            <div className="connect-part">
              <i
                className="far fa-heart card-icon"
                onClick={() =>
                  wishFunc({ type: "ADD_TO_WISHLIST", payload: item })
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="e-basic-card" key={item._id}>
        <div class="overlay-card">
          <div>OUT OF STOCK</div>
        </div>
        <div class="e-card-badge">{item.rating}⭐</div>
        <img src={item.image} className="e-card-img" alt="Loading" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <span className="e-card-subtext">
            {item.subtext}
            <br />
            <span className="prime-color-text h4-text">₹{item.price}</span>{" "}
            <del>₹{item.originalprice}</del>{" "}
            <span className="small-grey"> Save ₹{item.discount}</span>
          </span>

          <div className="card-footer">
            <button className="mid-btn btn-primary">Add to cart</button>
            <div className="connect-part">
              <i className="far fa-heart card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Card;
