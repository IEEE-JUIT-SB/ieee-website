import React from "react";
import Navbar from "../homepage/components/navbar/Navbar";
import Footer from "../homepage/components/Footer/Footer";
import TeamCard from "./TeamCard";
import "./Team.css";

//Faculty coordinators
import Faculty from "./Faculty.json";
import ShrutiJain from "./Assets/Faculty/ShrutiJain.jpg";
import SunilKhah from "./Assets/Faculty/SunilKhah.jpeg";
import Abhishek from "./Assets/Faculty/Abhishek.jpg";
import Anita from "./Assets/Faculty/Anita.jpg";
import HemantSood from "./Assets/Faculty/HemantSood.jpg";
import Mandeep from "./Assets/Faculty/Mandeep.jpg";
import Nancy from "./Assets/Faculty/Nancy.jpg";
import NeenaJindal from "./Assets/Faculty/NeenaJindal.jpg";
import VikasBaghel from "./Assets/Faculty/VikasBaghel.jpg";

//Mentors
import Mentor from "./Mentor.json";
import Harsh from "./Assets/Coordinator24/harsh.JPG";
import Samson from "./Assets/Coordinator24/samson.JPG";
import Divyansh from "./Assets/Coordinator24/divyansh.JPG";


//Council 25-26
import Council25 from "./Council25.json";
import Harshit from "./Assets/Coordinator25/harshit.JPG";
import Jayendra from "./Assets/Coordinator25/jayendra.JPG";
import Nandini from "./Assets/Coordinator25/nandini.JPG";
import Shubham from "./Assets/Coordinator25/shubham.JPG";
import Aditya from "./Assets/Coordinator25/aditya.JPG";
import Anwesh from "./Assets/Coordinator25/anwesh.JPG";
import Keshav from "./Assets/Coordinator25/keshav.JPG";
import Prakhar from "./Assets/Coordinator25/prakhar.jpg";
import Shruti from "./Assets/Coordinator25/shruti.JPG";
import Edann from "./Assets/Coordinator25/edann.JPG";
import Tania from "./Assets/Coordinator25/tania.JPG";

//Council 24-25
import Council24 from "./Council24.json";
import Satvik from "./Assets/Coordinator24/satvik.JPG";
import Nazma from "./Assets/Coordinator24/nazma.JPG";
import Anant from "./Assets/Coordinator24/anant.JPG";
import Pranav from "./Assets/Coordinator24/pranav.jpeg";
import Preetimay from "./Assets/Coordinator24/preetimay.JPG";
import Prerna from "./Assets/Coordinator24/prerna.JPG";
import Saanch from "./Assets/Coordinator24/saanch.JPG";
import Soumya from "./Assets/Coordinator24/soumya.jpg";



//Team Leads 24-25
import { Link } from "react-router-dom";
// import Design from "./TeamLeads/DesignTeamLeads.json"
// import Kritika from "./Assets/TeamLeads/Designing/kritika.jpg"
// import Tania from "./Assets/TeamLeads/Designing/tania.jpg"
// import Edann from "./Assets/TeamLeads/Designing/edann.jpg"
// import Programming from "./TeamLeads/ProgrammingTeamLeads.json"
// import Shruti from "./Assets/TeamLeads/Programming/shruti.jpg"
// import Astha from "./Assets/TeamLeads/Programming/astha.jpeg"
// import PR from "./TeamLeads/PRFintechTeamLeads.json"
// import Devank from "./Assets/TeamLeads/PRFintech/devank.JPG"
// import Anwesh from "./Assets/TeamLeads/PRFintech/anwesh.jpg"
// import Social from "./TeamLeads/SocialMediaTeamLeads.json"
// import Prakhar from "./Assets/TeamLeads/SocialMedia/prakhar.jpg"
// import Web from "./TeamLeads/WebTeamLeads.json"
// import Namann from "./Assets/TeamLeads/Web/namann.jpg"
// import Jayendra from "./Assets/TeamLeads/Web/jayendra.jpg"

export default function Team() {
  const faculty = [ShrutiJain, SunilKhah, HemantSood, Nancy, Anita, NeenaJindal, VikasBaghel, Mandeep, Abhishek];
  const mentor = [Harsh, Samson, Divyansh];
  const council25 = [Harshit, Jayendra, Nandini, Shubham, Aditya, Anwesh, Keshav, Prakhar, Shruti, Edann, Tania];
  const council24 = [Harsh, Samson, Nazma, Satvik, Divyansh, Anant, Pranav, Preetimay, Prerna, Saanch, Soumya];
  // const design = [Kritika, Tania, Edann];
  // const programming = [Shruti, Astha];
  // const pr = [Devank, Anwesh];
  // const operations = []
  // const social = [Prakhar];
  // const iot = []
  // const web = [Namann, Jayendra];
  // const cyber = []

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
          <h2>IEEE JUIT SB COUNCIL 25-26</h2> 
          <div className="team-page-cards">
            {Council25.map((member, index) => (
              <TeamCard
                key={index}
                image={council25[index]}
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
          <h2>IEEE JUIT SB COUNCIL 24-25</h2>
          <div className="team-page-cards">
            {Council24.map((member, index) => (
              <TeamCard
                key={index}
                image={council24[index]}
                name={member.name}
                position={member.position}
                ln={member.ln}
                in={member.in}
                mail={member.mail}
              />
            ))}
          </div>
        </div>

        {
          <>
         {/* <div className="team-page-section">
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
          <h3 className="text-white text-[28px]">PR Team Leads</h3>
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
            </div> */}
            </>
            /*  <div className="team-page-section">
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
        </div> */}
        {/* <Link to="/past-council-22" className="text-white mb-10">
          View Past Council
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}
