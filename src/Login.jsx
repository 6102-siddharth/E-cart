import React from 'react';

const Login = () => {
  return (
    <>
    <div className='body'>
    
     <div className='d1'>
        <div className='container'>
            <div className='Login-Form'>
               <div className='head1'>
                   <h1>ACCOUNT LOGIN</h1>
                </div>
                <div>
                   <h3>USERNAME:</h3>
                   <input type="text" className='username'/>
                 </div>
                 <div>
                    <h3>PASSWORD:</h3>
                   <input type="Password" className='password' />
                 </div>
                 <div className='checkbox'>
                        <div style={{alignSelf:'center'}}>
                            <input type="checkbox" />
                            <label htmlFor="">For RememberMe</label>
                        </div>
                         <div style={{alignSelf:'center'}}>
                          
                             <a href="">Forgot Password?</a>
                         </div>
                 </div>
            </div>
               <div id='login-btn'>
                   <button type="button" className='login-btn'><h3>Login</h3></button>
                   {/* <button type="button" className='new-register-btn'><h3>Register</h3></button> */}
               </div>
               <h4>Don't have an account? <a href="http://localhost:5173/register">Sign up</a></h4>
        </div>
     </div>
  </div>
   </>
  )
}

export default Login;