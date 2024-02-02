import React from "react";
import "./UpcomingEvent.css";
import UEBox from "./UEBox";
import { Link } from "react-router-dom";

export default function UpcomingEvents() {
  return (
    <div id="upcoming-events">
      <h4 className="upcoming-events-head">UPCOMING EVENTS</h4>

      <div className="ue-container">
        <div className="ue-cards">
          <UEBox
            date="08"
            month="March"
            name="R&D Expo"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
          <UEBox
            date="06"
            month="April"
            name="Enigma"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
          <UEBox
            date="02"
            month="May"
            name="Mindscape"
            about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
          />
        </div>
        <div className="ue-bottom-content">
          <div className="card"></div>
          <Link to="/past-events">Past Events ➡</Link>
        </div>
      </div>
    </div>
  );
}
