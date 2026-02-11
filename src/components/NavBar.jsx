import React, { useState } from "react";
import Logo from "../assets/dgctlogo2-Photoroom.png";
import IT from "../assets/It.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6">
      <div
        className={`
          mx-auto mt-4 max-w-6xl
          backdrop-blur-xl bg-white/5 border border-white/10
          rounded-2xl shadow-2xl shadow-black/30
          transition-all duration-300
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 md:py-3">

          <div className="flex items-center gap-3">
            <div className="w-12 md:w-16">
              <img src={Logo} alt="Logo" className="drop-shadow-md" />
            </div>
          </div>


          <ul className="hidden md:flex items-center gap-10 text-base font-medium tracking-wide">
            {["Home", "About", "Events", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`
                    relative px-2 py-1.5 text-[#f0f4ff] transition-all duration-300
                    hover:text-white   text-[20px]
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


          <div className="flex items-center gap-6">
            <div className="hidden md:block w-14 md:w-20">
              <img src={IT} alt="IT Logo" className="w-full drop-shadow-md" />
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
          md:hidden overflow-hidden transition-all duration-400 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div
          className={`
            mx-auto w-[92%] max-w-md
            backdrop-blur-xl bg-white/5 border border-white/10
            rounded-2xl shadow-2xl shadow-black/30
            py-6 px-6 text-center
          `}
        >
          <ul className="flex flex-col gap-5 text-lg font-medium">
            {["Home", "About", "Events", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
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

          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="w-20 mx-auto opacity-80">
              <img src={IT} alt="IT Logo" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;