import React from "react";
import "./style.css";



// => props.shufflePuppies(props.id)}

function PuppieCard(props) {
  return (
    <div className="card" >
       <div className="img-container">
        <img onClick={() => props.clickFunction(props.id)} alt={props.name} src={props.image}/>
      </div>
      </div>
    
  );
}

export default PuppieCard;
