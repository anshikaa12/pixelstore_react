import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home,Product} from "./pages"

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
