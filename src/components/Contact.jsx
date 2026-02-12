import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0a0a2e] to-[#0f0270] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Badge */}
        <div className="flex justify-center mb-10 md:mb-12">
          <span
            className="
              px-7 py-3 rounded-full 
              bg-white/5 backdrop-blur-sm border border-white/10
              text-indigo-100 text-base md:text-lg font-medium tracking-wide
              shadow-lg shadow-black/20
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            }}
          >
            Contact Us
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl md:text-4.5xl lg:text-5xl 
            font-semibold text-white 
            text-center mb-6 md:mb-8 
            tracking-tight
          "
        >
          Get In Touch
        </h2>

        {/* Description */}
        <p
          className="
            text-lg md:text-xl text-indigo-200/90 
            text-center max-w-3xl mx-auto mb-12 md:mb-16 
            leading-relaxed font-light
          "
        >
          Have questions about the symposium, events or registration?  
          Feel free to reach out to our faculty coordinators.
        </p>

        {/* Coordinator cards – centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10 max-w-4xl mx-auto mb-16">
          {/* Coordinator 1 */}
          <div
            className="
              bg-white/5 backdrop-blur-sm border border-white/10
              rounded-2xl p-6 md:p-8 w-full md:w-96
              shadow-xl shadow-black/10 will-change-transform translate-z-0
              transition-all duration-300
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <UserIcon className="w-6 h-6 text-indigo-300" />
              <h3 className="text-xl font-semibold text-white">
                Ms. J. Gulzar Begam
              </h3>
            </div>
            <p className="text-indigo-200/90 mb-2 flex items-center gap-2.5">
              <span className="text-indigo-400">AP / IT</span>
            </p>

            <div className="space-y-3 mt-5 text-indigo-100">
              <a
                href="tel:+918825611580"
                className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-indigo-400" />
                <span>88256 11580</span>
              </a>
              <a
                href="mailto:gulzarbegam.it@dgct.ac.in"
                className="flex items-center gap-3 hover:text-indigo-300 transition-colors break-all md:break-normal"
              >
                <EnvelopeIcon className="w-5 h-5 text-indigo-400" />
                <span>gulzarbegam.it@dgct.ac.in</span>
              </a>
            </div>
          </div>

          {/* Coordinator 2 */}
          <div
            className="
              bg-white/5 backdrop-blur-sm border border-white/10
              rounded-2xl p-6 md:p-8 w-full md:w-96
              shadow-xl shadow-black/10 will-change-transform translate-z-0
              transition-all duration-300
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <UserIcon className="w-6 h-6 text-indigo-300" />
              <h3 className="text-xl font-semibold text-white">
                Ms. G. Sathya
              </h3>
            </div>
            <p className="text-indigo-200/90 mb-2 flex items-center gap-2.5">
              <span className="text-indigo-400">AP / IT</span>
            </p>

            <div className="space-y-3 mt-5 text-indigo-100">
              <a
                href="tel:+919791575932"
                className="flex items-center gap-3 hover:text-indigo-300 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-indigo-400" />
                <span>97915 75932</span>
              </a>
              <a
                href="mailto:sathya.it@dgct.ac.in"
                className="flex items-center gap-3 hover:text-indigo-300 transition-colors break-all md:break-normal"
              >
                <EnvelopeIcon className="w-5 h-5 text-indigo-400" />
                <span>sathya.it@dgct.ac.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPinIcon className="w-7 h-7 text-indigo-300" />
            <h3 className="text-[20px] font-semibold text-white">Location</h3>
          </div>

          <a
            href="https://maps.app.goo.gl/2sqkSF22pMjZvMAu5"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block text-indigo-200 hover:text-indigo-300 
              transition-colors text-lg md:text-xl font-medium
             decoration-indigo-500/60
              hover:decoration-indigo-300
            "
          >
            Dhirajlal Gandhi College of Technology, Salem, Tamil Nadu, India
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;