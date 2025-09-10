import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Projects from "./pages/ProjectList";

export default function App() {
  return (
    <Router>
      <main className="mx-5">
        <header className="flex justify-center items-center my-4">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </main>
    </Router>
  );
}
