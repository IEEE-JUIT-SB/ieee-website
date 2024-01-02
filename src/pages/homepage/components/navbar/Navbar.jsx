import React, { useEffect, useState } from "react";
import IEEE_LOGO from './Assets/IEEE-JUIT(white).png';
import './Navbar.css';
import "@fontsource/ibm-plex-mono/400-italic.css";

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div>
        <ul>
          <li><img src={IEEE_LOGO} alt="IEEE logo" height={65} style={{ marginTop: '20px' }} /></li>
        </ul>
      </div>
      <div className='right-nav'>
        <li className='list' >
          <li className='list'><button className='text-button'>HOME</button></li>
          <li className='list'><button className='text-button'>ABOUT US</button></li>
          <li className='list'><button className='text-button'>MEMBERSHIP</button></li>
          <li className='list'><button className='text-button'>COUNCIL</button></li>
          <li className='list'><button className='text-button'>EVENTS</button></li>
        </li>
      </div>
    </nav>
  );
}
