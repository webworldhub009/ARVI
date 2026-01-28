import { motion } from "framer-motion";
import bg from "../../assets/image/abg.jpg"; // apni image ka path yahan do
import { Link } from "react-router-dom";

export default function AboutHeroARVI() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06141B]/90 via-[#0E2A36]/70 to-[#06141B]/90" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm">
              About ARVI
            </span>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
              Powering Smart  
              <span className="text-[#C9A24D]"> Digital & Infrastructure</span>  
              Solutions
            </h1>

            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
              ARVI delivers enterprise-grade technology, digital setup solutions,
              infrastructure services, and execution excellence with a strong
              focus on reliability, scalability, and innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="
                px-7 py-3 rounded-lg font-semibold
                bg-[#C9A24D] text-[#230304]
                hover:bg-white
                transition duration-300
              ">
               <Link to="/services" className="">Explore Services</Link>
              </button>

              <button className="
                px-7 py-3 rounded-lg font-semibold
                border border-[#C9A24D] text-[#C9A24D]
                hover:bg-[#C9A24D] hover:text-[#230304]
                transition duration-300
              ">
                <Link to="/contact" className="">Contact Us</Link>

              </button>
            </div>
          </motion.div>

          {/* RIGHT GLASS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              hidden md:block
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-2xl p-8
              hover:border-[#C9A24D]
              transition duration-500
            "
          >
            <h3 className="text-xl font-semibold text-[#C9A24D] mb-4">
              Why Choose ARVI?
            </h3>

            <ul className="space-y-3 text-white/85">
              <li>✔ Enterprise Technology Integration</li>
              <li>✔ Digital & Web Solutions</li>
              <li>✔ Printing & Infrastructure Services</li>
              <li>✔ Institutional & Commercial Projects</li>
              <li>✔ Pan-Regional Execution Capability</li>
            </ul>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
