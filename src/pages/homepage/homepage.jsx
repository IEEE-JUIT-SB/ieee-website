import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/About/About";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvent";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

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
