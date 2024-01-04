import React from "react";
import "./Landing.css";
import landing_bg from "./Assets/Landing_bg.png";
import box from "./Assets/Rectangle3.png";
import IEEE from "./Assets/IEEE.png";
import middleText from "./Assets/DREAM. DESIGN. DEVELOP..png";
import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";

const backgroundStyle = {
  width: "100%", // Set the image width to 100% of the container
  height: "100vh", // Set the image height to 100% of the viewport height
  objectFit: "cover", // Make sure the image covers the container without distortion
};

export default function Landing() {
  return (
    <div className="background-container">
      <img src={landing_bg} alt="" style={backgroundStyle} />
      <div className="IEEE">
        <img src={IEEE} alt="" />
      </div>
      <div className="text">
        <img src={middleText} alt="" />
      </div>
      <div className="box">
        <img src={box} alt="" />
      </div>
      <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
