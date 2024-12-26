import React from 'react';
import Navbar from './Navbar';
import img0 from './assets/addtocart.jpg';
const Cartsempty = () => {
  return (
        <>
         <div id='emptycart'>
                <div className='inner-empty'>
                   <div style={{justifySelf:"center"}}>
                         <img src={img0} alt="No image found" style={{height:"30vh"}}/>
                   </div>
                   <h1>Your cart is empty!</h1>
                   <h1>Buy a Products</h1>
                   <div style={{justifySelf:"center"}}>
                        <a href="http://localhost:5173/login">
                         <button type="button" className='login-btn'><h3>Login</h3></button>                        
                        </a>
                   </div>
                   <h3></h3>
                </div>
        </div>
        </>
  );
};

export default Cartsempty;
