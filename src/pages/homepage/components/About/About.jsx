import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-body">
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
          <div className="about-us__paragraphs">
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
