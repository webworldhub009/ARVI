import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

/* ===== IMAGES ===== */
import s1 from "../../assets/image/sc1.jpg";
import s2 from "../../assets/image/h2.jpg";            
import s3 from "../../assets/image/sc3.jpg";
import s4 from "../../assets/image/sc4.jpg";
import s5 from "../../assets/image/sc5.jpg";
import s6 from "../../assets/image/sc6.jpg";

/* ===== SERVICES DATA ===== */
const services = [
  {
    image: s1,
    title: "Enterprise Technology Integration",
    desc: "End-to-end enterprise IT solutions including system integration, automation, and scalable infrastructure."
  },
  {
    image: s2,
    title: "Digital Setup Solutions",
    desc: "Complete digital transformation solutions for businesses, offices, and institutions."
  },
  {
    image: s3,
    title: "Website Design & Development",
    desc: "Modern, responsive, and performance-driven websites tailored to your business needs."
  },
  {
    image: s4,
    title: "Professional Printing Solutions",
    desc: "High-quality commercial and institutional printing services with precision and reliability."
  },
  {
    image: s5,
    title: "School & Institutional Furniture",
    desc: "Durable, ergonomic, and modern furniture solutions for educational institutions."
  },
  {
    image: s6,
    title: "Real Estate Projects",
    desc: "Planning, development, and execution of reliable real estate and infrastructure projects."
  }
];

export default function ArivServicesSection() {
  return (
    <section className="py-24 bg-[#0B1C26] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions Designed for
            <span className="text-[#C9A24D]"> Growth & Excellence</span>
          </h2>
          <p className="mt-4 text-white/80">
            ARIV delivers integrated services across technology, digital,
            infrastructure, and enterprise solutions with trust and quality.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A24D]/50 transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
