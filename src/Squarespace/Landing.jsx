import React from 'react'
import './Landing.css'
import Nav from './Nav'
import "./Nav.css"

const Landing = () => {
  return (
    <div className='container'>

        <Nav></Nav>
        <div className="main" style={{width:'100vw',height:"100vh",top:"0"}}>
            <h1 className='text'>Set your </h1>
            <h1>website apart</h1>
            <p className='para'>Create a beautiful website</p>
            <p>Start your free trial today. No credit card required</p>

            <div className="buttons">
               
                <button className='btnBlue'>GET STARTED</button>
            </div>
        </div>
      
    </div>
  )
}

export default Landing