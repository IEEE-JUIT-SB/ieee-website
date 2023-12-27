import React from "react";
import "./ContactUs.css";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";

function ContactUs() {
  return (
    <div id="contact-us">
      <div className="contact-head">Contact Us</div>
      <div className="contact-subhead">We would love to hear from you!</div>
      <div className="contact-body">
        <div className="contact-info">
          <div className="address">
            <FaLocationDot className="address-icon" />
            <p>JUIT, Waknaghat SOLAN HP-173234</p>
          </div>
          <div className="email">
            <a href="">
              <FaEnvelope className="email-icon" />
              <p>ieeejuit@juitsolan.in</p>
            </a>
          </div>
          <div className="instagram">
            <a href="https://instagram.com/ieeejuit?igshid=NzZlODBkYWE4Ng==">
              <FaInstagram className="insta-icon" />
              <p>ieeejuit</p>
            </a>
          </div>
          <div className="linkedin">
            <a href="">
              <FaLinkedin className="linkedin-icon" />
              <p>linkedin.com/ieeejuit</p>
            </a>
          </div>
        </div>
        <div className="vertical-line"></div>
        <form className="contact-form">
          <div className="name">
            <div className="first-name">
              <label htmlFor=""> First Name</label>
              <input type="text" />
            </div>
            <div className="last-name">
              <label htmlFor=""> Last Name</label>
              <input type="text" />
            </div>
            <div className="message">
              <label htmlFor="">Message</label>
              <textarea />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
