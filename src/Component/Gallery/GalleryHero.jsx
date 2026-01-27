import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/image/s1.jpg";

function GalleryHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06141B]/90 via-[#0B1C26]/85 to-[#03303A]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-7"
        >
          {/* Badge */}
          <span className="inline-block px-5 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm tracking-wide">
            ARVI • Project Showcase
          </span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
          >
            Engineering Excellence <br />
            <span className="text-[#C9A24D]">
              Across Industries & Infrastructure
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto"
          >
            Explore a curated showcase of ARVI’s enterprise technology deployments,
            digital infrastructure, institutional solutions, printing ecosystems,
            and real estate development projects delivered with precision and trust.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="#gallery"
              className="px-8 py-3 rounded-xl bg-[#C9A24D] text-[#230304] font-semibold hover:bg-[#b8923f] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Our Gallery
            </a>

            <a
              href="#services"
              className="px-8 py-3 rounded-xl border border-[#C9A24D] text-[#C9A24D] font-semibold hover:bg-[#C9A24D] hover:text-[#230304] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default GalleryHero;
