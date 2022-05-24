import React from 'react'
import './intro.css'
import Navbar from "../navbar/Navbar"
import Timer from "../Timer/Timer"
const Intro = () => {
  return (
<>
<Navbar/>
    <div className='Slogans'>

        
        <span id='event-name' >GANDHAAR</span>
        <h1 id='Collab'>Sinhgad Acedemy Of Engineering   <span> x </span>  ITSA's </h1>
        <button id='Date'>On June 16th, 2022</button>
        <Timer />
        {/* has announced<strong>TECHNO FEST</strong></h1> */}
    </div>
</>
    
  )
}

export default Intro