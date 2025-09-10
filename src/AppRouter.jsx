import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Project from "./pages/Project";
import Projects from "./pages/ProjectList";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />}>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}