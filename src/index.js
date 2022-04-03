import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { CartProvider } from "./context/cartcontext";
import { WishlistProvider } from "./context/wishlistcontext";
import {FilterProvider } from "./context/filtercontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <FilterProvider>
      <WishlistProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </WishlistProvider>
    </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
 