import React from 'react'
import './hero.css'
import hero_img from './hero.svg'; 
import Axios from 'axios'
const Hero = () => {
  const postRequest = async(e) => {
    

    e.preventDefault();
    Axios.get('/users').then(res =>{
      const Data = res.data;

  }).catch(e=>{
    console.log(e); 
  })
    
  }
  return (
    <div className='Hero-side'>
        <img src={hero_img} alt="hero" height="auto" width="auto" />
    <br></br>
    <a href='#form'><button id='register'name='btn'>Register now</button></a>
    
    
        
    </div>
  )
}

export default Hero