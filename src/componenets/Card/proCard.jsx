import React from "react";

function ProHomeCard(props) {

    props = props.props
    console.log(props)
  return (
    <div className="card_main" >
      <div class="card">
        <div class="front-side">
          <img src={props?.tokenURI} alt="Forest" class="card-image" />
          <ul class="card-list">
          <li class="card-list-item">owner: {props?.owner.slice(1,20)}</li>
          <li class="card-list-item">price: {props?.price}ETH</li>
              <li class="card-list-item">place: {props?.place}</li>
              <li class="card-list-item">placeName: {props?.placename}</li>
          </ul>
        </div>
      </div>
     
    </div>
  );
}

export default ProHomeCard;