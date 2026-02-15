import React from "react";
import Frontend from "../assets/frontend.png";
import Snake_Ladder from "../assets/Snake_Ladder.webp";
import Picto_Word from "../assets/Picto_Draw.jpg";
import Mystery_puzzle from "../assets/mystery-puzzle.jpg";
import Paper from "../assets/paper-presentation.jpg";
import Gen_AI from "../assets/generative-ai.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section id="events" className="bg-[#031631] py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex justify-center mb-12 md:mb-16">
          <span
            className="
              px-7 py-3 rounded-full
              bg-indigo-900/40 text-indigo-300
              text-base md:text-lg font-semibold
              border border-indigo-700/50
              backdrop-blur-sm
            "
          >
            Events
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-white">
            Our Events
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exciting technical challenges, creative showcases, workshops and fun
            non-technical activities — something for every tech enthusiast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          
          {/* Technical title + first card */}
          <div className="col-span-1 lg:col-span-1 -mt-18">
            <h2
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-extrabold text-white
                tracking-tight mb-6 lg:mb-8
                relative inline-block
                after:content-[''] after:absolute after:bottom-[-8px] after:left-0
                after:w-32 after:h-1 after:rounded-full
                after:bg-gradient-to-r after:from-pink-500 after:to-rose-600
              "
            >
              Technical
            </h2>

            <div
              className="
                bg-gray-900/90 rounded-2xl
                overflow-hidden shadow-2xl
                md:hover:-translate-y-4
                transition-all duration-300 ease-out
                group
              "
              style={{
                border: "1px solid rgba(126, 34, 206, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="PROJECT"
                  className="
                    w-full h-full object-cover
                    brightness-90 contrast-110
                    scale-105
                    md:group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                  <h2
                    className="
                      text-4xl md:text-5xl font-black
                      tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                      group-hover:brightness-125
                      transition-all duration-300
                    "
                    style={{ color: "#22d3ee" }}
                  >
                    PROJECT
                  </h2>
                  <p
                    className="
                      text-xl md:text-2xl font-bold
                      mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                    "
                    style={{ color: "#e9d5ff" }}
                  >
                    PRESENTATION
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                  Showcase your innovation and creativity by presenting your project ideas and outcomes through impactful, visual posters!
                </p>
                <div className="space-y-4 text-base md:text-lg">
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                    Friday, February 20
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                    10:30 AM – 12:30 PM
                  </div>
                </div>
                <Link
                  to="/events/project-presentation"
                  className="
                    mt-8 w-full py-4 px-6
                    text-white font-semibold text-lg rounded-xl
                    transition-all duration-200
                    md:hover:scale-[1.02]
                    active:scale-95
                    active:brightness-90
                    active:shadow-lg
                    block text-center
                    touch-manipulation
                  "
                  style={{
                    background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                    boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Second card - PROMPT UI */}
          <div className="col-span-1 lg:col-span-1">
            <div
              className="
                bg-gray-900/90 rounded-2xl
                overflow-hidden shadow-2xl
                md:hover:-translate-y-4
                transition-all duration-300 ease-out
                group
              "
              style={{
                border: "1px solid rgba(126, 34, 206, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={Frontend}
                  alt="PROMPT"
                  className="
                    w-full h-full object-cover
                    brightness-90 contrast-110
                    scale-105
                    md:group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                  <h2
                    className="
                      text-4xl md:text-5xl font-black
                      tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                      group-hover:brightness-125
                      transition-all duration-300
                    "
                    style={{ color: "#22d3ee" }}
                  >
                    PROMPT
                  </h2>
                  <p
                    className="
                      text-xl md:text-2xl font-bold
                      mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                    "
                    style={{ color: "#e9d5ff" }}
                  >
                    UI
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                  UI events create smooth, responsive experiences by instantly reacting to user interactions with visual feedback and guidance.
                </p>
                <div className="space-y-4 text-base md:text-lg">
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                    Friday, February 20
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                    10:30 AM – 12:30 PM
                  </div>
                </div>
                <Link
                  to="/events/prompt-ui"
                  className="
                    mt-8 w-full py-4 px-6
                    text-white font-semibold text-lg rounded-xl
                    transition-all duration-200
                    md:hover:scale-[1.02]
                    active:scale-95
                    active:brightness-90
                    active:shadow-lg
                    block text-center
                    touch-manipulation
                  "
                  style={{
                    background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                    boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Third card - TECH SNAKE & LADDER */}
          <div className="col-span-1 lg:col-span-1">
            <div
              className="
                bg-gray-900/90 rounded-2xl
                overflow-hidden shadow-2xl
                md:hover:-translate-y-4
                transition-all duration-300 ease-out
                group
              "
              style={{
                border: "1px solid rgba(126, 34, 206, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={Snake_Ladder}
                  alt="TECH SNAKE"
                  className="
                    w-full h-full object-cover
                    brightness-90 contrast-110
                    scale-105
                    md:group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                  <h2
                    className="
                      text-4xl md:text-5xl font-black
                      tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                      group-hover:brightness-125
                      transition-all duration-300
                    "
                    style={{ color: "#22d3ee" }}
                  >
                    TECH SNAKE
                  </h2>
                  <p
                    className="
                      text-xl md:text-2xl font-bold
                      mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                    "
                    style={{ color: "#e9d5ff" }}
                  >
                    & LADDER
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                  A tech twist on Snake and Ladder with three rounds—debugging, output prediction, and coding challenges as teams roll to progress.
                </p>
                <div className="space-y-4 text-base md:text-lg">
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                    Friday, February 20
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                    10:30 AM – 12:30 PM
                  </div>
                </div>
                <Link
                  to="/events/tech-snake-and-ladder"
                  className="
                    mt-8 w-full py-4 px-6
                    text-white font-semibold text-lg rounded-xl
                    transition-all duration-200
                    md:hover:scale-[1.02]
                    active:scale-95
                    active:brightness-90
                    active:shadow-lg
                    block text-center
                    touch-manipulation
                  "
                  style={{
                    background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                    boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Fourth card - PAPER PRESENTATION + second Technical title */}
          <div className="col-span-1 lg:col-span-1">
            <h2
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-extrabold text-white
                tracking-tight mb-6 lg:mb-8
                relative inline-block
                after:content-[''] after:absolute after:bottom-[-8px] after:left-0
                after:w-32 after:h-1 after:rounded-full
                after:bg-gradient-to-r after:from-pink-500 after:to-rose-600
              "
            >
              Technical
            </h2>

            <div
              className="
                bg-gray-900/90 rounded-2xl
                overflow-hidden shadow-2xl
                md:hover:-translate-y-4
                transition-all duration-300 ease-out
                group
              "
              style={{
                border: "1px solid rgba(126, 34, 206, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={Paper}
                  alt="PAPER"
                  className="
                    w-full h-full object-cover
                    brightness-90 contrast-110
                    scale-105
                    md:group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                  <h2
                    className="
                      text-4xl md:text-5xl font-black
                      tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                      group-hover:brightness-125
                      transition-all duration-300
                    "
                    style={{ color: "#22d3ee" }}
                  >
                    PAPER
                  </h2>
                  <p
                    className="
                      text-xl md:text-2xl font-bold
                      mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                    "
                    style={{ color: "#e9d5ff" }}
                  >
                    PRESENTATION
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
A technical event where participants present innovative ideas or research through PowerPoint, fostering creativity and knowledge sharing.
                </p>
                <div className="space-y-4 text-base md:text-lg">
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                    Friday, February 20
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                    10:30 AM – 12:30 PM
                  </div>
                </div>
                <Link
                  to="/events/paper-presentation"
                  className="
                    mt-8 w-full py-4 px-6
                    text-white font-semibold text-lg rounded-xl
                    transition-all duration-200
                    md:hover:scale-[1.02]
                    active:scale-95
                    active:brightness-90
                    active:shadow-lg
                    block text-center
                    touch-manipulation
                  "
                  style={{
                    background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                    boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Non-Technical title + PICTO WORDS */}
          <div className="col-span-1 lg:col-span-1 lg:col-start-2">
            <h2
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-extrabold text-white
                tracking-tight mb-6 lg:mb-8
                relative inline-block
                after:content-[''] after:absolute after:bottom-[-8px] after:left-0
                after:w-32 after:h-1 after:rounded-full
                after:bg-gradient-to-r after:from-green-500 after:to-cyan-600
              "
            >
              Non-Technical
            </h2>

            <div
              className="
                bg-gray-900/90 rounded-2xl
                overflow-hidden shadow-2xl
                md:hover:-translate-y-4
                transition-all duration-300 ease-out
                group
              "
              style={{
                border: "1px solid rgba(126, 34, 206, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={Picto_Word}
                  alt="PICTO"
                  className="
                    w-full h-full object-cover
                    brightness-90 contrast-110
                    scale-105
                    md:group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                  <h2
                    className="
                      text-4xl md:text-5xl font-black
                      tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                      group-hover:brightness-125
                      transition-all duration-300
                    "
                    style={{ color: "#22d3ee" }}
                  >
                    PICTO
                  </h2>
                  <p
                    className="
                      text-xl md:text-2xl font-bold
                      mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                    "
                    style={{ color: "#e9d5ff" }}
                  >
                    WORDS
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                  A thrilling and dynamic three-level challenge combining puzzles, riddles, and timed tasks where teams solve, compete, and unlock victory.
                </p>
                <div className="space-y-4 text-base md:text-lg">
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                    Friday, February 20
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                    1:30 PM – 3:00 PM
                  </div>
                </div>
                <Link
                  to="/events/picto-words"
                  className="
                    mt-8 w-full py-4 px-6
                    text-white font-semibold text-lg rounded-xl
                    transition-all duration-200
                    md:hover:scale-[1.02]
                    active:scale-95
                    active:brightness-90
                    active:shadow-lg
                    block text-center
                    touch-manipulation
                  "
                  style={{
                    background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                    boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* MYSTERY PUZZLE */}
          <div className="col-span-1 lg:col-span-1 mt-3">
            <div className="lg:mt-14">
              <div
                className="
                  bg-gray-900/90 rounded-2xl
                  overflow-hidden shadow-2xl
                  md:hover:-translate-y-4
                  transition-all duration-300 ease-out
                  group
                "
                style={{
                  border: "1px solid rgba(126, 34, 206, 0.5)",
                  boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
                }}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={Mystery_puzzle}
                    alt="MYSTERY"
                    className="
                      w-full h-full object-cover
                      brightness-90 contrast-110
                      scale-105
                      md:group-hover:scale-110
                      transition-transform duration-700 ease-out
                    "
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                    <h2
                      className="
                        text-4xl md:text-5xl font-black
                        tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                        group-hover:brightness-125
                        transition-all duration-300
                      "
                      style={{ color: "#22d3ee" }}
                    >
                      MYSTERY
                    </h2>
                    <p
                      className="
                        text-xl md:text-2xl font-bold
                        mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                      "
                      style={{ color: "#e9d5ff" }}
                    >
                      PUZZLE
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                    A thrilling and dynamic three-level challenge combining puzzles, riddles, and timed tasks where teams solve, compete, and unlock victory.
                  </p>
                  <div className="space-y-4 text-base md:text-lg">
                    <div className="flex items-center text-gray-300">
                      <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                      Friday, February 20
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                      1:30 PM – 3:00 PM
                    </div>
                  </div>
                  <Link
                    to="/events/mystery-puzzle"
                    className="
                      mt-8 w-full py-4 px-6
                      text-white font-semibold text-lg rounded-xl
                      transition-all duration-200
                      md:hover:scale-[1.02]
                      active:scale-95
                      active:brightness-90
                      active:shadow-lg
                      block text-center
                      touch-manipulation
                    "
                    style={{
                      background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                      boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop section */}
        <div className="mb-8 md:w-[500px]">
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold text-white
              tracking-tight
              mb-10
              relative inline-block
              after:content-[''] after:absolute after:bottom-[-12px] after:left-0
              after:w-20 after:h-1.5 after:rounded-full
              after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600
              drop-shadow-[0_4px_12px_rgba(34,211,238,0.35)]
            "
          >
            Workshop
          </h2>

          <div
            className="
              bg-gray-900/90 rounded-2xl
              overflow-hidden shadow-2xl
              md:hover:-translate-y-4
              transition-all duration-300 ease-out
              group
            "
            style={{
              border: "1px solid rgba(126, 34, 206, 0.5)",
              boxShadow: "0 25px 50px -12px rgba(59, 7, 100, 0.4)",
            }}
          >
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img
                src={Gen_AI}
                alt="GEN"
                className="
                  w-full h-full object-cover
                  brightness-90 contrast-110
                  scale-105
                  md:group-hover:scale-110
                  transition-transform duration-700 ease-out
                "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                <h2
                  className="
                    text-4xl md:text-5xl font-black
                    tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                    group-hover:brightness-125
                    transition-all duration-300
                  "
                  style={{ color: "#22d3ee" }}
                >
                  GEN
                </h2>
                <p
                  className="
                    text-xl md:text-2xl font-bold
                    mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                  "
                  style={{ color: "#e9d5ff" }}
                >
                  AI
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                Explore how machines create art, ideas, and innovation — a hands-on journey into Generative AI!
              </p>
              <div className="space-y-4 text-base md:text-lg">
                <div className="flex items-center text-gray-300">
                  <span style={{ color: "#c084fc" }} className="mr-3 text-xl">📅</span>
                  Friday, February 20
                </div>
                <div className="flex items-center text-gray-300">
                  <span style={{ color: "#c084fc" }} className="mr-3 text-xl">🕙</span>
                  10:00 AM - 12.00 PM
                </div>
              </div>
              <Link
                to="/events/workshop"
                className="
                  mt-8 w-full py-4 px-6
                  text-white font-semibold text-lg rounded-xl
                  transition-all duration-200
                  md:hover:scale-[1.02]
                  active:scale-95
                  active:brightness-90
                  active:shadow-lg
                  block text-center
                  touch-manipulation
                "
                style={{
                  background: "linear-gradient(to right, #7e22ce, #4f46e5)",
                  boxShadow: "0 10px 15px -3px rgba(59, 7, 100, 0.4)",
                }}
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;