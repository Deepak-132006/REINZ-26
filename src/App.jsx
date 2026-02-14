import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Project from "./components/Project";
import PromptUI from "./components/PromptUI";
import TechSnakeLadder from "./components/TechSnakeLadder";
import WorkShop from "./components/WorkShop";
import MysteryPuzzle from "./components/MysteryPuzzle";
import PictoWords from "./components/PictoWords";
import PaperPresentation from "./components/PaperPresentation";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Small inline component to handle hash scrolling after navigation
const ScrollToHash = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure section is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToHash /> {/* ← Added here: handles #about, #events, etc. */}
              <Home />
              <About />
              <Events />
              <Register />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/events/project-presentation" element={<Project />} />
        <Route path="/events/prompt-ui" element={<PromptUI />} />
        <Route path="/events/tech-snake-and-ladder" element={<TechSnakeLadder />} />
        <Route path="/events/paper-presentation" element={<PaperPresentation/>} />
        <Route path="/events/workshop" element={<WorkShop />} />
        <Route path="/events/picto-words" element={<PictoWords />} />
        <Route path="/events/mystery-puzzle" element={<MysteryPuzzle />} />
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </>
  );
};

export default App;