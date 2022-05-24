import React from 'react'
import Intro from '../components/Intro/Intro'
import Event from '../components/Events/Events'
import Hero from "../components/HomeHero/Hero"
import EventService from '../components/Events/MainService'
import Footer from "../components/Footer/footer"
import Form from '../components/Form/Form';
import {Route,Routes} from "react-router-dom"
// import Users from "../components/Users/Users"
const Home = () => {
  return (
    <div><div className='home-page-content'>
    <Intro />
    <Hero />
    </div>

     <EventService/>
     <Form />
     <Footer /></div>
  )
}

export default Home