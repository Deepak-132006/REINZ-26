import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const TARGET_DATE = new Date("2026-02-20T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Pad numbers with leading zero
  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
        Event starts in
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-5">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item, index) => (
          <div
            key={index}
            className={`
              backdrop-blur-xl bg-white/5 border border-white/10
              rounded-xl shadow-xl shadow-black/30
              w-18 h-20 md:w-28 md:h-32
              flex flex-col items-center justify-center
              text-white transition-all duration-300
              hover:scale-105 hover:bg-white/10
            `}
          >
            <div className="text-3xl md:text-5xl font-bold tracking-tight">
              {pad(item.value)}
            </div>
            <div className="text-[10px] md:text-sm font-medium text-white/70 mt-1 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;