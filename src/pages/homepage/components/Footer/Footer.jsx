import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>FOR BUISNESS</h4>
            <a href="/employer">
              <p>EMPLOYER</p>
            </a>
            <a href="/healthplan">
              <p>HEALTH PLAN</p>
            </a>
            <a href="/individual">
              <p>INDIVIDUAL</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>RESOURCES</h4>
            <a href="/resource">
              <p>RESOURCE CENTER</p>
            </a>
            <a href="/resource">
              <p>TESTIMONIAL</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>PARTNERs</h4>
            <a href="/resource">
              <p>IEEE JUIT-SB</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>RESOURCES</h4>
            <a href="/about">
              <p>about</p>
            </a>
            <a href="/press">
              <p>press</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
            <a href="/contact">
              <p>contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>SOCIAL LINKS</h4>
            <p>icons comming soon</p>
            <p>
              <img src="{fb}" alt="" />
            </p>
            <p>
              <img src="{fb}" alt="" />
            </p>
            <p>
              <img src="{fb}" alt="" />
            </p>
            {/* not imported till now  */}
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="sb_footer-below">
        <div className="sb_footer-below-links">
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27351.685474749993!2d77.081115!3d31.027345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1699518717106!5m2!1sen!2sin"></iframe>
          </div>
        </div>
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()} ALL RIGHTS RESERVED IEEE JUIT-SB</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
