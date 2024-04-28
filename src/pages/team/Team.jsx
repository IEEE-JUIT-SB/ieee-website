import React from 'react'
import Navbar from '../homepage/components/navbar/Navbar'
import Footer from '../homepage/components/footer/Footer'
import TeamCard from './TeamCard'
import ShrutiJain from "./Assets/Faculty/ShrutiJain.jpg"
import SunilKhah from "./Assets/Faculty/SunilKhah.jpeg"
import Arpit from "./Assets/Mentor/Arpit.jpg"
import Vipul from "./Assets/Mentor/Vipul.jpg"
import Aryam from "./Assets/Coordinator/aryam.jpg"
import Mayank from "./Assets/Coordinator/mayank.jpg"
import Aavishkar from "./Assets/Coordinator/aavishkar.jpeg"
import Kshitiz from "./Assets/Coordinator/kshitiz.jpg"
import Ishita from "./Assets/Coordinator/ishita.jpg"
import Vivek from "./Assets/Coordinator/vivek.jpg"
import Saksham from "./Assets/Coordinator/saksham.jpg"
import "./Team.css"

export default function Team() {
  return (
    <div>
      <Navbar/>
      <div className='team-page'>
        <h1>MEET OUR TEAM</h1>
        <p>With years of experience, we have got a veteran executive board at helm.</p>
        <div className='team-page-section'>
          <h2>IEEE JUIT SB FACULTY COORDINATORS</h2>
          <div className='team-page-cards'>
            <TeamCard
              image={ShrutiJain}
              name="Prof. Dr. Shruti Jain"
              position="Faculty Coordinator"
              ln="https://www.linkedin.com/in/dr-shruti-jain-92705b130"
              in="https://www.instagram.com/jain.shruti15/"
              mail="shruti.jain@juitsolan.in"
            />
            <TeamCard
              image={SunilKhah}
              name="Sunil Khah"
              position="Faculty Coordinator"
              ln="https://www.linkedin.com/in/sunil-kumar-khah-a792a56/"
              in="#"
              mail="sunil_khah@rediffmail.com"
            />
          </div>
        </div>
        <div className='team-page-section'>
          <h2>IEEE JUIT SB MENTORS</h2>
          <div className='team-page-cards'>
            <TeamCard
              image={Arpit}
              name="Arpit Kaushal"
              position="Mentor"
              ln="https://www.linkedin.com/in/arpit-kaushal-133a911bb/"
              in="https://www.instagram.com/general.broda/"
              mail="#"
            />
            <TeamCard
              image={Vipul}
              name="Vipul Arora"
              position="Mentor"
              ln="https://www.linkedin.com/in/ar0ravipul/"
              in="https://www.instagram.com/ar0ravipul/"
              mail="#"
            />
          </div>
        </div>
        <div className='team-page-section'>
          <h2>IEEE JUIT SB COUNCIL</h2>
          <div className='team-page-cards'>
            <TeamCard
              image={Aryam}
              name="Aryam"
              position="Chairperson"
              ln="https://www.linkedin.com/in/aryamsharma/"
              in="https://www.instagram.com/_aryamsharma_/"
              mail="#"
            />
            <TeamCard
              image={Mayank}
              name="Mayank Kumar"
              position="Vice Chairperson"
              ln="https://www.linkedin.com/in/racinmk/"
              in="https://www.instagram.com/racinmk/"
              mail="#"
            />
            <TeamCard
              image={Aavishkar}
              name="Aavishkar"
              position="Treasurer"
              ln="https://www.linkedin.com/in/aavishkar-732760247/"
              in="#"
              mail="#"
            />
              <TeamCard
                image={Kshitiz}
                name="Kshitiz Tayal"
                position="Technical, Programming & Designing Head"
                ln="https://www.linkedin.com/in/kshitiz-tayal-a06b90224/"
                in="https://www.instagram.com/_kshitizz.__/"
                mail="#"
              />
            <TeamCard
              image={Ishita}
              name="Ishita Mishra"
              position="Secretary"
              ln="https://www.linkedin.com/in/ishita-mishra-6744b2233/"
              in="https://www.instagram.com/_ishu_1129_/"
              mail="#"
            />
            <TeamCard
              image={Vivek}
              name="Vivek Kumar Kataria"
              position="Media & Publicity Head"
              ln="https://www.linkedin.com/in/vivek-kumar-kataria-3b69451a9/"
              in="https://www.instagram.com/_vivek.kataria/"
              mail="#"
            />
            <TeamCard
              image={Saksham}
              name="Saksham Salathia"
              position="Public Relations Head"
              ln="https://www.linkedin.com/in/saksham-slathia/"
              in="https://www.linkedin.com/in/saksham-slathia/"
              mail="#"
            />
          </div>
        </div>
        <div className='team-page-section'>
          <h2>IEEE JUIT SB TEAM LEADS</h2>
          <div className='team-page-cards'>
            <TeamCard
              image={Aryam}
              name="Aryam"
              position="Chairperson"
              ln="https://www.linkedin.com/in/aryamsharma/"
              in="https://www.instagram.com/_aryamsharma_/"
              mail="#"
            />
            <TeamCard
              image={Aryam}
              name="Mayank Kumar"
              position="Vice Chairperson"
              ln="https://www.linkedin.com/in/racinmk/"
              in="https://www.instagram.com/racinmk/"
              mail="#"
            />
            <TeamCard
              image={Aavishkar}
              name="Aavishkar"
              position="Treasurer"
              ln="https://www.linkedin.com/in/aavishkar-732760247/"
              in="#"
              mail="#"
            />
              <TeamCard
                image={Kshitiz}
                name="Kshitiz Tayal"
                position="Technical, Programming & Designing Head"
                ln="https://www.linkedin.com/in/kshitiz-tayal-a06b90224/"
                in="https://www.instagram.com/_kshitizz.__/"
                mail="#"
              />
            <TeamCard
              image={Ishita}
              name="Ishita Mishra"
              position="Secretary"
              ln="https://www.linkedin.com/in/ishita-mishra-6744b2233/"
              in="https://www.instagram.com/_ishu_1129_/"
              mail="#"
            />
            <TeamCard
              image={Vivek}
              name="Vivek Kumar Kataria"
              position="Media & Publicity Head"
              ln="https://www.linkedin.com/in/vivek-kumar-kataria-3b69451a9/"
              in="https://www.instagram.com/_vivek.kataria/"
              mail="#"
            />
            <TeamCard
              image={Saksham}
              name="Saksham Salathia"
              position="Public Relations Head"
              ln="https://www.linkedin.com/in/saksham-slathia/"
              in="https://www.linkedin.com/in/saksham-slathia/"
              mail="#"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
