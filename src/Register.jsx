import React from 'react';
import { FaRegUser, FaEnvelope, FaLock } from 'react-icons/fa';
const Register = () => {
    return (
        <>
            <div className='body1'>
                <div className='container1'>
                    <h1>New Registration</h1>
                    {/* <hr style={{ border: "6px solid white", borderRadius: "50%" }} /> */}
                    <div className="radio-class">
                        <div>
                            <input type="radio" name="select" className='radio-btn' />
                            <label htmlFor="">Personal</label>
                        </div>

                        <div>
                            <input type="radio" name="select" className='radio-btn' />
                            <label htmlFor="">Company</label>
                        </div>
                    </div>
                    {/* <hr style={{ border: "6px solid white", borderRadius: "50%" }} /> */}
                    <div className="reginfo" >
                        <div className='reg-icons'>
                            <div className="App">
                                <FaRegUser></FaRegUser>
                            </div>
                            <input type="text" placeholder="Enter Full Name" className="reginfo1" />
                        </div>
                        <div className='reg-icons'>
                            <div className="App">
                                <FaEnvelope></FaEnvelope>
                            </div>
                            <input type="E-mail" placeholder="Email" className="reginfo1" />
                        </div>
                        <div className='reg-icons'>
                            <div className="App">
                                <FaLock></FaLock>
                            </div>
                            <input type="password" placeholder="Password" className="reginfo1" />
                        </div>
                        <div className='reg-icons'>
                            <div className="App">
                                <FaLock></FaLock>
                            </div>
                            <input type="password" placeholder="Confirm Password" className="reginfo1" />
                        </div>
                    </div>
                    <div id="register-btn">
                        <button type="button" className="register-btn">Submit</button>
                    </div>
                        <h4>Already register? <a href="http://localhost:5173/login">  Login Here </a> </h4>
                
                </div>
            </div>
        </>
    )
}

export default Register;