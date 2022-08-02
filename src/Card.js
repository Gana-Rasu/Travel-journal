import React from "react";
import './Card.css';

function Card(props){
    return(
<>

<div className="cards">
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.element.imageUrl} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <p className="card-text"><small className="text-muted"><span className="location">{props.element.location}</span>    <a href={props.element.googleMapsUrl}>view on google maps</a> </small></p>
        <h5 className="card-title">{props.element.title}</h5>
        <p className="card-text"><small className="text-muted">{props.element.startDate} - {props.element.endDate}</small></p>
        <p className="card-text">{props.element.description}</p>
        
      </div>
    </div>
  </div>
</div>


    </div>
</>
    );
}

export default Card;