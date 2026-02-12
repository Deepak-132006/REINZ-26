import React from "react";

const Register = () => {
  return (
    <section
      id="register"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#070229]"
      >
        {/* style={{
          background: "linear-gradient(135deg, #0a0a2e 0%, #0f0270 100%)",
        }} */}

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="flex justify-center mb-10 md:mb-12">
          <div
            className="
              px-7 py-3 rounded-full 
              backdrop-blur-xl bg-white/5 border border-white/10
              text-indigo-100 text-base md:text-lg font-medium tracking-wide
              shadow-xl shadow-black/40
            "
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            }}
          >
            Registration Open
          </div>
        </div>

        <h2
          className="
            text-3xl sm:text-4xl md:text-4.5xl lg:text-5xl 
            font-semibold text-white 
            text-center mb-5 md:mb-7 
            tracking-tight leading-tight
          "
        >
          Join the Symposium
        </h2>

        {/* Description */}
        <p className="
          text-lg md:text-xl text-indigo-200/90 
          text-center max-w-3xl mx-auto mb-10 md:mb-14 
          leading-relaxed font-light
        ">
          Secure your participation in our technical events, hands-on workshops,  
          and engaging non-technical activities. Limited seats — register today.
        </p>

        {/* Glassmorphic + silver shine CTA button */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUq-q1v-33gQI9__gTAAamk20FvwGnLGpZk2YgB9omVjKL1g/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative inline-flex items-center justify-center gap-3
              px-10 py-5 md:px-14 md:py-6
              bg-white/5 backdrop-blur-xl border border-white/15
              text-white text-lg md:text-xl font-semibold
              rounded-2xl overflow-hidden
              shadow-2xl shadow-black/30
              transition-all duration-400 ease-out
              hover:border-white/30 hover:shadow-[0_0_40px_rgba(165,180,252,0.25)]
              hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400/50
            "
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            }}
          >
            {/* Silver shine overlay on hover */}
            <span
              className="
                absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-700 ease-out
              "
            />

            <span className="relative z-10">Register Now</span>
            <span className="relative z-10 text-2xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;