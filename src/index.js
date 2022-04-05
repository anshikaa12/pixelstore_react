import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cartcontext";
import { WishlistProvider } from "./context/wishlistcontext";
import { FilterProvider } from "./context/filtercontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </WishlistProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
