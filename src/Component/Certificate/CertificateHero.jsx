import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/image/h1.jpg";
import { Link } from "react-router-dom";

function CertificateHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34191B]/95 via-[#34191B]/85 to-[#0F172A]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight"
        >
          ARVI <span className="text-[#40BBDF]">Certifications & Compliance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mx-auto"
        >
          At <span className="text-[#40BBDF] font-semibold">ARVI Technologies</span>, 
          our certifications demonstrate our commitment to{" "}
          <span className="font-semibold">
            quality, safety, regulatory compliance, and international standards
          </span>.  
          Every project we deliver is backed by verified processes, certified
          systems, and trusted industry practices.
        </motion.p>

        {/* Stats / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#40BBDF]">ISO</h3>
            <p className="mt-2 text-white/80 text-sm">
              Certified Quality & Process Standards
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#40BBDF]">100%</h3>
            <p className="mt-2 text-white/80 text-sm">
              Compliance Driven Execution
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-[#40BBDF]">Trusted</h3>
            <p className="mt-2 text-white/80 text-sm">
              Enterprise & Institutional Clients
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#certificates"
            className="px-8 py-3 rounded-full bg-[#40BBDF] text-[#34191B] font-semibold text-lg
                       hover:bg-white transition-all duration-300 shadow-lg hover:scale-105"
          >
            View Certifications
          </a>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full border-2 border-[#40BBDF] text-white font-semibold text-lg
                       hover:bg-[#40BBDF] hover:text-[#34191B] transition-all duration-300 shadow-lg hover:scale-105"
          >
            Contact ARVI Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CertificateHero;
