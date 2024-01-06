import React from "react";
import Navbar from "../homepage/components/Navbar/Navbar";
import "./NoPage.css";
import Footer from "../homepage/components/Footer/Footer";
import Asset from "./assets/asset.png";

export default function NoPage() {
  return (
    <div className="no-page">
      <Navbar />
      <div className="no-page-in">
        <div className="no-page-in-1">
          <h1>Error 404!!! Page not Found !!!</h1>
          <h2>Sorry, we couldn't find the page you were looking for.</h2>
        </div>
        <img src={Asset} alt="" id="asset-1" />
        <img src={Asset} alt="" id="asset-2" />
        <img src={Asset} alt="" id="asset-3" />
        <img src={Asset} alt="" id="asset-4" />
        {/* <img src={Asset} alt="" id="asset-5" />
        <img src={Asset} alt="" id="asset-6" />
        <img src={Asset} alt="" id="asset-7" />
        <img src={Asset} alt="" id="asset-8" />
        <img src={Asset} alt="" id="asset-9" />
        <img src={Asset} alt="" id="asset-10" /> */}
        <Footer />
      </div>
    </div>
  );
}
