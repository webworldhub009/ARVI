import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import serviceImg from "../../assets/image/s1.jpg"; 
import { Link } from "react-router-dom";
// 👆 apni service image yahan daal dena

export default function ArivServices() {
  return (
    <section className="relative py-24 bg-[#0B1C26] text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#230304]/40 via-transparent to-[#0D4A6B]/40" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={serviceImg}
            alt="ARIV Services"
            className="rounded-2xl shadow-2xl border border-white/10"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Complete Solutions for  
            <span className="text-[#C9A24D]"> Digital & Enterprise Growth</span>
          </h2>

          <p className="mt-5 text-white/85 max-w-xl leading-relaxed">
            ARVI delivers enterprise technology integration, digital setup
            solutions, website design, professional printing services,
            institutional infrastructure, and real estate projects —
            all under one trusted ecosystem.
          </p>

          {/* LEARN MORE BUTTON */}
          <div className="mt-10">
            <a
              href="/services"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-[#230304] overflow-hidden"
            >
              {/* water flow animation */}
              <span className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-[#C9A24D] via-[#0D4A6B] to-[#C9A24D] animate-waterFlow"></span>

              {/* overlay */}
              <span className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></span>

              {/* text */}
              <span className="relative z-10 flex items-center gap-3">
                <Link to="/services" className="text-[#230304]">Learn More Services</Link>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Tailwind animation style */}
      <style>
        {`
          @keyframes waterFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-waterFlow {
            animation: waterFlow 4s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
}
