import React from "react";
import "./UpcomingEvent.css";
// import "./UEStyle.scss";
import UEBox from "./UEBox";
import { Link } from "react-router-dom";
import UEBG from "./Assets/ue-bg.png";

function SpanTagsGenerator() {
  // Generate an array from 10 to 60
  const numbers = Array.from({ length: 91 }, (_, i) => i + 10);

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
      <SpanTagsGenerator />
      <h4 className="upcoming-events-head">UPCOMING EVENTS</h4>
      <img src={UEBG} alt="" id="uebg" />
      <div className="ue-container">
        <div className="ue-cards">
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
        <div className="ue-bottom-content">
          <div className="bottom-card">
            <h4>Latest Upcoming Event Details</h4>
            <p>
              Purpose of the Event :{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus accusamus adipisci, ad deserunt earum aliquid unde
                doloremque quas laborum labore temporibus aliquam aspernatur
                consequatur, ipsa, cupiditate quo sed eum nam!
              </span>
            </p>
            <p>
              Event Venue: <text>LT1</text>
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
