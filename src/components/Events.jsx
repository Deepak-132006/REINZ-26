import React from "react";
import Frontend from "../assets/frontend.png";
import Snake_Ladder from "../assets/Snake_Ladder.webp";
import Picto_Word from "../assets/Picto_Draw.jpg";
import Mystery_puzzle from "../assets/mystery-puzzle.jpg";
import Paper from "../assets/paper-presentation.jpg"
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

        {/* ──────── 2 rows × 3 columns grid for 4 tech + 2 non-tech ──────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          
          {/* 4 Technical Events cards */}
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
            <EventCard
              title="PROJECT"
              subtitle="PRESENTATION"
              desc="Showcase your innovation and creativity by presenting your project ideas and outcomes through impactful, visual posters! ✨"
              date="Friday, February 20"
              time="10:30 AM – 12:30 PM"
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              color="purple"
              to="/events/project-presentation"
            />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <EventCard
              title="PROMPT"
              subtitle="UI"
              desc="UI events create smooth, responsive experiences by instantly reacting to user interactions with visual feedback and guidance."
              date="Friday, February 20"
              time="10:30 AM – 12:30 PM"
              image={Frontend}
              color="purple"
              to="/events/prompt-ui"
            />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <EventCard
              title="TECH SNAKE"
              subtitle="& LADDER"
              desc="A tech twist on Snake and Ladder with three rounds—debugging, output prediction, and coding challenges as teams roll to progress."
              date="Friday, February 20"
              time="10:30 AM – 12:30 PM"
              image={Snake_Ladder}
              color="purple"
              to="/events/tech-snake-and-ladder"
            />
          </div>

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
            <EventCard
              title="PAPER"
              subtitle="PRESENTATION"
              desc="A tech twist on Snake and Ladder with three rounds—debugging, output prediction, and coding challenges as teams roll to progress."
              date="Friday, February 20"
              time="10:30 AM – 12:30 PM"
              image={Paper}
              color="purple"
              to="/events/paper-presentation"
            />
          </div>

          {/* 2 Non-Technical Events cards – appear in row 2, columns 2 and 3 */}
          <div className="col-span-1 lg:col-span-1 lg:col-start-2">
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
              Non-Technical
            </h2>
            <EventCard
              title="PICTO"
              subtitle="WORDS"
              desc="A thrilling and dynamic three-level challenge combining puzzles, riddles, and timed tasks where teams solve, compete, and unlock victory."
              date="Friday, February 20"
              time="1:30 PM – 3:00 PM"
              image={Picto_Word}
              color="purple"
              to="/events/picto-words"
            />
          </div>

          <div className="col-span-1 lg:col-span-1">
            <div className="lg:mt-14"> {/* offset to align better with card below title */}
              <EventCard
                title="MYSTERY"
                subtitle="PUZZLE"
                desc="A thrilling and dynamic three-level challenge combining puzzles, riddles, and timed tasks where teams solve, compete, and unlock victory."
                date="Friday, February 20"
                time="1:30 PM – 3:00 PM"
                image={Mystery_puzzle}
                color="purple"
                to="/events/mystery-puzzle"
              />
            </div>
          </div>
        </div>

        {/* ──────── Workshop – full width below the grid ──────── */}
        <div className="mb-8  md:w-[500px]">
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

          <EventCard
            title="CLOUD"
            subtitle="COMPUTING"
            desc="Hands-on session on cloud technologies. Learn deployment, scaling & best practices. Build and deploy a real project."
            date="Friday, February 20"
            time="10:00 AM – 1:00 PM"
            image={Snake_Ladder} // ← replace with proper image later
            color="purple"
            to="/events/workshop"
          />
        </div>
      </div>
    </section>
  );
};

// EventCard remains unchanged (keeping your original version)
const EventCard = ({ title, subtitle, desc, date, time, image, color, to }) => {
  const colorStyles = {
    purple: {
      border: "rgba(126, 34, 206, 0.5)",
      shadow: "rgba(59, 7, 100, 0.4)",
      hoverShadow: "rgba(126, 34, 206, 0.6)",
      gradient: "linear-gradient(to right, #7e22ce, #4f46e5)",
      hoverGradient: "linear-gradient(to right, #9333ea, #6366f1)",
      text: "#c084fc",
      titleColor: "#22d3ee",
      subtitleColor: "#e9d5ff",
    },
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
      {/* ... rest of EventCard unchanged ... */}
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
        <Link
          to={to}
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