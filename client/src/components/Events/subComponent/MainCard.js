import React from 'react'
import "../events.css"
const MainCard = (props) => {
  return (
    <div className='main-card'>
            <img src={props.img} alt='imagee' height="auto" width="100%"/>
            <p>{props.text}</p>
        </div>
  )
}

export default MainCard