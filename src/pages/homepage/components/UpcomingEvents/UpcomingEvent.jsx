import React from "react";
import "./UpcomingEvent.css";

export default function UpcomingEvents() {
  return (
    <div id="upcoming-events">
      <div className="upcoming_events-head">UPCOMING EVENTS</div>

      <div className="container">
        <div className="box">
          <span />
          <div className="content">
            <h2>08 Sept</h2>
            <h3>Title of event</h3>
            <div className="content_before">Title of event</div>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div className="box">
          <span />
          <div className="content">
            <h2>12 Sept</h2>
            <h3>Title of event</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div className="box">
          <span />
          <div className="content">
            <h2>16 Sept</h2>
            <h3>Title of event</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
      </div>
      <div className="card"></div>
    </div>
  );
}
