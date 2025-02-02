import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/image.png'



const Navbar = () => {
  return (
    <>   
        <nav id='menu'>
          <img src={logo} alt="logo" width="40" />
          <h1 className='text-xl font-bold' id='web' >
             FlowBite</h1>


            <ul  className='space-x-6' id='main1'>
             <Link to="/" className="hover:text-gray-400"> Home   </Link>
             <Link to="/crypto" className="hover:text-gray-400" >Crypto-Tracker</Link>             
             <Link to="/support" className="hover:text-gray-400">Support</Link>
            </ul>

            <div className='space-x-4' id='butt'>
            <Link to="/login"  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">SignUp</Link>
            
        
            </div>
        </nav>


    </>
  )
}

export default Navbar
