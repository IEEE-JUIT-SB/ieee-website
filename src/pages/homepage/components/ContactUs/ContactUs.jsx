import React, { useState } from "react";
import "./ContactUs.css";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";
import { RandomReveal } from "react-random-reveal";
import ConBg from "./Assets/contact_bg.png";

export default function ContactUs() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, message } = userData;

    if (firstName && lastName && email && message) {
      const res = await fetch(
        "https://ieee-website-72717-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        alert("Thank you for contacting us. We will get back to you soon.");
      }
    } else {
      alert("Please fill all the data");
    }
  };

  return (
    <div id="contact-us">
      <img src={ConBg} alt="" id="conbg" />
      <div className="contact-head">CONTACT US</div>
      <div className="con-content">
        <div className="contact-subhead">We would love to hear from you!</div>
        <div className="contact-body">
          <div className="contact-info">
            <div className="address">
              <FaLocationDot className="address-icon" />
              {/* <p>JUIT, Waknaghat SOLAN HP-173234</p> */}
              <RandomReveal
                isPlaying
                duration={4}
                revealDuration={1.6}
                characters="JUIT, Waknaghat SOLAN HP-173234"
                onComplete={() => ({ shouldRepeat: false, delay: 3 })}
              />
            </div>
            <div className="email">
              <a href={"mailto:ieee.juit@juitsolan.in"}>
                <FaEnvelope className="email-icon" />
                {/* <p>ieeejuit@juitsolan.in</p> */}
                <RandomReveal
                  isPlaying
                  duration={4}
                  revealDuration={1.6}
                  characters="ieeejuit@juitsolan.in"
                  onComplete={() => ({ shouldRepeat: false, delay: 3 })}
                />
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://instagram.com/ieeejuit?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
              >
                <FaInstagram className="insta-icon" />
                {/* <p>ieeejuit</p> */}
                <RandomReveal
                  isPlaying
                  duration={4}
                  revealDuration={1.6}
                  characters="ieeejuit"
                  onComplete={() => ({ shouldRepeat: false, delay: 3 })}
                />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/ieeejuitsb/" target="_blank">
                <FaLinkedin className="linkedin-icon" />
                {/* <p>linkedin.com/ieeejuit</p> */}
                <RandomReveal
                  isPlaying
                  duration={4}
                  revealDuration={1.6}
                  characters="linkedin.com/ieeejuit"
                  onComplete={() => ({ shouldRepeat: false, delay: 3 })}
                />
              </a>
            </div>
          </div>
          <div className="vertical-line"></div>
          <form className="contact-form" method="POST">
            <div className="name">
              <div className="first-name">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={userData.firstName}
                  onChange={postUserData}
                />
              </div>
              <div className="last-name">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={userData.lastName}
                  onChange={postUserData}
                />
              </div>
              <div className="email">
                <label htmlFor="">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter emailId"
                  name="email"
                  value={userData.email}
                  onChange={postUserData}
                />
              </div>
              <div className="message">
                <label htmlFor="">Message</label>
                <textarea
                  placeholder="Enter your message here..."
                  name="message"
                  value={userData.message}
                  onChange={postUserData}
                />
              </div>
            </div>
            <button onClick={submitData} className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
