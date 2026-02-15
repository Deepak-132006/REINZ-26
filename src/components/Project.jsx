import React from "react";
import BG2 from "../assets/bg-2.mp4";
import Lottie from "lottie-react";
import Working from "../assets/graphics/Seo isometric composition with human characters.json";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const Project = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90 -z-10" />

      <div className="relative z-10 flex flex-col items-center px-5 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20 mt-10">
        {/* Hero - made slightly more compact */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12 md:mb-16 text-center md:text-left w-full max-w-6xl">
          <Lottie
            animationData={Working}
            loop={true}
            className="w-48 sm:w-56 md:w-64 lg:w-72 flex-shrink-0 drop-shadow-[0_0_32px_rgba(168,85,247,0.35)]"
          />

          <div className="flex flex-col items-center md:items-start">
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl 
                font-extrabold tracking-tight 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400
                drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)]
                leading-tight
              "
            >
              Project Presentation
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-200/90">
              Showcase your innovation through powerful visuals.
            </p>
          </div>
        </div>

        {/* 2 × 2 grid - more compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 w-full max-w-6xl">
          {/* Row 1 - Col 1: Description */}
          <GlassCard
            icon={<AcademicCapIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
            title="Event Description"
          >
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Participants present their creative hardware/software projects
              using posters or slides. Explain inspiration, process, challenges,
              and results clearly and visually.
            </p>
          </GlassCard>

          {/* Row 1 - Col 2: Rules */}
          <GlassCard
            icon={
              <ClipboardDocumentListIcon className="w-8 h-8 sm:w-9 sm:h-9" />
            }
            title="Rules"
          >
            <ul className="text-gray-200 text-sm sm:text-base space-y-2 list-disc list-inside marker:text-purple-400">
              <li>Team: 1–4 members</li>
              <li>Project: Hardware / Software / Hybrid</li>
              <li>Max 8–10 slides or poster panels</li>
              <li>Time: 8–10 min presentation + 3–5 min Q&A</li>
              <li>Original work only</li>
            </ul>
          </GlassCard>

          {/* Row 2 - Col 1: Coordinator & Theme */}
          <GlassCard
            icon={<UserGroupIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
            title="Coordinator & Theme"
          >
            <div className="space-y-4 text-gray-200 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-purple-300">Staff Coordinator</p>
                <p>Mr. S.Sankar HOD IT</p>
              </div>
              <div>
                <p className="font-semibold text-purple-300">Coordinator</p>
                <p>Rithika B.</p>
              </div>
              <div>
                <p className="font-semibold text-purple-300">Themes</p>
                <div className="flex gap-6">
                  <div>
                    <ul>
                      <li>• AI</li>
                      <li>• Emerging Tech</li>
                      <li>• Cyber Security</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>• Quantum</li>
                      <li>• IoT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            icon={<CalendarIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
            title="Event Details"
          >
            <div className="space-y-4 text-gray-200 text-sm sm:text-base">
              {[
                ["Date", "Friday, February 20, 2026"],
                ["Time", "10:00 AM – 12:30 PM"],
                ["Venue", "Data Analytics Lab"],
                ["Fee", "₹200 / participant"],
              ].map(([label, value], idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {label === "Date" && (
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  )}
                  {label === "Time" && (
                    <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  )}
                  {label === "Venue" && (
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  )}
                  {label === "Fee" && (
                    <CurrencyRupeeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  )}
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p>{value}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUq-q1v-33gQI9__gTAAamk20FvwGnLGpZk2YgB9omVjKL1g/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5 w-full flex items-center justify-center 
                  px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base
                  bg-gradient-to-r from-purple-600 to-indigo-600 
                  hover:from-purple-500 hover:to-indigo-500 
                  text-white shadow-lg shadow-purple-900/40 
                  hover:shadow-purple-700/60 hover:scale-[1.03] 
                  transition-all duration-300
                "
              >
                Register Now →
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

const GlassCard = ({ icon, title, children, className = "" }) => (
  <div
    className={`
      backdrop-blur-xl bg-white/6 border border-white/10 
      rounded-xl sm:rounded-2xl p-5 sm:p-6 
      shadow-xl shadow-black/40 
      hover:shadow-purple-900/30 hover:bg-white/9 
      transition-all duration-300 flex flex-col h-full
      ${className}
    `}
  >
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
      <div className="p-2.5 sm:p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg sm:rounded-xl text-purple-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default Project;
