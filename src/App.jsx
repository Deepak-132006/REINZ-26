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
import WordDraw from "./components/PictoWords";
import MysteryPuzzle from "./components/MysteryPuzzle";
import PictoWords from "./components/PictoWords";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Events />
            <Register />
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/events/project-presentation" element={<Project />} />
        <Route path="/events/prompt-ui" element={<PromptUI />} />
        <Route path="/events/tech-snake-and-ladder" element={<TechSnakeLadder />} />
        <Route path="/events/workshop" element={<WorkShop />} />
        <Route path="/events/picto-words" element={<PictoWords />} />
        <Route path="/events/mystery-puzzle" element={<MysteryPuzzle />} />

        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>

  );
};

export default App;
