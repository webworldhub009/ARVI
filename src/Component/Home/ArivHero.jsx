import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaLaptopCode,
  FaPrint,
  FaSchool,
  FaCity,
} from "react-icons/fa";

/* =====================
   IMPORT IMAGES
===================== */
import bg1 from "../../assets/image/h1.jpg";
import bg2 from "../../assets/image/h2.jpg";
import bg3 from "../../assets/image/h3.jpg";

const images = [bg1, bg2, bg3];

/* =====================
   TYPING TEXT
===================== */
const headings = [
  "Enterprise Technology Provider",
  "Digital Solutions for Growth",
  "Building Smart Infrastructure",
];

/* =====================
   COUNTERS
===================== */
const counters = [
  { icon: FaBuilding, value: 250, label: "Enterprise Projects" },
  { icon: FaLaptopCode, value: 15, label: "Technology Solutions" },
  { icon: FaPrint, value: 100, label: "Digital & Printing Setups" },
  { icon: FaSchool, value: 80, label: "Institutions Served" },
  { icon: FaCity, value: 30, label: "Real Estate Projects" },
];

export default function ArivHero() {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [countValues, setCountValues] = useState(counters.map(() => 0));

  /* Background slider */
  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % images.length),
      6000
    );
    return () => clearInterval(i);
  }, []);

  /* Typing animation */
  useEffect(() => {
    let c = 0;
    setDisplayText("");
    const t = setInterval(() => {
      setDisplayText(headings[textIndex].slice(0, c));
      c++;
      if (c > headings[textIndex].length) {
        clearInterval(t);
        setTimeout(
          () => setTextIndex((p) => (p + 1) % headings.length),
          1800
        );
      }
    }, 65);
    return () => clearInterval(t);
  }, [textIndex]);

  /* Counters */
  useEffect(() => {
    counters.forEach((counter, i) => {
      let start = 0;
      const step = Math.ceil(counter.value / 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= counter.value) {
          start = counter.value;
          clearInterval(timer);
        }
        setCountValues((prev) => {
          const arr = [...prev];
          arr[i] = start;
          return arr;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.25, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#320609]/30 via-[#320609]/70 to-[#03303A]/90" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center text-white">

        {/* Badge */}
        <span className="mb-5 px-4 py-1 rounded-full bg-[#C9A24D] text-[#320609] font-semibold text-sm">
          ARVI • Enterprise Solutions
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold min-h-[70px]">
          {displayText}
          <span className="text-[#C9A24D]">|</span>
        </h1>

        {/* Paragraph */}
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
          ARVI delivers enterprise-grade technology, digital infrastructure,
          institutional setups, printing solutions, and real estate development
          with precision, scalability, and trust.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-3 rounded-lg bg-[#03303A] hover:bg-[#02242B] transition font-semibold cursor-pointer ">
            Explore Services
          </button>
          <button className="px-8 py-3 rounded-lg border border-white/40 hover:bg-white hover:text-[#320609] transition font-semibold cursor-pointer">
            Contact ARVI
          </button>
        </div>

        {/* ================= COUNTERS PANEL ================= */}
        <div className="mt-14 w-full max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            {counters.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#03303A]/70 text-[#C9A24D] text-3xl mb-3">
                  <Icon />
                </div>

                <h3 className="text-3xl font-extrabold">
                  {countValues[i]}+
                </h3>

                <p className="text-sm text-white/80 mt-1">
                  {label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
