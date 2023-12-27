import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>PAGE SECTIONS</h4>
            <a href="/employer">HOME</a>
            <a href="/healthplan">ABOUT</a>
            <a href="/individual">STATS</a>
            <a href="/individual">COUNCIL</a>
            <a href="/individual">MEMBERSHIP</a>
            <a href="/individual">TESTIMONIALS</a>
            <a href="/individual">EVENTS</a>
            <a href="/individual">CONTACT US</a>
          </div>

          <div className="sb_footer-links_div">
            <h4>IEEE JUIT SB</h4>
            <a href="/resource">IEEE JUIT</a>
            <a href="/resource">IEEE WIE JUIT</a>
            <a href="/resource">IEEE SIGHT JUIT</a>
          </div>

          <div className="sb_footer-links_div">
            <h4>IEEE</h4>
            <a href="https://www.ieee.org//" target="_blank">
              IEEE
            </a>
            <a href="https://ewh.ieee.org/r10/delhi/" target="_blank">
              IEEE DELHI SECTION
            </a>
            <a href="https://www.ieeer10.org/" target="_blank">
              IEEE R 10
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>EVENTS</h4>
            <a href="/about">ENIGMA</a>
            <a href="/press">MINDSCAPE</a>
            <a href="/career">CYBERVERSE</a>
            <a href="/contact">R&D EXPO</a>
          </div>
          <div className="sb_footer-links_div">
            <h4>SOCIAL LINKS</h4>
            <a href="">FACEBOOK</a>
            <a href="">LINKEDIN</a>
            <a href="">INSTAGRAM</a>
            <a href="">YOUTUBE</a>
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
