import React from "react";
import BG2 from "../assets/bg-2.mp4";
import BG1 from "../assets/bg-1.mp4";
import Lottie from "lottie-react";
import Snake_Ladder from "../assets/graphics/Puzzle.json";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const MysteryPuzzle = () => {
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

      {/* Gradient Overlay – stronger in center for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black/90 -z-10" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-5 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24 mt-10">
        {/* Hero Section with Lottie + Title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 md:mb-24 text-center md:text-left w-full max-w-6xl">
          <Lottie
            animationData={Snake_Ladder}
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
              Mystery Puzzle
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl leading-relaxed">
              Solve the Mystery. Claim the Victory
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
          <GlassCard
            icon={<AcademicCapIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Event Description"
          >
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              In Level 1, participants answer 10 interconnected questions linked
              by a common puzzle word, which they must identify using their
              answers. In Level 2, each team receives 5 balloons containing
              riddles; teams burst a balloon to answer, and if the first team is
              wrong, the next gets a chance. In Level 3, one team member’s hand
              is cuffed while another answers five timed general knowledge
              questions to earn the key, with the top three highest-scoring
              teams getting the chance to unlock the handcuff.
            </p>
          </GlassCard>

          <GlassCard
            icon={
              <ClipboardDocumentListIcon className="w-9 h-9 sm:w-10 sm:h-10" />
            }
            title="Rules"
          >
            <ul className="text-gray-200 text-sm sm:text-base space-y-2.5 list-disc list-inside marker:text-purple-400">
              <li>Team: 2 Members</li>
              <li>Mobile not allowed</li>
            </ul>
          </GlassCard>

          <GlassCard
            icon={<TrophyIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Judging Criteria"
          >
            <ul className="text-gray-200 text-sm sm:text-base space-y-2">
              <li className="flex justify-between">
                Level 1 - Based on the solving puzzle word . Which team
                correctly finds them given puzzle are entered into the level 2
              </li>
              <li className="flex justify-between">
                Level 2 - Which team correctly answers for more questions within
                the given time are selected to level 3
              </li>
              <li className="flex justify-between">
                Level 3 - First 5 teams are selected based on highest score for
                general knowledge questions after they are allowed to release
                the handcuffs then Which team first released the handcuffs the
                team will be winner
              </li>
            </ul>
          </GlassCard>

          <GlassCard
            icon={<UserGroupIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Event Judge and Coordinator"
          >
            <div className="space-y-6 text-gray-200 text-sm sm:text-base">
              {/* Top judge */}
              <div>
                <p className="font-semibold text-purple-300 mb-1.5">Judge</p>
                <ul className="list-disc list-inside marker:text-purple-400 space-y-1.5">
                  <li>Ms. G.Sathya (AP/IT)</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-white/10">
                <p className="font-semibold text-purple-300 mb-1.5">
                  Staff Coordinator
                </p>
                <ul className="list-disc list-inside marker:text-purple-400 space-y-1.5">
                  <li>Ms. G.Sathya (AP/IT)</li>{" "}
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            icon={<UserGroupIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Student Coordinator & Theme"
          >
            <div className="space-y-5 text-gray-200 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-purple-300">
                  Student Coordinator
                </p>
                <p>Nithishwaran S</p>
              </div>
              <div>
                <p className="font-semibold text-purple-300">Themes</p>
                <p className="leading-relaxed">Riddles, General Knowledge.</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            icon={<CalendarIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
            title="Event Details"
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="space-y-5 sm:space-y-6 text-gray-200 text-sm sm:text-base">
              {[
                [CalendarIcon, "Date", "Friday, February 20, 2026"],
                [ClockIcon, "Time", "1:00 PM – 3:00 PM"],
                [MapPinIcon, "Venue", "2nd Year IT Classroom"],
                [CurrencyRupeeIcon, "Registration Fee", "₹150 per head"],
              ].map(([Icon, label, value], idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 flex-shrink-0" />
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
                  mt-4 sm:mt-6 w-full flex items-center justify-center 
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
        </div>
      </div>
    </div>
  );
};

/* Glass Card – unchanged structure, just refined spacing & text sizes */
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

export default MysteryPuzzle;
