import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home,Product,Cart} from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/product" element={<Product/> }/>
        <Route path="/cart" element={<Cart /> }/>
      </Routes>
    </div>
  );
}

export default App;
