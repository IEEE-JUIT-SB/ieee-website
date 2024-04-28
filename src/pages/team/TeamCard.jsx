import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Team.css";

export default function TeamCard(parse) {
  return (
    <div className="team-card">
      <img src={parse.image} alt="image" />
      <h2>{parse.name}</h2>
      <p>{parse.position}</p>
      <div className="team-card-socials">
        <Link to={parse.ln}>
          <FaLinkedin />
        </Link>
        <Link to={parse.in}>
          <FaInstagram />
        </Link>
        <a href={`mailto:${parse.mail}`}>
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
