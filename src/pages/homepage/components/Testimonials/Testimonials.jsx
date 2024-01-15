import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div id="testimonial">
      <div class="heading">TESTIMONIALS</div>

      <div class="test-content">
        <div class="test-pic">
          <img
            src="https://ieeejuit.co.in/images/board/ishita.png"
            height="270px"
            width="240px"
            alt=""
          />

          <p>
            Ishita Kapoor <br /> STUDENT MENTOR <br /> IEEE JUIT SB
          </p>
        </div>

        <p class="test-para">
          "Greetings to all the fellow, life senior, senior, professional and
          student members of IEEE JUIT Student Branch, it is because of your
          strength and support, IEEE JUIT Student Branch has achieved
          exceptional feats in the past few years. I wish further success to
          IEEE JUIT Student Branch"
        </p>
      </div>
    </div>
  );
}
