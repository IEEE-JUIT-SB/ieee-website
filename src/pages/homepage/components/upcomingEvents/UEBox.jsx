import React from "react";
import "./UEBox.css";

export default function UEBox(parse) {
  return (
    <div>
      <div className="box">
        <span />
        <div className="content">
          <div className="ue-card-date">
            <h5>{parse.date}</h5>
            {parse.month},<h6>{parse.year}</h6>
          </div>
          <h2>{parse.name}</h2>
          <p>{parse.about}</p>
        </div>
      </div>
    </div>
  );
}
