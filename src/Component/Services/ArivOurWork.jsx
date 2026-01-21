import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaLaptopCode,
  FaPrint,
  FaBuilding,
  FaTimes,
  FaCheckCircle
} from "react-icons/fa";

/* ===== IMAGES ===== */
import w1 from "../../assets/image/w1.jpg";
import w2 from "../../assets/image/w2.jpg";
import w3 from "../../assets/image/w3.jpg";
import w4 from "../../assets/image/w4.jpg";

/* ===== WORK DATA ===== */
const works = [
  {
    image: w1,
    icon: FaLaptopCode,
    title: "Enterprise IT Setup",
    desc: "Complete enterprise technology and system integration projects.",
    details: [
      "Network & Server Infrastructure",
      "Enterprise Software Deployment",
      "Security & Data Protection",
    ],
  },
  {
    image: w2,
    icon: FaPrint,
    title: "Digital & Printing Solutions",
    desc: "Large-scale professional digital and printing infrastructure.",
    details: [
      "High-End Printing Setup",
      "Digital Workflow Automation",
      "Maintenance & Support",
    ],
  },
  {
    image: w3,
    icon: FaBuilding,
    title: "Institutional Infrastructure",
    desc: "Smart infrastructure projects for schools and institutions.",
    details: [
      "Smart Classrooms",
      "Furniture & Lab Setup",
      "Complete Turnkey Solutions",
    ],
  },
  {
    image: w4,
    icon: FaBuilding,
    title: "Real Estate Development",
    desc: "Modern real estate planning and execution projects.",
    details: [
      "Commercial Planning",
      "Project Execution",
      "Quality & Compliance",
    ],
  },
];

export default function ArivOurWork() {
  const [activeWork, setActiveWork] = useState(null);

  return (
    <>
      {/* ================= WORK SECTION ================= */}
      <section className="py-24 bg-[#0B1C26] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] text-sm font-semibold">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Projects That Define
              <span className="text-[#C9A24D]"> ARVI Excellence</span>
            </h2>
            <p className="mt-4 text-white/80">
              A glimpse of our enterprise, digital and infrastructure success.
            </p>
          </div>

          {/* WORK GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((work, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A24D]/50"
              >
                {/* IMAGE */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#230304]/90 via-[#230304]/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <work.icon className="text-[#C9A24D] text-2xl" />
                    <h3 className="text-lg font-semibold">
                      {work.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/85 mb-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    {work.desc}
                  </p>

                  <button
                    onClick={() => setActiveWork(work)}
                    className="inline-flex items-center cursor-pointer gap-2 text-[#C9A24D] font-semibold"
                  >
                    View Project
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0B1C26] max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveWork(null)}
                className="absolute top-4 right-4 cursor-pointer text-[#230304] hover:text-[#C9A24D]"
              >
                <FaTimes size={22} />
              </button>

              {/* IMAGE */}
              <img
                src={activeWork.image}
                alt={activeWork.title}
                className="w-full h-64 object-cover"
              />

              {/* CONTENT */}
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  {activeWork.title}
                </h3>

                <p className="text-white/80 mb-5">
                  {activeWork.desc}
                </p>

                <ul className="space-y-3">
                  {activeWork.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#C9A24D]" />
                      <span className="text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
