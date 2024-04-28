import React from "react";
import "./UEBox.css";
import { Link } from "react-router-dom";

export default function UEBox(parse) {
  // Ensure correct prop destructuring and type safety (optional)
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
          <a
            className="links"
            href={parse.link}
            target="_blank"
          >
            Learn More >
          </a>
        </div>
      </div>
    </div>
  );
}
