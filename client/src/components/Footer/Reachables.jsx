import React from 'react'

const Reachables = (props) => {
    return (
       
            <div className='reachables' >
                <h2 className='reachable-heading' id={props.id}>{props.heading}</h2>
                <span> <img src={props.reachableImg} alt={props.reachableImgAltText}/> <h2>{props.reachableInfo}</h2> </span>
                <h4>{props.reachableSubInfo}</h4>
            </div>
        
    )
}

export default Reachables;
