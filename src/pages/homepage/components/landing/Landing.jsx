import React from "react";
import "./Landing.css";
import IEEE from "./Assets/IEEE.png";
import "./LandingBG.css";
import Starfield from "./Starfield";
import Asset2 from "./Assets/asset2.png";

export default function Landing() {
  return (
    <div id="home">
      <img src={Asset2} alt="" id="bg-asset" />
      <div className="starfield">
        <Starfield />
      </div>
      <div id="space-warp">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div>

      <div className="landing-section1">
        <img src={IEEE} className="landing-ieee-logo" alt="" />
      </div>
      <div className="landing-section2"></div>
    </div>
  );
}
