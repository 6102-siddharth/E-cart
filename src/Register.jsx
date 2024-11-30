import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Register =() => {
    return (
        <>
        <div className='body1'>
            <div className='container1'>
                    <h1>New Registration</h1>
                    <hr style={{border:"6px solid white",borderRadius:"50%"}}/>
                        <div className="radio-class">
                            <div>
                                <input type="radio" name="select" className='radio-btn'/>
                                <label htmlFor="">Personal</label>
                            </div>
                            
                            <div>
                                <input type="radio" name="select" className='radio-btn'/>
                                <label htmlFor="">Company</label>
                            </div>
                        </div>
                        <hr style={{border:"6px solid white",borderRadius:"50%"}}/>
                        <div className="reginfo" >
                            <div className='reg-icons'>
                                 <div className="App">
                                     <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="text" placeholder="Enter Full Name" className="reginfo1"/>
                            </div>
                            <div className='reg-icons'>
                                <div className="App">
                                     <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="E-mail" placeholder="Email" className="reginfo1"/>
                            </div>
                            <div className='reg-icons'>
                                 <div className="App">
                                     <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="password" placeholder="Password" className="reginfo1" />
                            </div>
                            <div className='reg-icons'>
                                <div className="App">
                                     <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="password" placeholder="Confirm Password" className="reginfo1" />
                            </div>
                        </div>
                        <div id="register-btn">
                              <button type="button" className="register-btn">Submit</button>
                        </div>
            </div>
        </div>
        </>
    )
}

export default Register;