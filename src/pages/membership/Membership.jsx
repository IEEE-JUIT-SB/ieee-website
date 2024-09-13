import React from "react";
import Navbar from "../homepage/components/navbar/Navbar";
import Footer from "../homepage/components/Footer/Footer";
import "./Membership.css";

export default function Membership() {
  return (
    <div className="membership-page">
      <Navbar />
      <div className="membership-page-landing">
        <h1>Membership</h1>
        <p>Come, be a part of the legacy and make technology better!</p>
        <div className="membership-cards">
          <div className="membership-card">
            <h2>Benefits</h2>
            <ul>
              <li>
                <span>✔</span> New resources, opportunities and many discounts
              </li>
              <li>
                <span>✔</span> Advance your career in the right direction
              </li>
              <li>
                <span>✔</span> Chance to participate in various IEEE conferences
                across the globe
              </li>
            </ul>
            <a href="https://www.ieee.org/membership/index.html">Know More</a>
          </div>
          <div className="membership-card">
            <h2>Join a Society</h2>
            <ul>
              <li>
                <span>✔</span> Stay updated with latest trends in technology
              </li>
              <li>
                <span>✔</span> Network with colleagues locally and abroad
              </li>
              <li>
                <span>✔</span> Collaborate on research and projects with leading
                experts and many such opportunities
              </li>
            </ul>
            <a href="https://www.ieee.org/communities/societies/index.html">
              Know More
            </a>
          </div>
          <div className="membership-card">
            <h2>Join IEEE</h2>
            <ul>
              <li>
                <span>✔</span> Be a part of the world’s largest technology
                community
              </li>
              <li>
                <span>✔</span> Join professional and experts to shape your
                career
              </li>
              <li>
                <span>✔</span> Acquire new skills, and advance your professional
                development
              </li>
            </ul>
            <a href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join">
              Know More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
