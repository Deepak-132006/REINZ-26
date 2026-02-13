import React from "react";
import Orb from "./Orb";
import NavBar from "./NavBar";
import CountdownTimer from "./CountDownTimer";

const Home = () => {
  return (
    <div className="min-h-[110vh] bg-black text-white" id="home">
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

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 sm:px-8 md:px-12 py-20 md:py-16 top-15 md:top-17">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl reinz sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
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

            <p className="text-[18px] sm:text-xl md:text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
              Join us for an immersive experience exploring cutting-edge AI
              technologies, innovations, and opportunities. Connect with
              industry experts and fellow enthusiasts.
            </p>

            <div className="md:-mt-17 -mt-5">
              <CountdownTimer />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 px-4">
              <a
                className="
      w-full sm:w-auto
      px-6 sm:px-8 py-3 sm:py-4 
      rounded-2xl font-semibold text-base sm:text-lg
      bg-gradient-to-br from-purple-600/80 to-indigo-600/80
      backdrop-blur-lg border border-white/10
      text-white shadow-xl shadow-purple-900/30
      hover:brightness-110 hover:scale-105
      transition-all duration-300
    "
                    target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUq-q1v-33gQI9__gTAAamk20FvwGnLGpZk2YgB9omVjKL1g/viewform?usp=preview"
              >
                Register Now
              </a>

              <a
                className="
      w-full sm:w-auto
      px-6 sm:px-8 py-3 sm:py-4 
      rounded-2xl font-semibold text-base sm:text-lg
      bg-white/5 backdrop-blur-lg border border-white/15
      text-white/90 hover:bg-white/10 hover:border-white/25
      transition-all duration-300
    "
    href="#events"

              >
                Explore Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
