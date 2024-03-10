import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/About/About";
import UpcomingEvents from "./components/upcomingEvents/UpcomingEvent";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

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
