import Navbar from "./Navbar";
import './App.css';
const contact= () =>{
        return(
            <>
                    <div>
                        <h2>This is contact page</h2>
                    </div>

                    <div style={{display:"grid"}}>
                        <h1 style={{padding:"50px"}}>Get in Touch</h1>
                        <hr style={{border:"2px solid black",width:"98vw"}} />
                        <div style={{display:"grid",gridTemplateColumns:"auto auto"}}>
                            <div style={{border:"2px solid black",height:"70vh"}}>
                                  <h2>  Provide Store Information
                                    {/* like Location and Address */}
                                  </h2>
                            </div>

                            <div style={{border:"2px solid black",height:"70vh"}}>
                                 <h2>
                                    Provide Contact Information
                                 </h2>
                                 
                            </div>
                        </div>
                    </div>
            </>
        )
}


export default contact;