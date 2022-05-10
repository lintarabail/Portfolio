import React from 'react'
import './Card.css'


const Card = ({emoji,heading,details}) => {
  return (
      <div className="3dcard">
    <div className="cards">
       <img src={emoji} height={100} width={100} alt="" />
       <span>{heading}</span>
       <span>{details}</span>
       <button className="cardbtn">
           Learn more
       </button>
    </div>
   
   
    </div>
   
  )
}

export default Card