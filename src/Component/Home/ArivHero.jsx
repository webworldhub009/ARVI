import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaLaptopCode,
  FaPrint,
  FaSchool,
  FaCity,
} from "react-icons/fa";

/* =====================
   IMAGES
===================== */
import bg1 from "../../assets/image/h1.jpg";
import bg2 from "../../assets/image/h2.jpg";
import bg3 from "../../assets/image/h3.jpg";
import { Link } from "react-router-dom";

const images = [bg1, bg2, bg3];

/* =====================
   TEXT
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
  const sectionRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [countValues, setCountValues] = useState(counters.map(() => 0));
  const [active, setActive] = useState(false);

  /* =====================
     OBSERVER (VISIBLE)
  ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* =====================
     BACKGROUND SLIDER
  ===================== */
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % images.length),
      6000
    );
    return () => clearInterval(interval);
  }, [active]);

  /* =====================
     TYPING EFFECT
  ===================== */
  useEffect(() => {
    if (!active) return;

    let char = 0;
    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(headings[textIndex].slice(0, char));
      char++;
      if (char > headings[textIndex].length) {
        clearInterval(typing);
        setTimeout(
          () => setTextIndex((p) => (p + 1) % headings.length),
          1800
        );
      }
    }, 65);

    return () => clearInterval(typing);
  }, [textIndex, active]);

  /* =====================
     COUNTERS
  ===================== */
  useEffect(() => {
    if (!active) return;

    setCountValues(counters.map(() => 0));

    counters.forEach((counter, i) => {
      let start = 0;
      const step = Math.ceil(counter.value / 50);

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
      }, 40);
    });
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] md:h-[92vh] overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
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

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#320609]/40 via-[#320609]/70 to-[#03303A]/90" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-[100vh] md:h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 text-center text-white">

        {/* BADGE */}
        <span className="mb-4 px-4 py-1 rounded-full bg-[#C9A24D] text-[#320609] font-semibold text-xs sm:text-sm">
          ARVI • Enterprise Solutions
        </span>

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold min-h-[48px] sm:min-h-[56px] md:min-h-[60px]">
          {displayText}
          <span className="text-[#C9A24D]">|</span>
        </h1>

        {/* PARAGRAPH */}
        <p className="mt-3  text-sm sm:text-base md:text-lg text-white/90">
          ARVI Solutions is a professionally managed, customer‑focused organization specializing in CCTV surveillance, network infrastructure, and technical support services. Since its inception in 2018, the company has developed a strong track record of delivering reliable, value‑driven solutions to government departments, corporates, and institutions across Andhra Pradesh, Telangana, and Karnataka.
        </p>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
         <Link to="/services">
          <button className="px-7 py-3 cursor-pointer rounded-lg bg-[#03303A] hover:bg-[#02242B] transition font-semibold w-full sm:w-auto">
            Explore Services
          </button></Link>
          <Link to="/contact">
            <button className="px-7 py-3 cursor-pointer rounded-lg border border-white/40 hover:bg-white hover:text-[#320609] transition font-semibold w-full sm:w-auto">
              Contact ARVI
            </button>
          </Link>
        </div>

        {/* ================= COUNTERS ================= */}
        <div className="mt-10 sm:mt-12 w-full max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-7">
            {counters.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-[#03303A]/70 text-[#C9A24D] text-2xl sm:text-3xl mb-2 sm:mb-3">
                  <Icon />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                  {countValues[i]}+
                </h3>

                <p className="text-xs sm:text-sm text-white/80 mt-1">
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
