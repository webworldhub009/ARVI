import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaHandsHelping,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

const commitments = [
  {
    icon: FaCheckCircle,
    title: "Quality-Assured Delivery",
    desc: "Delivering technically sound, reliable, and quality-assured solutions across all service verticals.",
  },
  {
    icon: FaShieldAlt,
    title: "Ethics & Transparency",
    desc: "Upholding professional ethics, transparency, compliance, and accountability at every stage.",
  },
  {
    icon: FaHandsHelping,
    title: "Responsible Support",
    desc: "Providing prompt, responsive, and responsible support throughout the engagement lifecycle.",
  },
  {
    icon: FaClock,
    title: "Timely Execution",
    desc: "Ensuring controlled execution, adherence to timelines, and disciplined service delivery.",
  },
  {
    icon: FaHandshake,
    title: "Long-Term Relationships",
    desc: "Building trust-based, long-term relationships with clients, partners, and stakeholders.",
  },
];

export default function CommitmentToExcellence() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#06141B] via-[#0B1C26] to-[#0E2A36] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Commitment to <span className="text-[#C9A24D]">Excellence</span>
          </h2>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            At ARVI Solutions, excellence is not a promise — it is a disciplined
            practice embedded into every project and partnership.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/15
                hover:border-[#C9A24D]/60
                transition overflow-hidden"
            >
              {/* ICON */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl
                bg-[#03303A]/80 text-[#C9A24D] text-3xl
                group-hover:scale-110 transition">
                <item.icon />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>

              {/* GLOW */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-br from-[#C9A24D]/10 to-transparent
                opacity-0 group-hover:opacity-100
                transition pointer-events-none
              " />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
