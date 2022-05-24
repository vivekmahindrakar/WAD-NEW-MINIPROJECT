import logo from './logo.svg';
import './App.css';
import bgimage from './desktopbg.jpg';

import Intro from './components/Intro/Intro'
import Event from './components/Events/Events'
import Hero from "./components/HomeHero/Hero"
import EventService from './components/Events/MainService'
import Footer from "./components/Footer/footer"
import Form from './components/Form/Form';
import {Route,Routes} from "react-router-dom"
import Users from "../src/Pages/Users"
import Home from '../src/Pages/Home'
import Thankyou from '../src/Pages/Thankyou'
// import Typewriter from 'typewriter-effect';

function App() {
  
  
  return (

    <>
      
             <div className="App">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/thankyou' element={<Thankyou/>}/>
            </Routes>
            </div>
    </>
    
  );
}

export default App;
