import React, { useEffect, useState } from "react";
import IEEE_LOGO from "./Assets/IEEE-JUIT(white).png";
import "./Navbar.css";
import "@fontsource/ibm-plex-mono/400-italic.css";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const options = {
    duration: 500,
    smooth: true,
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    // If already on the main page ("/"), scroll to top
    // Otherwise, redirect to the main page and scroll to top
    if (location.pathname === "/") {
      animateScroll.scrollToTop(options);
    } else {
      navigate("/");
      animateScroll.scrollToTop(options);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div>
        <ScrollLink
          //  to top
          className="logo"
          onClick={handleScrollToTop}
          {...options}
        >
          <img
            src={IEEE_LOGO}
            alt="IEEE logo"
            height={65}
            style={{ marginTop: "10px" }}
          />
        </ScrollLink>
      </div>
      <div className="right-nav">
        <li className="list">
          <li className="list">
            <button className="text-button">HOME</button>
          </li>
          <li className="list">
            <button className="text-button">ABOUT US</button>
          </li>
          <li className="list">
            <button className="text-button">MEMBERSHIP</button>
          </li>
          <li className="list">
            <button className="text-button">COUNCIL</button>
          </li>
          <li className="list">
            <button className="text-button">EVENTS</button>
          </li>
        </li>
      </div>
    </nav>
  );
}
