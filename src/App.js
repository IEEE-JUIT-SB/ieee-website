import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/homepage";
import NoPage from "./pages/noPage/NoPage";
import Membership from "./pages/membership/Membership";
import Team from "./pages/team/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="blogs" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
        <Route path="membership" element={<Membership />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
