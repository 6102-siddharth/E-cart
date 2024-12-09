import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Navbar.css';
import Home from "./Home";
import Login from "./Login";
import './Login.css';
import Register from "./Register";
import './Register.css';
import Products from "./Products";
import './Products.css';
import Contact from "./Contact";


function App() {
  return (
    <>
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/products" element={<Products />}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
