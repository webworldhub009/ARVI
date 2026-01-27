import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVisionARVI() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1C26] via-[#06141B] to-[#0E2A36] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Mission & <span className="text-[#C9A24D]">Vision</span>
          </h2>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-24"
        >
          {/* ICON SIDE */}
          <div className="flex justify-center md:justify-start">
            <div className="
              w-36 h-36 rounded-full
              flex items-center justify-center
              bg-gradient-to-br from-[#C9A24D] to-[#9C7A2F]
              text-[#230304] text-5xl
              shadow-xl
              hover:scale-105 transition
            ">
              <FaBullseye />
            </div>
          </div>

          {/* CONTENT */}
          <div className="
            bg-white/5 backdrop-blur-xl
            border border-white/15
            rounded-2xl p-8
            hover:border-[#C9A24D]/60
            transition
          ">
            <h3 className="text-2xl font-semibold mb-4 text-[#C9A24D]">
              Our Mission
            </h3>
            <p className="text-white/85 leading-relaxed text-base md:text-lg">
              To deliver reliable, scalable, and future-ready technology and
              infrastructure solutions by combining domain expertise,
              disciplined execution, and client-focused service delivery that
              drives long-term value.
            </p>
          </div>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* CONTENT */}
          <div className="
            order-2 md:order-1
            bg-white/5 backdrop-blur-xl
            border border-white/15
            rounded-2xl p-8
            hover:border-[#C9A24D]/60
            transition
          ">
            <h3 className="text-2xl font-semibold mb-4 text-[#C9A24D]">
              Our Vision
            </h3>
            <p className="text-white/85 leading-relaxed text-base md:text-lg">
              To become a trusted enterprise partner known for transforming
              digital, institutional, and infrastructure environments through
              innovation, process excellence, and regional execution strength.
            </p>
          </div>

          {/* ICON SIDE */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="
              w-36 h-36 rounded-full
              flex items-center justify-center
              bg-gradient-to-br from-[#03303A] to-[#0E5C6B]
              text-[#C9A24D] text-5xl
              shadow-xl
              hover:scale-105 transition
            ">
              <FaEye />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
