import { motion } from "framer-motion";
import bgImage from "../../assets/image/hcb.jpg"; // apni image ka path
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06141B]/70 via-[#0B1C26]/80 to-[#03303A]/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">

        {/* TAG */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-5 px-5 py-1.5 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm"
        >
          Contact ARVI Solutions
        </motion.span>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight"
        >
          Let’s Build Reliable
          <span className="text-[#C9A24D]"> Technology Solutions</span>
          <br /> Together
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto"
        >
          Get in touch with ARVI Solutions to discuss enterprise technology,
          infrastructure deployment, and long-term support partnerships.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          {/* PRIMARY */}
          <button
            className="
              px-8 py-3 cursor-pointer rounded-xl font-semibold
              bg-[#C9A24D] text-[#230304]
              hover:bg-[#E0B85C]
              hover:scale-105
              transition-all duration-300
              shadow-lg shadow-[#C9A24D]/30
            "
          >
            <a href="#contact">Get in Touch</a>
          </button>

          {/* SECONDARY */}
          <button
            className="
              px-8 py-3 cursor-pointer rounded-xl font-semibold
              border border-white/40 text-white
              hover:bg-white hover:text-[#230304]
              hover:scale-105
              transition-all duration-300
            "
          >
            <Link to="/services">Explore Services</Link>
            
          </button>
        </motion.div>

      </div>
    </section>
  );
}
