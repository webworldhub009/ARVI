import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../../assets/image/s1.jpg"; // change if needed

export default function ServicesHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06141B]/80 via-[#0E2A36]/85 to-[#03303A]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5 px-5 py-1.5 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm tracking-wide"
        >
          ARVI Services
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Reliable <span className="text-[#C9A24D]">Technology</span> <br />
          & Infrastructure Services
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed"
        >
          ARVI delivers enterprise-grade solutions across CCTV, networking,
          digital infrastructure, institutional projects, and multi-site
          deployments — with a strong focus on quality, timelines, and trust.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services-list"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-[#C9A24D] text-[#230304] font-semibold 
                       hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Services <FaArrowRight />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl border border-white/40 text-white font-semibold 
                       hover:bg-white hover:text-[#230304] transition-all duration-300 transform hover:scale-105"
          >
            Contact ARVI <FaPhoneAlt />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
