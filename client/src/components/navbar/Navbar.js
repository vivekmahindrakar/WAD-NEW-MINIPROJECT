import React,{useState} from 'react'
import './navbar.css'
import logo from './images/name-logo.svg'
function Navbar() {

    const [hamburgerStyle,setStyle] = useState('container');
    var hFlag=false;
    
    function scrollUp(params) {
        document.getElementById('fname').style.top='-95%';
        document.getElementById('sname').style.top='-95%';
    }
    function scrollDown(params) {
        document.getElementById('fname').style.top='0%';
        document.getElementById('sname').style.top='3px';
    }

    function togglee() {
        document.getElementsByClassName("container")[0].classList.toggle("change");
        
        if(!hFlag)
        {
            document.getElementsByClassName("all-links")[0].style.left='0%';
            hFlag=!hFlag;
        }
        else
        {
            document.getElementsByClassName("all-links")[0].style.left='-170%';
            hFlag=!hFlag;
        }
      }
  return (
    <div className='navbar'>
    
    {/* <div className='my-name' >
        <div><img src={logo} id="logo"/></div>
        <div className='my-actual-name' onMouseEnter={scrollUp} onMouseLeave={scrollDown}>
        <h2  id='fname'>Vivek Mahindrakar</h2>
        <h2  id='sname'>Vivek Mahindrakar</h2>
        </div>
        
    </div> */}
    <div class={hamburgerStyle} onClick={togglee}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>

    {/* <div className='all-links'>
    <ul className="navigation" id="navigate">
        <li className="links"><a href="#">Expertise</a></li>
        <li className="links"><a href="#">Projects</a></li>
        <li className="links"><a href="#">Contact</a></li>
    </ul>
    </div> */}
    </div>
  )
}

export default Navbar