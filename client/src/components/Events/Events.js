import React from 'react'
import './events.css'
import "./subComponent/MainCard"
import MainCard from './subComponent/MainCard'
import img from "./demo.jpg"
const Events = () => {
  return (
      <>
      <h1 id='event-heading'> Events At ITSA</h1>
    <div className='event-sections'>
        <MainCard img={img} text="lorem"/>
        <MainCard img={img} text="lorem"/>
        <MainCard img={img} text="lorem"/>
        <MainCard img={img} text="lorem"/>
    </div>
      </>
     
    
  )
}

export default Events