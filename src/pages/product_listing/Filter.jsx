import React from "react";
import { useFilter } from "../../context/filtercontext";
import { useCategory } from "../../services/category_api";
import { brandList } from "../../services/brand_list";

function Filter() {
  const { filterState, filterFunc } = useFilter();
  const { category } = useCategory();

  return (
    <div className="product-sidebar flex-col">
      <div className="side-heads flex-row">
        <p className="h3-text wt-bold">Filters</p>
        <p
          className="foot-p clear-all-btn"
          onClick={() => filterFunc({ type: "CLEAR_ALL" })}
        >
          Clear All
        </p>
      </div>
      <hr className="side-hr" />
      {/* <!------------sort-filter-------------> */}
      <div className="sort-filter">
        <p className="h4-text wt-md side-filter">SORT</p>
        <label className="radio-list">
          Higher to Lower Price
          <input
            type="radio"
            onChange={() =>
              filterFunc({ type: "SORT_PRICE", payload: "HIGH_TO_LOW" })
            }
            checked={filterState?.sortBy === "HIGH_TO_LOW"}
            name="radio"
          />
          <span className="radio"></span>
        </label>
        <label className="radio-list">
          Lower to Higher Price
          <input
            type="radio"
            name="radio"
            onChange={() =>
              filterFunc({ type: "SORT_PRICE", payload: "LOW_TO_HIGH" })
            }
            checked={filterState?.sortBy === "LOW_TO_HIGH"}
          />
          <span className="radio"></span>
        </label>
      </div>
      <hr className="side-hr" />
      {/* <!------------category-filter-------------> */}
      <div className="category-filter">
        <p className="h4-text wt-md side-filter">CATEGORIES</p>
        {category.map((item) => {
          return (
            <label className="check-list" key={item._id}>
              {item.categoryName}
              <input
                type="checkbox"
                checked={
                  filterState?.categories &&
                  filterState?.categories.includes(item.categoryName)
                }
                onChange={() =>
                  filterFunc({
                    type: "SORT_CATEGORY",
                    payload: item.categoryName,
                  })
                }
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
      <hr className="side-hr" />
      {/* <!------------brand-filter-------------> */}
      <div className="brand-filter">
        <p className="h4-text wt-md side-filter">BRANDS</p>
        {brandList.map((item) => {
          return (
            <label className="check-list" key={item.name}>
              {item.name}
              <input
                type="checkbox"
                checked={
                  filterState?.brand && filterState?.brand.includes(item.name)
                }
                onChange={() =>
                  filterFunc({ type: "SORT_BRAND", payload: item.name })
                }
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
      <hr className="side-hr" />
      {/* <!------------Stock-filter-------------> */}
      <div className="stock-filter">
        <p className="h4-text wt-md side-filter">STOCK</p>
        <label className="check-list">
          Include out of stock
          <input
            type="checkbox"
            checked={filterState.stock}
            onChange={() =>
              filterFunc({ type: "SORT_STOCK", payload: filterState.stock })
            }
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <hr className="side-hr" />
      {/* <!------------Rating-filter-------------> */}
      <div className="rating-filter">
        <p className="h4-text wt-md side-filter">RATING</p>
        <div>
          <div style={{ display: "flex", gap: "1.6rem" }}>
            <p className="foot-p">1</p>
            <p className="foot-p">2</p>
            <p className="foot-p">3</p>
            <p className="foot-p">4</p>
            <p className="foot-p">5</p>
          </div>
          <input
            value={filterState.rate || 1}
            type="range"
            min="1"
            max="5"
            onChange={(e) =>
              filterFunc({ type: "SORT_RATING", payload: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
