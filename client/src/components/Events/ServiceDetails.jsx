import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"


const ServiceDetails = (props) => {

    AOS.init();

    const knowMore = async(e)=>
    {
        console.log(e.target.id);
        e.preventDefault();
    }
    const btn_style = props.style + "-btn";
    var flag=true;
    if(props.serviceContainer==="lhs-service")
    flag=true;
    else
    flag=false
    return (
        <div className={props.serviceContainer} data-aos={flag ?"fade-left" : "fade-right"} data-aos-duration="600" >
            <div>
                <ul id={props.style}><li>{props.serviceHeading}</li></ul>
                <p id={props.serviceId}>{props.description}</p>
                <form method='POST'>
                <button type="submit" name={props.serviceId} className='service-btn' id={btn_style}  onClick={knowMore}>{props.Payment}</button>
                </form>
                
                
                
            </div>
            <img src= {props.serviceImage} alt={props.serviceImgAltText}/>

            
        </div>
    )
}

export default ServiceDetails;
