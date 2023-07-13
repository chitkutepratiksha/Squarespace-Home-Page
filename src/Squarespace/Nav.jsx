import React from 'react'
import './Nav.css'
// import {FaChevronDown} from 'react-icons/fa'
import {BiLogoSquarespace} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>

      <div className="logo">
            <h1 className='flex'><BiLogoSquarespace className="icon"/>
            SQUARESPACE</h1>
          </div>

      <div className="menu">
        <ul>
          {/* <li><a href="#">Link 1 <FaChevronDown/></a></li> */}
          <li><a href="#">DOMAINS</a></li>
          <li><a href="#">WEBSITES</a></li>
          <li><a href="#">COMMERCE</a></li>
          {/* <li><a href="#">Link 4 <FaChevronDown/></a></li> */}
         
         
          <li className='login'><button className='btnSignup'>LOGIN</button></li>
        </ul>
        
        
      </div>
      
    </nav>
  )
}

export default Nav