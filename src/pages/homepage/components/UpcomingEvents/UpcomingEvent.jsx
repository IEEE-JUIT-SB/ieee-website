import React, { useState, useEffect } from "react";
import "./UpcomingEvent.css";
// import "./UEStyle.scss";
import UEBox from "./UEBox";
import { Link } from "react-router-dom";
import UEBG from "./Assets/ue-bg.png";
import UESlider from "./UESlider";

function SpanTagsGenerator() {
  // Generate an array from 10 to 60
  // const numbers = Array.from({ length: 91 }, (_, i) => i + 10);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setNumbers([]);
      } else {
        const newNumbers = Array.from({ length: 91 }, (_, i) => i + 10);
        setNumbers(newNumbers);
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {numbers.map((num) => {
        const randomSize = Math.floor(Math.random() * (11 - 2 + 1)) + 8;
        return (
          <span
            key={num}
            className={`ue-asset${num} ue-assets`}
            style={{
              position: "absolute",
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${49}%`,
              top: `${55}%`,
              background: `rgba(255, 255, 255, ${Math.random()})`,
              animation: `ue-asset-animation${
                Math.floor(Math.random() * (10 - 6 + 1)) + 6
              } ${
                Math.floor(Math.random() * (50 - 8 + 1)) + 8
              }s linear infinite`,
              zIndex: 1,
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <div id="upcoming-events">
      <span className="ue-asset1 ue-assets"></span>
      <span className="ue-asset3 ue-assets"></span>
      <span className="ue-asset2 ue-assets"></span>
      <span className="ue-asset4 ue-assets"></span>
      <span className="ue-asset5 ue-assets"></span>
      <span className="ue-asset6 ue-assets"></span>
      <span className="ue-asset7 ue-assets"></span>
      <span className="ue-asset8 ue-assets"></span>
      <span className="ue-asset9 ue-assets"></span>
      <span className="ue-asset101 ue-assets"></span>
      <span className="ue-asset102 ue-assets"></span>
      <span className="ue-asset103 ue-assets"></span>
      <span className="ue-asset104 ue-assets"></span>
      <span className="ue-asset105 ue-assets"></span>
      <div id="span-tags">
        <SpanTagsGenerator />
      </div>
      <h4 className="upcoming-events-head">UPCOMING EVENTS</h4>
      <img src={UEBG} alt="" id="uebg" />
      <div className="ue-container">
        <div className="ue-cards-1">
          <UEBox
            date="08"
            month="March"
            year="2023"
            name="R&D Expo"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
          <UEBox
            date="06"
            month="April"
            year="2023"
            name="Enigma"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
          <UEBox
            date="02"
            month="May"
            year="2023"
            name="Mindscape"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
        </div>
        <div className="ue-cards-2">
          <UESlider/>
        </div>
        <div className="ue-bottom-content">
          <div className="bottom-card">
            <h4>Latest Upcoming Event Details</h4>
            <p>
              Event Name: R&D Expo
            </p>
            <p>
              Purpose of the Event :{" "}
              <span>
              IEEE-JUIT-SB is organizing its flagship event R&D expo, a 3-day event including a plethora of events that empower students to apply their engineering skills to themes of high relevance and global impact. The main attraction of this event would be a 16 Hour Hackathon.
              </span>
            </p>
            <p>
              Event Venue: <text>LT2</text>
            </p>
            <p>
              Event Dates: <text>3<sup>rd</sup> May to 5<sup>th</sup> May, 2024</text>
            </p>
            <p>
              Event Timings: <text>05:00PM - 07:30PM</text>
            </p>
          </div>
          <Link to="/past-events">Past Events ➡</Link>
        </div>
      </div>
    </div>
  );
}
