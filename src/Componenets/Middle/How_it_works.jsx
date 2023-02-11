import React from "react";

function How_it_works(props) {
  return (
    <div>
      <div class="card">
        <div class="front-side">
          <img src={props?.data?.img} alt="Forest" class="card-image" />
          <ul class="card-list">
            {props?.data?.text.map((text) => (
              <li class="card-list-item">{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default How_it_works;
