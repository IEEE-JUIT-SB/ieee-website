import React, { useState } from "react";
import "./Navbar.css";
import IEEE from "./Assets/IEEE-JUIT(white).png";
import { Cross as Hamburger } from "hamburger-react";
import { animateScroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickNavbar = () => {
    setIsOpen1(!isOpen1);
  };

  const options = {
    duration: 500,
    smooth: true,
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    animateScroll.scrollToTop(options);
  };

  return (
    <div className={Navbar ? "navbar active" : "navbar"}>
      <div
        className={`navbar-wrapper ${isOpen1 ? "navbar-wrapper active" : ""} `}
      >
        <ScrollLink className="logo" onClick={handleScrollToTop} {...options}>
          <img onClick={"/"} className="navbar-logo" src={IEEE} />
        </ScrollLink>
        <div onClick={onClickNavbar} className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <ScrollLink
                activeClass="active-nav"
                to="home"
                spy={true}
                onClick={handleScrollToTop}
                {...options}
              >
                HOME
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active-nav"
                to="about"
                spy={true}
                onClick={handleScrollToTop}
                {...options}
              >
                ABOUT US
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active-nav"
                to="upcoming-events"
                spy={true}
                onClick={handleScrollToTop}
                {...options}
              >
                EVENTS
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active-nav"
                to="testimonial"
                spy={true}
                onClick={handleScrollToTop}
                {...options}
              >
                TESTIMONIALS
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active-nav"
                to="contact-us"
                spy={true}
                onClick={handleScrollToTop}
                {...options}
              >
                CONTACT US
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
