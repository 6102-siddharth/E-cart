import React from "react";

const carts = () =>{
    return(
        <>
        <div id="cartscontainer">
            <div>
                 <div style={{display:"flex",justifyContent:"space-between"}} className="address">
                     <h2 style={{marginLeft:"20px"}}>From saved Address</h2>
                     <input type="number" placeholder="Enter Delivery Pincode" className="custom-input" />
                 </div>
                 <div className="innercarts">
                     <h1>this is inner carts</h1>
                    <img src="" alt="" />
                 <div className="placeorder">
                    {/* <h1>place order</h1> */}
                   <button type="button" id="order-btn"> <h2>Place Order</h2></button>
                 </div>
                 </div>
            </div>
            <div className="pricedetails">
                <h2 style={{justifySelf:"center"}}>Price details</h2>
                <hr  />
                <h2>Total Amount</h2>
            </div>
        </div>
        </>
    );
};

export default carts;
