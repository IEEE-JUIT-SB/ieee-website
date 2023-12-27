import './App.css';
import Navbar from './pages/homepage/components/navbar/Navbar';
import Landing from './pages/homepage/components/landing/Landing';
import About from './pages/homepage/components/About/About';
import ContactUs from './pages/homepage/components/ContactUs/ContactUs';
import Footer from "./footer/footer";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Landing /> */}
// <<<<<<< main
      <About />
      <ContactUs />
      {/* <Footer /> */}
=======
      {/* <About /> */}
      <ContactUs/>
      <Footer />
// >>>>>>> main
    </div>

  );
}

export default App;
