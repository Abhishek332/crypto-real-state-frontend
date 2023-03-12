import React from "react";
import './trust-card.css';  

function TrustCard({img, keyPoints}) {
  return (
    <div class="trust-card center">
      <img src={img} alt="" class="trust-card-image" />
          <ul class="trust-card-list">
            {keyPoints.map((text) => (
              <li class="trust-card-list-item">{text}</li>
            ))}
          </ul>
      </div>
  );
}

export default TrustCard;
