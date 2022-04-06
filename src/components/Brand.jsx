import React from "react";
import { brandList } from "../services/brand_list";
function Brand() {
  return brandList.map((item) => {
    return (
      <div className="brand">
        <img src={item.image} className="promo-card-img" />
      </div>
    );
  });
}

export default Brand;
