import Navbar from "./Navbar";
import img1 from './assets/wificamera1.jpg';
import img2 from './assets/wificamera2.jpg';
import img3 from './assets/wificamera3.jpg';
import img4 from './assets/wificamera4.jpg';
import img5 from './assets/wificamera5.jpg';
import img6 from './assets/wificamera6.jpg';
import img7 from './assets/wificamera7.jpg';
import img8 from './assets/wificamera8.jpg';
import img9 from './assets/wificamera9.jpg';
import img10 from './assets/wificamera10.jpg';
import img11 from './assets/wificamera12.jpg';
import img12 from './assets/wificamera11.jpg';

const Products = () => {
        const items =[
                {name:"2MP ROBOT WIFI CCTV CAMERA ",img:img1,price:"₹ 2000"},
                {name:"3MP WIFI COLOUR CCTV CAMERA",img:img2,price:"₹ 2,500"},
                {name:"3MP DUAL LENS WIFI COLOUR CCTV CAMERA",img:img3,price:"₹ 3,000"},
                {name:"3MP BULLET OUTDOOR WIFI CCTV CAMERA",img:img4,price:"₹ 3,500"},
                {name:"2MP PTZ OUTDOOR ROTATING WIFI CCTV CAMERA",img:img5,price:"₹ 3,500"},
                {name:"3MP PTZ OUTDOOR ROTATING WIFI CCTV CAMERA",img:img6,price:"₹ 4,000"},
                {name:"3MP + 3MP DUAL LENS PTZ OUTDOOR ROTATING WIFI CCTC CAMERA",img:img7,price:"₹ 4,500"},
                {name:"4G SIM DOME CCTV CAEMERA",img:img8,price:"₹ 4,500"},
                {name:"3MP 4G BULLET SIM CCTV CAMERA",img:img9,price:"₹ 5,000"},
                {name:"3MP 4G SIM PTZ CAMERA",img:img10,price:"₹ 6,000"},
                {name:"3MP + 3MP 4G SIM DUAL LENS PTZ OUTDOOR ROTATING WIFI CCTV CAMERA",img:img12,price:"₹ 9,999"},
                {name:"4MP + 4MP Solar PTZ 4G Camera",img:img11,price:"₹ 9,999"},
                ];
    return (
        <>
            <div id="product-container1" style={{padding:"1vw"}}>
             <h2 style={{justifySelf:"center"}}>WIRELESS WIFI CAMERA</h2>
            <div style={{display:"grid",gridTemplateColumns: "auto auto auto auto auto",gap:"20px"}}>

                {items.map((items)=>(
                    <div style={{
                        width: "270px",
                        border: "1px solid black",
                        padding: "5px",
                        textAlign: "center"
                        }}>
                    <div id="prod-img" style={{
                            width: "270px",
                            height: "270px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${items.img})`
                        }}/>
                    <h4 style={{padding:"5px"}}>{items.name}</h4>
                    <h4>{items.price}</h4>
                    <div style={{height:"10vh"}}>
                        <button type="button" style={{width:"10vw",height:"4vh",borderRadius:"30px",backgroundColor:"rgb(19, 161, 255)",color:"white"}}>Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/*Fotter of page   */}
         <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",border:"2px solid black"}}>
            <div>
                <h3 style={{justifySelf:"center"}}>Location</h3>
                     {/* To give path */}
                 <a style={{justifySelf:"center"}} href="http://"></a>
             </div>

             <div style={{display:"grid",gap:"5px"}}>
                  <h3 style={{justifySelf:"center"}}>Shop</h3>
                  <a style={{justifySelf:"center"}} href="http://localhost:5173/">Home</a>
                    
                    {/* change the path */}
                     <a style={{justifySelf:"center"}} href="http://localhost:5173/products">WIFI CCTV</a>

                    {/* To give path */}
                   <a style={{justifySelf:"center"}} href="">CCTC Accessories</a>
             </div>

                <div style={{display:'grid',gap:"10px"}}>
                    <h3 style={{justifySelf:"center"}}>Customer-support</h3>
                    <a style={{justifySelf:"center"}} href="http://localhost:5173/contact">Contact-us</a>
                    {/* To give path */}
                    <a style={{justifySelf:"center"}} href="">Help center</a>
                </div>
            
                <div style={{display:"grid",gap:'10px'}}>
                     <h3 style={{justifySelf:"center"}}>Policy</h3>
                    <a style={{justifySelf:"center"}} href="">Shipping & Returns </a>
                    <a style={{justifySelf:"center"}} href="">Payment Methods</a>
                </div>
         </div>
        </>
    )
}
export default Products;