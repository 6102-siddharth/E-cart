import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";


function App() {
  return (
    <>
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/products" element={<Products />}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
