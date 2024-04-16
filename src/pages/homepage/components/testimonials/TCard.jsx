import React from "react";
import "./Testimonials.css"

export default function TCard(parse) {
  return (
    <div>
      <div className="tcar-card">
        <div>
          <img src={parse.image} alt="" />
          <h3>{parse.name}</h3>
        </div>
        <p>"{parse.testimonial}"</p>
      </div>
    </div>
  );
}
