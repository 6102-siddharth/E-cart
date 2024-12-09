import Navbar from "./Navbar";
import img1 from './assets/wificamera1.jpg';
import img2 from './assets/wificamera.jpg';
import img3 from './assets/wificamera2.jpg';
import img4 from './assets/wificamera3.jpg';

const Products = () => {
    return(
        <>
        <div>    
             <h1>This is Products Page</h1>
        </div>
         <div>
            <div id="containers">
                <div className="contain1">
                    <div id="cart">
                        <div className="cartcontainer">
                            <img src={img1} alt="No image" className="cartimages" />
                        </div>
                        <div className="text">
                            <h4>3MP Wifi Colour CCTV Camera</h4>
                            <h4>&#x20B9; 2,500.00 </h4>
                        </div>
                        <div id="cart-btn">
                            <button type="button" className="cart-btn">Add to Cart</button>
                        </div>
                    </div>           
                </div>

                <div className="contain1">
                    <div id="cart">
                        <div className="cartcontainer">
                            <img src={img2} alt="No image" className="cartimages" />
                        </div>
                        <div className="text">
                            <h4>3MP Wifi Colour CCTV Camera</h4>
                            <h4>&#x20B9; 2,800.00</h4>
                        </div>
                        <div id="cart-btn">
                            <button type="button" className="cart-btn">Add to Cart</button>
                        </div>
                    </div>           
                </div>

                <div className="contain1">
                    <div id="cart">
                        <div className="cartcontainer">
                            <img src={img3} alt="No image" className="cartimages" />
                        </div>
                        <div className="text">
                            <h4>3MP Wifi Colour CCTV Camera</h4>
                            <h4>&#x20B9; 3,800.00</h4>
                        </div>
                        <div id="cart-btn">
                            <button type="button" className="cart-btn">Add to Cart</button>
                        </div>
                    </div>           
                </div>

                <div className="contain1">
                    <div id="cart">
                        <div className="cartcontainer">
                            <img src={img4} alt="No image" className="cartimages" />
                        </div>
                        <div className="text">
                            <h4>3MP Wifi Colour CCTV Camera</h4>
                            <h4>&#x20B9; 3,500.00</h4>
                        </div>
                        <div id="cart-btn">
                            <button type="button" className="cart-btn">Add to Cart</button>
                        </div>
                    </div>           
                </div>

                


            {/* 
                 <div className="contain1">
                 
                        <div className="img-cont">
                            <div>
                          <img src={img1} alt="no image found" className="prod-img" />
                            </div>
                        </div>
                        <div className="cart-info">
                            <h3>3MP Wifi Colour CCTV Camera</h3>
                        </div>
                    
                </div> */}
                {/* <div className="contain1">
                    <div className="img-cont">
                          <img src={img1} alt="no image found" className="prod-img" />
                    </div>
                </div>
                <div className="contain1">
                    <div className="img-cont">
                          <img src={img1} alt="no image found" className="prod-img" />
                    </div>
                </div> */}

            </div>
         </div>
        </>
    )
}

export default Products;