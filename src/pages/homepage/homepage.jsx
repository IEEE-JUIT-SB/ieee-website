import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/About/About";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvent";
import TSlider from "./components/testimonials/TSlider";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <UpcomingEvents />
      <TSlider />
      <ContactUs />
      <Footer />
    </div>
  );
}
