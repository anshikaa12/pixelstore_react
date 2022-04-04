import React from 'react'
import { useFilter } from "../../context/filtercontext"
import { useCategory } from '../../services/category_api'

function Filter() {
    const { filterState, filterFunc } = useFilter();
    const { category } = useCategory();

    return (
        <div className="product-sidebar flex-col">
            <div className="side-heads flex-row">
                <p className="h3-text wt-bold">Filters</p>
                <p className="doc-p" >Clear All</p>
            </div>
            <hr className="side-hr" />
            {/* <!------------sort-filter-------------> */}
            <div className="sort-filter">
                <p className="h4-text wt-md side-filter">SORT</p>

                <label className="radio-list">Higher to Lower Price
                    <input type="radio" checked={filterState.sortBy && filterState.sortBy === "HIGH_TO_LOW"} onChange={() =>
                        filterFunc({ type: "SORT_PRICE", payload: "HIGH_TO_LOW" })
                    } name="radio" />
                    <span className="radio"></span>
                </label>
                <label className="radio-list">Lower to Higher Price
                    <input type="radio" name="radio" onChange={() =>
                        filterFunc({ type: "SORT_PRICE", payload: "LOW_TO_HIGH" })
                    }
                        checked={filterState.sortBy && filterState.sortBy === "LOW_TO_HIGH"} />
                    <span className="radio"></span>
                </label>
            </div>
            <hr className="side-hr" />
            {/* <!------------category-filter-------------> */}
            <div className="category-filter">
                <p className="h4-text wt-md side-filter">CATEGORIES</p>
                {category.map(item => {
                    return <label className="check-list" key={item._id}>{item.categoryName}
                        <input type="checkbox" checked={filterState.categories && filterState.categories.includes(item.categoryName)} onChange={() =>
                            filterFunc({ type: "SORT_CATEGORY", payload: item.categoryName })} />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>
            <hr className="side-hr" />
            {/* <!------------brand-filter-------------> */}
            <div className="brand-filter">
                <p className="h4-text wt-md side-filter">BRANDS</p>
                <label className="check-list">Apple
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="check-list">Boat
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="check-list">Samsung
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="check-list">One Plus
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="check-list">HP
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="check-list">Fasttrack
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <hr className="side-hr" />
            {/* <!------------Stock-filter-------------> */}
            <div className="stock-filter">
                <p className="h4-text wt-md side-filter">STOCK</p>
                <label className="check-list">Include out of stock
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <hr className="side-hr" />
            {/* <!------------Rating-filter-------------> */}
            <div className="rating-filter">
                <p className="h4-text wt-md side-filter">RATING</p>
                <label htmlFor="volume" className="h4-text">Rating</label>
                <input type="range" id="volume" name="volume" min="0" max="11" className="h3-text st-slider" />
            </div>

        </div>

    )
}

export default Filter