import React, { useState } from "react";
import Logo from "../assets/dgctlogo2-Photoroom.png";
import IT from "../assets/It.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-2">
      <div
        className={`
          mx-auto mt-4 max-w-5xl
          backdrop-blur-xl bg-white/5 border border-white/10
          rounded-xl shadow-xl shadow-black/30
          transition-all duration-300
          items-center
          z-50
        `}
      >
        <div className="flex items-center justify-between px-4 py-2 md:py-2">
          {/* Left logo with mobile text + desktop hover */}
          <div className="relative group">
            <div className="flex items-center">
              <img
                src={IT}
                alt="IT Logo"
                className="drop-shadow-md w-15 md:w-18"
              />
              <span
                className="reinz pl-3
    md:hidden
    text-transparent bg-clip-text
    bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400
    text-sm sm:text-base font-medium tracking-wide
  "
              >
                Elite Association
              </span>
            </div>

            {/* Desktop hover tooltip below logo */}
            <div
              className="
                absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-1.5
                bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm
                rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none
                transition-opacity duration-200 whitespace-nowrap
                border border-white/10 shadow-lg hidden md:block
              "
            >
              Elite Association
            </div>
          </div>

          {/* Center - Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-[18px] font-medium tracking-wide">
            {[
              { name: "Home", to: "/#home" },
              { name: "About", to: "/#about" },
              { name: "Events", to: "/#events" },
              { name: "Register", to: "/#register" },
              { name: "Contact", to: "/#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to} // ← fixed: use 'to' (not href)
                  className={`
                    relative px-2 py-1 text-[#f0f4ff] transition-all duration-300
                    hover:text-white
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                    after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
                    after:transition-all after:duration-300 after:rounded-full
                    hover:after:w-full hover:after:left-0
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Right logo (IT) with hover text */}
            <div className="relative group hidden md:block">
              <img src={Logo} alt="IT Logo" className="w-18 drop-shadow-md" />

              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-1.5
                  bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm
                  rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none
                  transition-opacity duration-200 whitespace-nowrap
                  border border-white/10 shadow-lg
                "
              >
                Dhirajlal Gandhi College of Technology
              </div>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden group focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <span
                  className={`absolute block w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
                />
                <span
                  className={`absolute block w-7 h-0.5 bg-white rounded-full transition-all duration-200 ease-in-out
                    ${isOpen ? "opacity-0 scale-75" : "opacity-100"}`}
                />
                <span
                  className={`absolute block w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      <div
        className={`
    md:hidden
    transition-all duration-400 ease-in-out
    z-[60]                           {/* slightly higher than navbar */}
    ${isOpen ? "max-h-[500px] opacity-100 mt-3 pointer-events-auto" : "max-h-0 opacity-0 mt-0 pointer-events-none"}
    overflow-hidden                  {/* ← important: prevents content bleed */}
  `}
      >
        <div
          className={`
      mx-auto w-[92%] max-w-md
      backdrop-blur-xl bg-white/5 border border-white/10
      rounded-2xl shadow-2xl shadow-black/30
      py-5 px-6 text-center
    `}
        >
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {[
              { name: "Home", to: "/#home" },
              { name: "About", to: "/#about" },
              { name: "Events", to: "/#events" },
              { name: "Register", to: "/#register" },
              { name: "Contact", to: "/#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className={`
              block py-1 px-4 rounded-xl text-[#f0f4ff]
              transition-all duration-300
              hover:bg-white/10 hover:text-white
              active:bg-white/15
            `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-3 border-t border-white/10">
            <img
              className="w-18 mx-auto opacity-80"
              src={Logo}
              alt="DGCT - Logo"
            />
            <p className="text-white text-18 font-medium">
              Dhirajlal Gandhi College of Technology
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
