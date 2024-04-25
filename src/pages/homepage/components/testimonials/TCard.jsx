import React from "react";
import "./Testimonials.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TCard({ testimonial }) {
  return (
    <div className="tcar-card">
      <img src={testimonial.image} alt={testimonial.name} />
      <div className="tcar-test">
        <p>"{testimonial.testimonial}"</p>
        <div>
          <div>
            <div className="tcar-socials">
            <h3>- {testimonial.name}</h3>
              <a href={testimonial.insta}>
                <FaInstagram />
              </a>
              <a href={testimonial.linkedin}>
                <FaLinkedin />
              </a>
            </div>
            <p>{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
