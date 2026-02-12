import React from "react";
import BG2 from "../assets/bg-2.mp4";
import BG1 from "../assets/bg-1.mp4";


const Project = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BG1} type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h3 className="text-white text-5xl font-bold">Project Presentation</h3>

      </div>
    </div>
  );
};

export default Project;
