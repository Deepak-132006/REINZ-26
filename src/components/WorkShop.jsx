import React from "react";
import BG2 from "../assets/bg-2.mp4";
import Lottie from "lottie-react";
import Frontend from "../assets/graphics/working.json";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const WorkShop = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={BG2} type="video/mp4" />
      </video>
      <NavBar />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black/90 -z-10" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-5 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24 mt-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 md:mb-24 text-center md:text-left w-full max-w-6xl">
          <Lottie
            animationData={Frontend}
            loop={true}
            className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          />

          <div className="flex flex-col items-center md:items-start">
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-extrabold tracking-tight 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400
                animate-gradient-x
                drop-shadow-[0_8px_32px_rgba(0,0,0,0.75)]
                leading-tight
              "
            >
              WorkShop
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl leading-relaxed">
              Discover. Develop. Do.
            </p>
          </div>
        </div>

        {/* Only Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full max-w-6xl">
          {/* Card 1: Registration + Judge Profile */}
          <GlassCard
            icon={<CurrencyRupeeIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Registration & Details"
          >
            <div className="space-y-6 text-gray-200 text-sm sm:text-base">
              {/* Small Profile Image Space – Judge / Coordinator */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-purple-300">
                    Guest Lecture: Exploring Generative AI
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Mr. Koodeeswaran T
                  </p>
                  <p className="text-base">VK Academy IT Solutions Pvt.</p>
                  <p className="text-base">Bangalore</p>
                </div>
              </div>

              {/* Event Details */}
              {[
                [CalendarIcon, "Date", "Friday, February 20, 2026"],
                [ClockIcon, "Time", "10:00 AM – 12:00 PM"],
                [MapPinIcon, "Venue", "Placement Seminar Hall / AC"],
                [CurrencyRupeeIcon, "Fee", "₹300 per head"],
              ].map(([Icon, label, value], idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p>{value}</p>
                  </div>
                </div>
              ))}

              {/* Register Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUq-q1v-33gQI9__gTAAamk20FvwGnLGpZk2YgB9omVjKL1g/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-20 w-full flex items-center justify-center 
                  px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl font-semibold text-base sm:text-lg
                  bg-gradient-to-r from-purple-600 to-indigo-600 
                  hover:from-purple-500 hover:to-indigo-500 
                  text-white shadow-lg shadow-purple-900/40 
                  hover:shadow-purple-700/60 hover:scale-[1.03] 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black
                  transition-all duration-300
                "
              >
                Register Now →
              </a>
            </div>
          </GlassCard>

          {/* Card 2: Event Overview (Placeholder Texts) */}
          <GlassCard
            icon={<AcademicCapIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Event Overview"
            className=" h-[300px]"
          >
            <div className="space-y-6 text-gray-200 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-purple-300 mb-2">
                  Description
                </p>
                <p>
                  Explore how Generative AI is transforming creativity through
                  powerful tools for image, video, and code generation. Discover
                  how innovations like ChatGPT, Midjourney, and Runway are
                  reshaping the future of creation and design.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

/* Glass Card Component – unchanged */
const GlassCard = ({ icon, title, children, className = "" }) => (
  <div
    className={`
      backdrop-blur-xl bg-white/5 border border-white/10 
      rounded-2xl sm:rounded-3xl p-6 sm:p-8 
      shadow-2xl shadow-black/40 
      hover:shadow-purple-900/30 hover:bg-white/8 
      transition-all duration-300 ease-out
      ${className}
    `}
  >
    <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-7">
      <div className="p-3 sm:p-3.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl text-purple-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl md:text-2.5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default WorkShop;
