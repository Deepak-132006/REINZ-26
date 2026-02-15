import React from "react";
import IT from "../assets/It.png";
import Poster from "../assets/poster.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0e0643]  py-16 md:py-20 lg:py-24  px-5 md:px-8 lg:px-12 text-white flex flex-col items-center"
    >

      <div className="mb-10">
        <div
          className="
            px-6 py-3 rounded-full 
            bg-white/5 border border-white/20
            text-sm sm:text-base font-medium text-purple-200
            shadow-lg shadow-purple-900/30
          "
        >
          About Department
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-16 lg:mb-20">

          <div className="lg:w-5/12">
            <div className="glass-card p-7 md:p-9 lg:p-10 rounded-2xl flex flex-col items-center gap-7 text-center">
              <img
                src={IT}
                alt="IT Department Logo"
                className="w-20 md:w-24 lg:w-28 h-auto object-contain drop-shadow-lg"
                loading="lazy"
              />

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
                  About Department
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-200">
                  A four-year undergraduate degree (B.Tech) in Information Technology is offered by the Department of Information Technology, established in the year 2022. The Department offers a broad curriculum including: Database Management, Software Engineering, Management of Information Systems, Data Mining, Computer Graphics, Advanced Internet Technology, Computer Networks, Machine Learning, Data Science, Cyber Security, Operating Systems, Data Structures and Algorithms — along with other courses in collaboration with different departments.
                </p>
              </div>
            </div>
          </div>


          <div className="lg:w-7/12 flex flex-col gap-8 lg:gap-10">
            <div className="glass-card p-7 md:p-9 lg:p-10 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
                Vision
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-200 italic border-l-4 border-purple-500/60 pl-5 py-1">
                To create intellectual IT professional leaders equipped with original thought, ground-breaking concepts and hands-on experience to tackle the worldwide challenges of contemporary Information Technology.
              </p>
            </div>

            <div className="glass-card p-7 md:p-9 lg:p-10 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
                Mission
              </h2>
              <ul className="space-y-5 text-gray-200 text-base md:text-lg">
                {[
                  "To provide dynamic learning environment for students and faculty for continuous learning to investigate, apply and transfer knowledge.",
                  "To facilitate the latest tools and technologies to promote research and establish computing center of excellence.",
                  "To develop highly analytical and qualified IT engineers by imparting technical training activities through industry institute interaction.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start">

          <div className="lg:w-1/2 space-y-7 text-center lg:text-left">
            <h2
              className="
                text-4xl sm:text-5xl font-bold tracking-tight
                bg-gradient-to-r from-purple-300 via-indigo-400 to-purple-400
                bg-clip-text text-transparent
              "
            >
              About the Event
            </h2>

            <div className="space-y-5 md:space-y-6 text-gray-200 text-base md:text-lg">
              <p>
                The Department of Information Technology at <strong>Dhirajlal Gandhi College of Technology</strong>, in association with Elite Association, is proud to host <strong>Reinz 2025</strong>, its annual National Level Technical Symposium.
              </p>
              <p>
                This premier event brings together students, researchers, and industry professionals to explore cutting-edge technologies and foster collaboration in the field of information technology.
              </p>
              <p>
                Reinz 2025 features a diverse range of events, including technical, non-technical, and workshop sessions. Participants will have the chance to demonstrate their skills, learn from industry experts, and connect with peers from various institutions.
              </p>
              <p className="font-medium">
                This year's theme focuses on{" "}
                <span className="text-purple-300">emerging technologies in AI</span>.
                Join us for an immersive learning experience that will enhance your knowledge and open doors to new opportunities in the IT field.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className="
                relative w-full max-w-[480px] lg:max-w-[520px] mt-20
                rounded-2xl overflow-hidden
                shadow-2xl shadow-purple-950/40
                border border-white/10
                transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-900/60
              "
            >
              <img
                src={Poster}
                alt="Reinz 2025 Event Poster"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;