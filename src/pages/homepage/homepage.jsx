import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import UpcomingEvents from "./components/upcomingEvents/UpcomingEvent";
import TSlider from "./components/testimonials/TSlider";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

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
