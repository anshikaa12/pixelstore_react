import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/product_listing/product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/product" element={<Product/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
