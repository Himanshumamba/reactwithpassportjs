import React from 'react'
import google from '../assets/google.jpg'
import facebook from '../assets/facebook.png'

import github from '../assets/github.png'


const Login = () => {

 const googleClick = (e)=>{
  e.preventDefault();
  window.open("http://localhost:5000/auth/google","_self");
 }

 const githubClick = (e)=>{
  e.preventDefault();
  window.open("http://localhost:5000/auth/github","_self");
 }

 



 

  return (
    <>
    <div className="logincontainer">
      <h1 className="login_title"> Choose login method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleClick}>
             <img src={google} alt="" className="icon" />
               Google
           </div>
           <div className="loginButton facebook">
             <img src={facebook} alt="" className="icon" />
             Facebook
           </div>
           <div className="loginButton github" onClick={githubClick}>
             <img src={github} alt="" className="icon" />
             Github
           </div>

        </div>
        <div className="right">
          <input type="text" placeholder='username'/>
          <input type="text" placeholder='password'/>
          <button className='submit' >Login</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
