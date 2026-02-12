import React, { useState } from "react";
import Logo from "../assets/dgctlogo2-Photoroom.png";
import IT from "../assets/It.png";

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
    `}
      >
        <div className="flex items-center justify-between px-4 py-2 md:py-2">
          <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="drop-shadow-md w-12 md:w-16" />
          </div>

          {/* Center - Links */}
          <ul className="hidden md:flex items-center gap-8 text-[18px] font-medium tracking-wide">
            {["Home", "About", "Events","Register", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`
                relative px-2 py-1 text-[#f0f4ff] transition-all duration-300
                hover:text-white
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
                after:transition-all after:duration-300 after:rounded-full
                hover:after:w-full hover:after:left-0
              `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="">
              <img src={IT} alt="IT Logo" className="hidden md:block w-18 drop-shadow-md" />
            </div>

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

      <div
        className={`
      md:hidden transition-all duration-400 ease-in-out
      ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
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
            {["Home", "About", "Events","Register","Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`
                block py-1 px-4 rounded-xl text-[#f0f4ff]
                transition-all duration-300
                hover:bg-white/10 hover:text-white
                active:bg-white/15
              `}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-3 border-t border-white/10">
       
              <img className="w-18 mx-auto opacity-80" src={IT} alt="IT Logo" />
       
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
