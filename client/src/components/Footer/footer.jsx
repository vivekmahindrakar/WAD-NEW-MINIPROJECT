import React from 'react'
import Reachables from './Reachables'
import Arrow from "../Events/images/Arrow.svg"
import Contact from "../Events/images/contact.svg"
import Location from "../Events/images/location.svg"
import Mail from "../Events/images/mail.svg"
import Meta from "../Events/images/facebook.svg"
import Instagram from "../Events/images/instagram.svg"
import Twitter from "../Events/images/twitter.svg"
import "../Events/componentStyle.css"

function footer() {
    
    const date = new Date().getFullYear();
    return (
    <footer className='footer'>
        <div className='footer-main-heading'>
            <p>For Support</p>
        </div>
        <div className='footer-content'>
        <div className='howToReach'>
            <Reachables heading="Contacts " reachableImg={Contact} reachableImgAltText="contactNo" reachableInfo="(+91) 9923497566" reachableSubInfo="Working Hours: 9:00 AM - 5:00PM" id="mobile"/>
            <Reachables heading="Address " reachableImg={Location} reachableImgAltText="contactNo"  reachableInfo="Kondhwa Pune - 411048" id="address"/>
            <Reachables heading="Email " reachableImg={Mail} reachableImgAltText="contactNo"  reachableInfo="contact@sinhgadsae.com" id="email"/>
            
        </div>
        <div className='socials'>
            <h2>Follow Us</h2>
            <div>
                <img src={Meta} alt='meta'/><img src={Instagram} alt='instagram'/><img src={Twitter} alt='twitter'/>
            </div>
            <p>© {date} Vivek Mahi</p>
        </div>
        </div>
        
    </footer>
    )
}

export default footer
