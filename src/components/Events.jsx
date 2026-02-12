import React from "react";
import Frontend from "../assets/frontend.png";
import Snake_Ladder from "../assets/Snake_Ladder.webp";
import Word_draw from "../assets/word_draw.png"
import Mystery_puzzle from "../assets/mystery-puzzle.jpg"
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


        <h2 className="
          text-3xl md:text-4xl lg:text-5xl 
          font-extrabold text-white 
          tracking-tight 
          mb-10 mt-16 
          relative inline-block
          after:content-[''] after:absolute after:bottom-[-12px] after:left-0 
          after:w-24 after:h-1.5 after:rounded-full
          after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600
          drop-shadow-[0_4px_12px_rgba(99,102,241,0.4)]
        ">
          Technical Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          <EventCard
            title="PROJECT"
            subtitle="PRESENTATION"
            desc="Reverse engineering challenge.<br>No problem statement — only output & conditions.<br>Decode the logic behind the result."
            date="Saturday, March 29"
            time="11:30 AM – 1:00 PM"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            color="purple"
            to="/events/project-presentation"
          />

          <EventCard
            title="PROMPT"
            subtitle="UI"
            desc="Showcase your best projects.<br>Impress judges & audience.<br>Present idea, demo & real-world impact, real-world impact."
            date="Saturday, March 29"
            time="2:00 PM – 4:00 PM"
            image={Frontend}
            color="purple"
            to="/events/prompt-ui"
          />

          <EventCard
            title="TECH SNAKE"
            subtitle="& LADDER"
            desc="Fun technical quiz in snake & ladder formatAnswer questions to climb ladders or slide down.<br>Test your knowledge!"
            date="Saturday, March 29"
            time="10:00 AM – 12:30 PM"
            image={Snake_Ladder}
            color="purple"
            to="/events/tech-snake-and-ladder"
          />
        </div>

        {/* ──────────────────────────────────────────────── */}
        {/* Workshop + Non-Technical Events – shared row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Workshop – first column */}
          <div>
            {/* Workshop */}
            <h2 className="
              text-3xl md:text-4xl lg:text-5xl 
              font-extrabold text-white 
              tracking-tight 
              mb-10 
              relative inline-block
              after:content-[''] after:absolute after:bottom-[-12px] after:left-0 
              after:w-20 after:h-1.5 after:rounded-full
              after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600
              drop-shadow-[0_4px_12px_rgba(34,211,238,0.35)]
            ">
              Workshop
            </h2>

            <EventCard
              title="CLOUD"
              subtitle="COMPUTING"
              desc="Hands-on session on cloud technologies.<br>Learn deployment, scaling & best practices.<br>Build and deploy a real project."
              date="Saturday, March 29"
              time="10:00 AM – 1:00 PM"
              image={Snake_Ladder} // ← replace with proper image later
              color="purple"
              to="/events/workshop"
            />
          </div>

          {/* Non-Technical Events – second and third columns */}
          <div className="md:col-span-2">
            <h2 className="
              text-3xl md:text-4xl lg:text-5xl 
              font-extrabold text-white 
              tracking-tight 
              mb-10 
              relative inline-block
              after:content-[''] after:absolute after:bottom-[-12px] after:left-0 
              after:w-40 after:h-1.5 after:rounded-full
              after:bg-gradient-to-r after:from-pink-500 after:to-rose-600
              drop-shadow-[0_4px_12px_rgba(244,63,94,0.35)]
            ">
              Non-Technical Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <EventCard
                title="PICTO"
                subtitle="WORDS"
                desc="Creative combination of words & quick sketches.<br>Fast rounds, fun challenges.<br>Laughter guaranteed! <br>Laughter guaranteed!"
                date="Saturday, March 29"
                time="11:30 AM – 1:00 PM"
                image={Word_draw}
                color="purple"
                to="/events/picto-words"
              />

              <EventCard
                title="MYSTERY"
                subtitle="PUZZLE"
                desc="Solve exciting mystery cases.<br>Find clues, crack codes, beat the clock.<br>Team or solo challenge!<br>Laughter guaranteed!"
                date="Saturday, March 29"
                time="2:30 PM – 4:00 PM"
                image={Mystery_puzzle}
                color="purple"
                to="/events/mystery-puzzle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ title, subtitle, desc, date, time, image, color,to }) => {
  const colorStyles = {
    purple: {
      border: "rgba(126, 34, 206, 0.5)",          // purple-700 / 50%
      shadow: "rgba(59, 7, 100, 0.4)",            // purple-950 / 40%
      hoverShadow: "rgba(126, 34, 206, 0.6)",     // purple-700 / 60%
      gradient: "linear-gradient(to right, #7e22ce, #4f46e5)",           // purple-700 to indigo-700
      hoverGradient: "linear-gradient(to right, #9333ea, #6366f1)",      // purple-600 to indigo-600
      text: "#c084fc",                            // purple-400
      titleColor: "#22d3ee",                      // cyan-400
      subtitleColor: "#e9d5ff",                   // purple-200
    }
  };

  const c = colorStyles[color] || colorStyles.purple;

  return (
    <div
      className="
        bg-gray-900/90 rounded-2xl 
        overflow-hidden shadow-2xl
        hover:-translate-y-4
        transition-all duration-300 ease-out
        group
      "
      style={{
        border: `1px solid ${c.border}`,
        boxShadow: `0 25px 50px -12px ${c.shadow}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 25px 50px -12px ${c.hoverShadow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 25px 50px -12px ${c.shadow}`;
      }}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover 
            brightness-90 contrast-110
            scale-105 
            group-hover:scale-110
            transition-transform duration-700 ease-out
          "
          loading="lazy"
        />
        {/* Softer gradient overlay – easier to read text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h2
            className="
              text-4xl md:text-5xl font-black 
              tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
              group-hover:brightness-125
              transition-all duration-300
            "
            style={{ color: c.titleColor }}
          >
            {title}
          </h2>
          <p
            className="
              text-xl md:text-2xl font-bold 
              mt-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
            "
            style={{ color: c.subtitleColor }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p
          className="text-gray-200 text-base md:text-lg leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: desc }}
        />

        <div className="space-y-4 text-base md:text-lg">
          <div className="flex items-center text-gray-300">
            <span style={{ color: c.text }} className="mr-3 text-xl">📅</span>
            {date}
          </div>
          <div className="flex items-center text-gray-300">
            <span style={{ color: c.text }} className="mr-3 text-xl">🕙</span>
            {time}
          </div>
        </div>

       

<Link to={to}
          className={`
            mt-8 w-full py-4
            text-white font-semibold text-lg rounded-xl
            transition-all duration-300
            hover:scale-[1.02]
            active:scale-[0.98]
            block text-center
          `}
          style={{
            background: c.gradient,
            boxShadow: `0 10px 15px -3px ${c.shadow}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = c.hoverGradient;
            e.currentTarget.style.boxShadow = `0 20px 25px -5px ${c.hoverShadow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = c.gradient;
            e.currentTarget.style.boxShadow = `0 10px 15px -3px ${c.shadow}`;
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default Events;