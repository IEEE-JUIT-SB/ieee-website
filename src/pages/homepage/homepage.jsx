import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvent";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <UpcomingEvents />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
