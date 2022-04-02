import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { CartProvider } from "./context/cartcontext";
import { WishlistProvider } from "./context/wishlistcontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <WishlistProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
 