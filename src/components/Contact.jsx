import React from "react";
import { PhoneIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0a0a2e] to-[#0f0270] py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
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
          Have questions about the symposium, events or registration? Feel free
          to reach out to our faculty, student, or event coordinators.
        </p>

        {/* Overall Coordinator */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            Overall Coordinator
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10 max-w-5xl mx-auto">
            <div
              className="
                bg-white/5 backdrop-blur-sm border border-white/10
                rounded-2xl p-6 md:p-8 w-full md:w-96
                shadow-xl shadow-black/10 transition-all duration-300
              "
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <UserIcon className="w-6 h-6 text-indigo-300" />
                <h3 className="text-xl font-semibold text-white">
                  Mr. S. Sankar HOD / IT
                </h3>
              </div>
              <p className="text-indigo-200/90 mb-4 flex items-center gap-2.5">
                <span className="text-indigo-400 font-medium">
                  Staff Coordinator
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            Faculty Coordinators
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10 max-w-5xl mx-auto flex-wrap">
            <div
              className="
                bg-white/5 backdrop-blur-sm border border-white/10
                rounded-2xl p-6 md:p-8 w-full md:w-96 flex-1
                shadow-xl shadow-black/10 transition-all duration-300
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
              <p className="text-indigo-200/90 mb-4 flex items-center gap-2.5">
                <span className="text-indigo-400 font-medium">
                  Staff Coordinator
                </span>
              </p>
            </div>

            <div
              className="
                bg-white/5 backdrop-blur-sm border border-white/10
                rounded-2xl p-6 md:p-8 w-full md:w-96 flex-1
                shadow-xl shadow-black/10 transition-all duration-300
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
              <p className="text-indigo-200/90 mb-4 flex items-center gap-2.5">
                <span className="text-indigo-400 font-medium">
                  Staff Coordinator
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            Student Coordinators
          </h3>
          <div className="flex flex-row justify-center sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div
              className="
                bg-white/10 backdrop-blur-md border border-white/20
                rounded-xl p-5 shadow-lg shadow-black/10
                hover:shadow-indigo-500/20 transition-all duration-300
              "
            >
              <a
                href="tel:+919025572658"
                className="flex items-center justify-center gap-3 text-white hover:text-indigo-300 transition-colors text-lg font-medium"
              >
                <PhoneIcon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span>90255 72658</span>
              </a>
            </div>

            <div
              className="
                bg-white/10 backdrop-blur-md border border-white/20
                rounded-xl p-5 shadow-lg shadow-black/10
                hover:shadow-indigo-500/20 transition-all duration-300
              "
            >
              <a
                href="tel:+919123597910"
                className="flex items-center justify-center gap-3 text-white hover:text-indigo-300 transition-colors text-lg font-medium"
              >
                <PhoneIcon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span>91235 97910</span>
              </a>
            </div>
          </div>
        </div>

        {/* Event Coordinators – no names, only event + phones */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
            Event Coordinators
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Workshop */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Workshop
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+918925362927"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>89253 62927</span>
                </a>
                <a
                  href="tel:+919994175330"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>99941 75330</span>
                </a>
              </div>
            </div>

            {/* Paper Presentation*/}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Project Presentation
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919342438097"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>9342438097</span>
                </a>
                <a
                  href="tel:+918270993293"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>8270993293</span>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Paper Presentation
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+917448613141"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>74486 13141</span>
                </a>
                <a
                  href="tel:+917695929533"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>76959 29533</span>
                </a>
              </div>
            </div>

            {/* Prompt UI */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Prompt UI
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919486802292"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>94868 02292</span>
                </a>
                <a
                  href="tel:+916382613931"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>63826 13931</span>
                </a>
              </div>
            </div>

            {/* Tech Snake and Ladder */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-lg font-semibold text-indigo-200 mb-4 text-center">
                Tech Snake and Ladder
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919443171603"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>94431 71603</span>
                </a>
                <a
                  href="tel:+918825870343"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>88258 70343</span>
                </a>
              </div>
            </div>

            {/* Picowords */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Picowords
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+918680936047"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>86809 36047</span>
                </a>
                <a
                  href="tel:+919894849524"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>98948 49524</span>
                </a>
              </div>
            </div>

            {/* Mystery Puzzle */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-indigo-500/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-indigo-200 mb-4 text-center">
                Mystery Puzzle
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919852549524"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>-</span>
                </a>
                <a
                  href="tel:+919852549374"
                  className="flex items-center gap-3 text-white hover:text-indigo-300 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-indigo-400" />
                  <span>-</span>
                </a>
              </div>
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
              underline underline-offset-4 decoration-indigo-500/60
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
