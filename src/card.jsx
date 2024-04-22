import React from 'react'
import './card.css';
const Card = (props) => {
  return <>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={props.src} alt="Avatar" style={{width:"500px",height:"500px"}} />
    </div>
    <div class="flip-card-back">
       
      <h2>{props.name}</h2> 
      <p>{props.info}</p>
    </div>
  </div>
</div>
    </>
}

export default Card
