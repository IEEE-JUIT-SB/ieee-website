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
import Design from "./TeamLeads/DesignTeamLeads.json"
import Saanch from "./Assets/TeamLeads/Designing/saanch.jpg"
import Harsh from "./Assets/TeamLeads/Designing/harsh.jpeg"
import Nazma from "./Assets/TeamLeads/Designing/nazma.jpg"
import Programming from "./TeamLeads/ProgrammingTeamLeads.json"
import Divyansh from "./Assets/TeamLeads/Programming/divyansh.jpg"
import Viren from "./Assets/TeamLeads/Programming/viren.jpg"
import PR from "./TeamLeads/PRFintechTeamLeads.json"
import Satvik from "./Assets/TeamLeads/PRFintech/satvik.jpeg"
import Anand from "./Assets/TeamLeads/PRFintech/anand.jpg"
import Tarun from "./Assets/TeamLeads/PRFintech/tarun.jpg"
import Operations from "./TeamLeads/OperationsTeamLeads.json"
import Rajat from "./Assets/TeamLeads/Operations/rajat.jpg"
import Zorawar from "./Assets/TeamLeads/Operations/zorawar.jpg"
import Prerna from "./Assets/TeamLeads/Operations/prerna.jpg"
import Social from "./TeamLeads/SocialMediaTeamLeads.json"
import Mohit from "./Assets/TeamLeads/SocialMedia/mohit.jpg"
import Pranav from "./Assets/TeamLeads/SocialMedia/pranav.jpg"
import IOT from "./TeamLeads/IOTTeamLeads.json"
import Preetimay from "./Assets/TeamLeads/IOT/preetimay.jpg"
import Anant from "./Assets/TeamLeads/IOT/anant.jpg"
import Web from "./TeamLeads/WebTeamLeads.json"
import Samson from "./Assets/TeamLeads/Web/samson.jpg"
import Varnan from "./Assets/TeamLeads/Web/varnan.jpg"
import Cyber from "./TeamLeads/CyberSecurityTeamLeads.json"
import Vanshika from "./Assets/TeamLeads/Cyber/vanshika.jpeg"
import Khushi from "./Assets/TeamLeads/IOT/khushi.jpg"

export default function Team() {
  const faculty = [ShrutiJain, SunilKhah];
  const mentor = [Arpit, Vipul];
  const council = [Aryam, Mayank, Aavishkar, Kshitiz, Ishita, Saksham, Vivek];
  const design=[Saanch,Harsh,Nazma]
  const programming=[Divyansh,Viren]
  const pr=[Satvik,Anand,Tarun]
  const operations=[Rajat,Zorawar,Prerna]
  const social=[Mohit,Pranav]
  const iot=[Preetimay,Anant,Khushi]
  const web=[Samson,Varnan]
  const cyber=[Vanshika]

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
          <h3 className="text-white text-[28px]">Design Team Leads</h3>
          <div className="team-page-cards">
            {Design.map((member, index) => (
              <TeamCard
                key={index}
                image={design[index]}
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
          <h3 className="text-white text-[28px]">Programming Team Leads</h3>
          <div className="team-page-cards">
            {Programming.map((member, index) => (
              <TeamCard
                key={index}
                image={programming[index]}
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
          <h3 className="text-white text-[28px]">PR & Fintech Team Leads</h3>
          <div className="team-page-cards">
            {PR.map((member, index) => (
              <TeamCard
                key={index}
                image={pr[index]}
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
          <h3 className="text-white text-[28px]">Operations Team Leads</h3>
          <div className="team-page-cards">
            {Operations.map((member, index) => (
              <TeamCard
                key={index}
                image={operations[index]}
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
          <h3 className="text-white text-[28px]">Social Media Team Leads</h3>
          <div className="team-page-cards">
            {Social.map((member, index) => (
              <TeamCard
                key={index}
                image={social[index]}
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
          <h3 className="text-white text-[28px]">IOT Team Leads</h3>
          <div className="team-page-cards">
            {IOT.map((member, index) => (
              <TeamCard
                key={index}
                image={iot[index]}
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
          <h3 className="text-white text-[28px]">Web Team Leads</h3>
          <div className="team-page-cards">
            {Web.map((member, index) => (
              <TeamCard
                key={index}
                image={web[index]}
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
          <h3 className="text-white text-[28px]">Cyber Security Team Leads</h3>
          <div className="team-page-cards">
            {Cyber.map((member, index) => (
              <TeamCard
                key={index}
                image={cyber[index]}
                name={member.name}
                position={member.position}
                ln={member.ln}
                in={member.in}
                mail={member.mail}
              />
            ))}
          </div>
        </div>
        <Link to="/past-council-22" className="text-white mb-10">
          View Past Council
        </Link>
      </div>
      <Footer />
    </div>
  );
}
