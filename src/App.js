import "./App.css";
import Navbar from "./pages/homepage/components/navbar/Navbar";
import Landing from "./pages/homepage/components/landing/Landing";
import About from "./pages/homepage/components/About/About";
import ContactUs from "./pages/homepage/components/ContactUs/ContactUs";
import Footer from "./pages/homepage/components/Footer/Footer";
import Testimonials from "./pages/homepage/components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
