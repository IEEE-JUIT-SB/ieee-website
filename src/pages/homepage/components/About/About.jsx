import React, { useRef, useState, useEffect } from "react";

import "./About.css";

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
      <div className="about-us__container">
        <div className="about-us__heading">ABOUT US</div>
        <div className="about-us__content">
          <div className="about-us__stats">
            <div className="about-us__b1">
              <h3 className="about-us__title">100</h3>
              <h6 className="about-us__subtitle">IEEE members</h6>
            </div>
            <div className="about-us__b2">
              <h3 className="about-us__title">100</h3>
              <h6 className="about-us__subtitle">IEEE WIE members</h6>
            </div>
            <div className="about-us__b3">
              <h3 className="about-us__title">100</h3>
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
              <p className="about-us__p1">
                The JUIT IEEE Student Branch stands as a dynamic and pioneering
                arm of the IEEE organization, dedicated to facilitating the
                fulfillment of its core mission. Our primary objectives revolve
                around the realms of scientific and educational pursuits, with a
                steadfast focus on advancing the theory and practice of
                electrical, electronic communication, computer science and
                engineering, as well as the broader spectrum of allied
                engineering branches and the encompassing arts and sciences.
              </p>
              <p className="about-us__p2">
                At JUIT IEEE-SB, our mission is to empower our student members
                on their technological journeys. We do so by providing
                unparalleled access to indispensable technical knowledge and
                cutting-edge research, fostering invaluable networking
                opportunities, equipping them with the tools for career
                development, and delivering a host of exclusive benefits that
                bolster their educational and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
