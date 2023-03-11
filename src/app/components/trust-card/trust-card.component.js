import React from "react";
import './trust-card.css';  

function TrustCard({img, keyPoints}) {
  return (
    <div>
      <div class="card">
        <div class="front-side">
          <img src={img} alt="" class="card-image" />
          <ul class="card-list">
            {keyPoints.map((text) => (
              <li class="card-list-item">{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrustCard;
