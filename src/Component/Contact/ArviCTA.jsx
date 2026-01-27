import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

/* IMAGES */
import bg from "../../assets/image/hcb.jpg";
import sideImg from "../../assets/image/hc.png";

export default function ArviCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#230304]/95 via-[#320609]/90 to-[#03303A]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm">
              Let’s Work Together
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Build
              <span className="text-[#C9A24D]"> Enterprise-Grade Solutions</span>?
            </h2>

            <p className="mt-4 text-white/85 max-w-lg">
              Partner with ARVI to deliver scalable technology, digital
              infrastructure, institutional systems, and smart development
              solutions tailored for growth and long-term success.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-[#C9A24D] text-[#230304] font-semibold hover:bg-[#e0b95c] transition"
              >
                Contact Us
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white hover:text-[#230304] transition"
              >
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#C9A24D]" />
                +91‑90591 17459
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-[#C9A24D]" />
                arvisolutions899@gmail.com
              </span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden  ">
              <img
                src={sideImg}
                alt="ARVI CTA"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-[#C9A24D]/20 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
