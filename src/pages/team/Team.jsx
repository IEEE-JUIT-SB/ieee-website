import React from "react";
import Navbar from "../homepage/components/navbar/Navbar";
import Footer from "../homepage/components/footer/Footer";
import TeamCard from "./TeamCard";
import ShrutiJain from "./Assets/Faculty/ShrutiJain.jpg";
import SunilKhah from "./Assets/Faculty/SunilKhah.jpeg";
import Arpit from "./Assets/Mentor/Arpit.jpg";
import Vipul from "./Assets/Mentor/Vipul.jpg";
import Aryam from "./Assets/Coordinator/aryam.jpg";
import Mayank from "./Assets/Coordinator/mayank.jpg";
import Aavishkar from "./Assets/Coordinator/aavishkar.jpeg";
import Kshitiz from "./Assets/Coordinator/kshitiz.jpg";
import Ishita from "./Assets/Coordinator/ishita.jpg";
import Vivek from "./Assets/Coordinator/vivek.jpg";
import Saksham from "./Assets/Coordinator/saksham.jpg";
import "./Team.css";
import Faculty from "./Faculty.json";
import Mentor from "./Mentor.json";
import Council from "./Council.json";
import { Link } from "react-router-dom";

export default function Team() {
  const faculty = [ShrutiJain, SunilKhah];
  const mentor = [Arpit, Vipul];
  const council = [Aryam, Mayank, Aavishkar, Kshitiz, Ishita, Saksham, Vivek];
  return (
    <div>
      <Navbar />
      <div className="team-page">
        <h1>MEET OUR TEAM</h1>
        <p>
          With years of experience, we have got a veteran executive board at
          helm.
        </p>
        <div className="team-page-section">
          <h2>IEEE JUIT SB FACULTY COORDINATORS</h2>
          <div className="team-page-cards">
            {Faculty.map((member, index) => (
              <TeamCard
                key={index}
                image={faculty[index]}
                name={member.name}
                position={member.position}
                ln={member.ln}
                in={member.in}
                mail={member.mail}
              />
            ))}
          </div>
        </div>
        <div className="team-page-section">
          <h2>IEEE JUIT SB MENTORS</h2>
          <div className="team-page-cards">
            {Mentor.map((member, index) => (
              <TeamCard
                key={index}
                image={mentor[index]}
                name={member.name}
                position={member.position}
                ln={member.ln}
                in={member.in}
                mail={member.mail}
              />
            ))}
          </div>
        </div>
        <div className="team-page-section">
          <h2>IEEE JUIT SB COUNCIL</h2>
          <div className="team-page-cards">
            {Council.map((member, index) => (
              <TeamCard
                key={index}
                image={council[index]}
                name={member.name}
                position={member.position}
                ln={member.ln}
                in={member.in}
                mail={member.mail}
              />
            ))}
          </div>
        </div>
        <div className="team-page-section">
          <h2>IEEE JUIT SB TEAM LEADS</h2>
          <div className="team-page-cards"></div>
        </div>
        <Link to="/past-council-22" className="text-white mb-10">View Past Council</Link>
      </div>
      <Footer />
    </div>
  );
}
