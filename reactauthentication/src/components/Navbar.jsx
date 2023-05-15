import React from 'react'
import logo from '../assets/logo.jpg';
import logocompany from '../assets/logocom.png';
import login from '../assets/login.png';
import { Link } from 'react-router-dom';
const Navbar = ( {user}) => {
  const userData= user;
  const logout=()=>{
    window.open("http://localhost:5000/auth/logout","_self")

  }
  return (
    <div className='navbar'>
      <span className='logo'><Link to ="/" className='logo' > 
      <img src={logocompany} alt="Logo" className="avatar" /></Link> </span>
  
       {userData? (   <ul className='listitem'>
        <li className='listitem'>
          
        <img src={logo} alt="Logo" className="avatar" />

        </li>
        <li className='listitem'>John DOe</li>
        <li className='listitem' onClick={logout}>Logout</li>
      </ul>) :( <Link  className='logout'to ="/login" ><img src={login} alt="Logo" className="avatar" /></Link>)}
   
    </div>
  )
}

export default Navbar
