import React from "react";
import "./NoPage.css";
import Footer from "../homepage/components/Footer/Footer";
import Asset2 from "../homepage/components/landing/Assets/asset2.png";
import Navbar from "../homepage/components/navbar/Navbar";
import Starfield from "../homepage/components/landing/Starfield";
import Gallery from "../gallery/Gallery"

export default function NoPage() {
  return (
    <div className="no-page">
      <Navbar />
      <Gallery/>
      <div className="">
        <img src={Asset2} alt="" id="bg-asset" className="nopage-bg" />
        <div className="starfield-nopage">
          {/* <Starfield /> */}
        </div>
        <div className="no-page-in-1">
          {/* <h1>IEEE</h1> */}
        </div>
      <Footer />
      </div>
    </div>
  );
}
