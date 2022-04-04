import React from "react";
import { Nav, Footer } from "../../components";
import { WishlistCard } from "../../components/Wishlistcard";
function Wishlist() {
  return (
    <div>
      <Nav />
      <div className="wishlist-container flex-col">
        <h3 className="main-h3" style={{ textAlign: "center" }}>
          MY WISHLIST
        </h3>
        <div className="wishlist-card-container column-3-grid">
          <WishlistCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
