import { motion } from "framer-motion";
import { FaLaptopCode, FaBuilding, FaPrint, FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArivAbout() {
  return (
    <section className="relative py-20 bg-[#36080A] text-white overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#230304]/40 via-transparent to-[#0D4A6B]/40" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D]/90 text-[#230304] text-sm font-semibold">
            About ARVI
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Building Enterprise Technology &  
            <span className="text-[#C9A24D]"> Smart Infrastructure</span>
          </h2>

          <p className="mt-5 text-white/85 leading-relaxed max-w-xl">
           Headquartered in Uppal, Hyderabad, ARVI Solutions offers comprehensive, end‑to‑end services spanning design, installation, configuration, documentation, and lifecycle support. The team comprises qualified and trained technical professionals with hands‑on expertise in CCTV systems, networking technologies, and field operations.[23]
The organization places equal emphasis on technology and process, ensuring that every deployment is backed by proper documentation, clear communication, and measurable service levels aligned with client requirements and budgets.[23]

          </p>

          <div className="mt-7 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-[#0D4A6B] hover:bg-[#09364F] transition font-medium  hover:text-[#320609] hover:bg-white cursor-pointer">
              <Link to="/about" className="">Learn More</Link>
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white hover:text-[#230304] transition cursor-pointer">
              <Link to="/contact" className="">Contact Us</Link>
            </button>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">

          {[
            { icon: FaLaptopCode, title: "Enterprise IT", text: "Scalable technology & system integration." },
            { icon: FaBuilding, title: "Digital Setup", text: "Complete institutional digital infrastructure." },
            { icon: FaPrint, title: "Printing Solutions", text: "All types of professional printing services." },
            { icon: FaCity, title: "Real Estate", text: "Smart real estate & infrastructure projects." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-[#C9A24D]/60"
            >
              <item.icon className="text-3xl text-[#C9A24D]" />
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-white/75">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
