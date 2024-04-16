import React from "react";
import "./NoPage.css";
import Footer from "../homepage/components/Footer/Footer";
import Asset2 from "../homepage/components/landing/Assets/asset2.png";
import Navbar from "../homepage/components/navbar/Navbar";
import Starfield from "../homepage/components/landing/Starfield";

export default function NoPage() {
  return (
    <div className="no-page">
      <Navbar />
      <div className="">
        <img src={Asset2} alt="" id="bg-asset nopage-bg" />
        <div id="space-warp">
          <div class="stars"></div>
          <div class="stars"></div>
          <div class="stars"></div>
          <div class="stars"></div>
          <div class="stars"></div>
        </div>
        <div className="no-page-in-1">
          <h1>Error 404!!! Page not Found !!!</h1>
          <h2>Sorry, we couldn't find the page you were looking for.</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
}
