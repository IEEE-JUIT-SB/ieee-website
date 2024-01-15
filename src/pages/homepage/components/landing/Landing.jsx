import React from "react";
import "./Landing.css";
import box from "./Assets/Rectangle3.png";
import IEEE from "./Assets/IEEE.png";
import middleText from "./Assets/DREAM. DESIGN. DEVELOP..png";
import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";
import "./LandingBG.css";
import Starfield from "./Starfield";
import Asset2 from "./Assets/asset2.png";

export default function Landing() {
  return (
    <div className="background-container" id="home">
      {/* <div class="bg"></div> */}
      <img src={Asset2} alt="" id="bg-asset" />

      {/* <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div> */}
      <div className="starfield">
        <Starfield />
      </div>
      {/* <canvas id="particle"></canvas> */}
      <div id="space-warp">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div>

      <div className="landing-section1">
        <h1 id="ieee-landing">IEEE</h1>
        <h2 id="ieee-quote">DREAM . DESIGN . DEVELOP</h2>
      </div>
      <div className="landing-section2"></div>
    </div>
  );
}
