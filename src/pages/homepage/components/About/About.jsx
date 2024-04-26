import React, { useRef, useState, useEffect } from "react";

import "./About.css";
import Asset1 from "./Assets/asset1.svg";
import Asset2 from "./Assets/asset2.svg";
import Asset3 from "./Assets/asset3.svg";
import Asset4 from "./Assets/asset4.svg";
import Asset5 from "./Assets/asset5.svg";
import Asset6 from "./Assets/asset6.svg";
import Asset7 from "./Assets/asset7.svg";
import Asset8 from "./Assets/asset8.svg";
import Asset9 from "./Assets/asset9.svg";
import Asset10 from "./Assets/asset10.svg";
import Asset11 from "./Assets/asset11.svg";
import AboutBG from "./Assets/bg.png";
import AboutCarousel from "./AboutCarousel";

export default function About() {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientAngle, setGradientAngle] = useState(180);

  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    const { left, top, width, height } = divElement.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    console.log("Center coordinates:", centerX, centerY);
  }, []);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    smoothGradientAngleTransition();
    setTimeout(() => {
      smoothGradientAngleTransition(false);
    }, 150); // 200ms delay to start the transition back to the original angle
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calculateGradientAngle = () => {
    const divElement = divRef.current;
    const { left, top, width, height } = divElement.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = -mousePosition.x + centerX;
    const y = centerY - mousePosition.y;
    let rad = Math.atan2(y, x);

    let deg = (rad * 180) / Math.PI;

    console.log(deg);

    return (deg - 270 + 360) % 360;
  };

  useEffect(() => {
    const calculatedAngle = isMouseInside
      ? calculateGradientAngle()
      : gradientAngle;
    setGradientAngle(calculatedAngle);
    setDynamicBackgroundStyle({
      background: `linear-gradient(${calculatedAngle}deg, rgba(255, 255, 255, 0.2) 1.56%, rgba(255, 255, 255, 0) 100%)`,
    });
    // eslint-disable-next-line
  }, [isMouseInside, mousePosition]);

  const smoothGradientAngleTransition = (fadeOut = true) => {
    let startTime = null;

    const step = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 400, 1); // 400ms transition -> increase it to slow down the transition

      const opacity = fadeOut ? 0.2 - progress * 0.2 : progress * 0.2;

      console.log("progress: ", progress, opacity);
      const newBackgroundStyle = `linear-gradient(${
        fadeOut ? gradientAngle : 180
      }deg, rgba(255, 255, 255, ${opacity}) 1.56%, rgba(255, 255, 255, 0) 100%)`;

      setDynamicBackgroundStyle({ background: newBackgroundStyle });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const [dynamicBackgroundStyle, setDynamicBackgroundStyle] = useState({
    background: `linear-gradient(${gradientAngle}deg, rgba(255, 255, 255, 0.2) 1.56%, rgba(255, 255, 255, 0) 100%)`,
  });

  return (
    <div className="about-body" id="about">
      <img src={Asset1} alt="" id="about-asset-1" />
      <img src={Asset2} alt="" id="about-asset-2" />
      <img src={Asset3} alt="" id="about-asset-3" />
      <img src={Asset4} alt="" id="about-asset-4" />
      <img src={Asset5} alt="" id="about-asset-5" />
      <img src={Asset6} alt="" id="about-asset-6" />
      <img src={Asset7} alt="" id="about-asset-7" />
      <img src={Asset8} alt="" id="about-asset-8" />
      <img src={Asset9} alt="" id="about-asset-9" />
      <img src={Asset3} alt="" id="about-asset-10" />
      <img src={Asset10} alt="" id="about-asset-11" />
      <img src={Asset3} alt="" id="about-asset-12" />
      <img src={Asset4} alt="" id="about-asset-13" />
      <img src={Asset3} alt="" id="about-asset-14" />
      <img src={Asset3} alt="" id="about-asset-15" />
      <img src={Asset3} alt="" id="about-asset-16" />
      <img src={Asset3} alt="" id="about-asset-17" />
      <img src={Asset3} alt="" id="about-asset-18" />
      <img src={Asset3} alt="" id="about-asset-19" />
      <img src={Asset11} alt="" id="about-asset-20" />
      <img src={Asset11} alt="" id="about-asset-21" />
      <img src={Asset11} alt="" id="about-asset-22" />
      <img src={Asset11} alt="" id="about-asset-23" />
      <img src={AboutBG} alt="" id="about-bg" />
      <div className="about-us__container">
        <div className="about-us__heading">ABOUT US</div>
        <div className="about-us__content">
          <div className="about-us__stats">
            <div className="about-us__b1">
              <h3 className="about-us__title">200+</h3>
              <h6 className="about-us__subtitle">IEEE members</h6>
            </div>
            <div className="about-us__b2">
              <h3 className="about-us__title">100+</h3>
              <h6 className="about-us__subtitle">IEEE WIE members</h6>
            </div>
            <div className="about-us__b3">
              <h3 className="about-us__title">120+</h3>
              <h6 className="about-us__subtitle">IEEE Sight members</h6>
            </div>
          </div>
          <div
            className="about-us__paragraphs"
            style={dynamicBackgroundStyle}
            ref={divRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="about-us__para_wrapper">
              <AboutCarousel/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
