import React from "react";
import './style.css'

function Card(props){
  return(
<div className="card" onClick={() => props.clickPlaneswalker(props.name)}>
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"></p>
  </div>
</div>

)}

export default Card