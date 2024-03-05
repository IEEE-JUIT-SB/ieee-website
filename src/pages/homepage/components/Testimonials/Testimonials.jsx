import React from "react";
import "./Testimonials.css";
import TBG from "./Assets/testimonials-bg.png";
import TSlider from "./TSlider";

function SpanTagsGeneratorT() {
  // Generate an array from 10 to 60
  const numbers = Array.from({ length: 500 }, (_, i) => i);

  return (
    <div>
      {numbers.map((num) => {
        const randomSize = Math.floor(Math.random() * (4 - 1 + 1)) + 4;
        return (
          <span
            key={num}
            className={`t-assets${num} t-assets`}
            style={{
              position: "absolute",
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${Math.random() * 98}%`,
              top: `${Math.floor(Math.random() * (120 - -20 + 1)) + -20}%`,
              background: `rgba(255, 255, 255, ${Math.random()})`,
              animation: `t-asset-animation ${
                Math.floor(Math.random() * (15 - 1 + 1)) + 1
              }s linear infinite`,
              zIndex: 1,
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="testimonial">
      <SpanTagsGeneratorT />
      <div class="testimonials-heading">TESTIMONIALS</div>
      <img src={TBG} alt="" id="tbg" />
      <div class="test-content">
        <TSlider />
      </div>
    </div>
  );
}
