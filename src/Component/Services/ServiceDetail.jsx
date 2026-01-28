// src/pages/ServiceDetail.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";

// Images
import img1 from "../../assets/image/sc5.jpg";
import img2 from "../../assets/image/sc1.jpg";
import img3 from "../../assets/image/sc1.jpg";
import img4 from "../../assets/image/sc1.jpg";
import img5 from "../../assets/image/sc1.jpg";
import img6 from "../../assets/image/sc1.jpg";

// ------------------ ARVI SERVICES ------------------
const services = [
  {
    id: 1,
    title: "CCTV & Surveillance",
    desc: "Smart security solutions with 24/7 monitoring and remote access.",
    longDesc:
      "Our CCTV & Surveillance solutions ensure round-the-clock protection with HD/IP cameras, remote monitoring, secure storage, and scalable architecture suitable for enterprises, campuses, and commercial spaces.",
    img: img1,
  },
  {
    id: 2,
    title: "Network Infrastructure",
    desc: "Secure, scalable and high-performance networking systems.",
    longDesc:
      "We design and deploy enterprise-grade LAN/WAN networks with structured cabling, firewall security, redundancy, and future-ready scalability.",
    img: img2,
  },
  {
    id: 3,
    title: "System Installation",
    desc: "Certified installation & commissioning with full compliance.",
    longDesc:
      "End-to-end system installation handled by certified engineers including testing, documentation, and smooth commissioning.",
    img: img3,
  },
  {
    id: 4,
    title: "Technical Consultancy",
    desc: "Professional site survey & technology planning services.",
    longDesc:
      "Our experts provide detailed site surveys, risk assessments, and optimized technology roadmaps aligned with your business needs.",
    img: img4,
  },
  {
    id: 5,
    title: "AMC Services",
    desc: "Preventive maintenance ensuring uptime & reliability.",
    longDesc:
      "Annual Maintenance Contracts ensure proactive monitoring, reduced downtime, priority support, and detailed service reporting.",
    img: img5,
  },
  {
    id: 6,
    title: "Project Execution",
    desc: "Multi-location execution with centralized coordination.",
    longDesc:
      "We manage large-scale and multi-location projects with standardized execution, centralized reporting, and reliable delivery.",
    img: img6,
  },
];

export default function ServiceDetail() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="bg-[#F6FBFF] text-[#34191B]">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center justify-center text-center">
        <img src={img1} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#34191B]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#40BBDF]">
            ARVI Technology Services
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Reliable, secure and future-ready technology solutions.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Core Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={service.img}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-[#40BBDF]">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  {service.desc}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="mt-6 inline-flex items-center gap-2 text-[#40BBDF] font-semibold hover:gap-4 transition"
                >
                  Learn More
                  <FaArrowRight className="animate-pulse" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-white bg-[#34191B]/70 p-2 rounded-full hover:bg-red-500 transition"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={activeService.img}
                className="h-64 w-full object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#34191B]">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {activeService.longDesc}
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-8 px-8 py-3 bg-[#40BBDF] text-[#34191B] rounded-full font-semibold hover:bg-[#34191B] hover:text-white transition"
                >
                  Contact ARVI Team
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
