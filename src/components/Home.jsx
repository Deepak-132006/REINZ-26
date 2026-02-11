import React from "react";
import Orb from "./Orb";
import NavBar from "./NavBar";
import CountdownTimer from "./CountDownTimer";
import Reinz from "./Reinz";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <Orb
            hoverIntensity={2}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            backgroundColor="#000000"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 sm:px-8 md:px-12 py-20 md:py-16 md:top-18">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                REINZ' 2026
              </span>
            </h1>

            <div className="inline-flex items-center justify-center mb-4">
              <div
                className="
                  px-6 py-3 rounded-full 
                  bg-white/5 backdrop-blur-lg border border-white/20
                  text-[15px] sm:text-[15px] font-medium text-purple-200
                  shadow-lg shadow-purple-900/30
                "
              >
                February 20, 2026
              </div>
            </div>

            <p className="text-[17px] sm:text-xl md:text-1xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
              Join us for an immersive experience exploring cutting-edge AI
              technologies, innovations, and opportunities. Connect with
              industry experts and fellow enthusiasts.
            </p>

            <div className="-mt-12">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
