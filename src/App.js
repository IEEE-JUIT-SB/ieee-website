import './App.css';
import Navbar from './pages/homepage/components/navbar/Navbar';
import Landing from './pages/homepage/components/landing/Landing';
import About from './pages/homepage/components/About/About';
import Footer from './pages/homepage/components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Footer />
    </div>

  );
}

export default App;
