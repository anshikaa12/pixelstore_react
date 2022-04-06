import React from "react";
import { promos } from "../services/promo_list";
import { useFilter } from "../context/filtercontext";
import { Link } from "react-router-dom";

function PromoCard() {
  const { filterState, filterFunc } = useFilter();
  return promos.map((item) => {
    return (
      <div className="promo-card">
        <Link
          to="/product"
          onClick={() =>
            filterFunc({ type: "SORT_CATEGORY", payload: item.name })
          }
        >
          <img src={item.image} className="promo-card-img" />
          <div className="overlay">
            <div className="text-overlay">{item.name}</div>
          </div>
        </Link>
      </div>
    );
  });
}

export default PromoCard;
