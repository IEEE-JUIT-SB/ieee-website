import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/homepage";
import NoPage from "./pages/noPage/NoPage";
import Membership from "./pages/membership/Membership";
import Team from "./pages/team/Team";
import PastCouncil from "./pages/team/PastCouncil";
import Gallery from "./pages/gallery/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="past-council-22" element={<PastCouncil />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
        <Route path="membership" element={<Membership />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
