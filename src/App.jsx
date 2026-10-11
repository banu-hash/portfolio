
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Education from "./pages/Education";
import FullStack from "./pages/FullStack";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Japanese from "./pages/Japanese";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.BASE_URL.replace(/\/$/, "")}
    >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/journey/education"
          element={<Education />}
        />

        <Route
          path="/journey/full-stack"
          element={<FullStack />}
        />

        <Route
          path="/journey/artificial-intelligence"
          element={<ArtificialIntelligence />}
        />

        <Route
          path="/journey/japanese"
          element={<Japanese />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
