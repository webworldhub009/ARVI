import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRightLong } from "react-icons/fa6";

import sl1 from "../../assets/image/sc5.jpg";
import sl2 from "../../assets/image/sc1.jpg";
import sl3 from "../../assets/image/sc1.jpg";
import sl4 from "../../assets/image/sc1.jpg";
import sl5 from "../../assets/image/sc1.jpg";
import sl6 from "../../assets/image/s1.jpg";
import sl7 from "../../assets/image/s1.jpg";
import sl8 from "../../assets/image/s1.jpg";
import sl9 from "../../assets/image/s1.jpg";

const services = [
  {
    id: 1,
    title: "CCTV & Surveillance Solutions",
    desc: "Design, installation, and maintenance of advanced CCTV and security surveillance systems.",
    img: sl1,
  },
  {
    id: 2,
    title: "Network Infrastructure Services",
    desc: "Structured cabling, LAN/WAN setup, and secure networking solutions for enterprises.",
    img: sl2,
  },
  {
    id: 3,
    title: "System Installation & Commissioning",
    desc: "Professional deployment and commissioning of technical systems with compliance assurance.",
    img: sl3,
  },
  {
    id: 4,
    title: "Site Survey & Technical Consultancy",
    desc: "Detailed site assessment and expert consultation tailored to operational requirements.",
    img: sl4,
  },
  {
    id: 5,
    title: "Annual Maintenance Contracts (AMC)",
    desc: "Reliable AMC services ensuring uptime, preventive maintenance, and priority support.",
    img: sl5,
  },
  {
    id: 6,
    title: "Field Service Operations",
    desc: "On-site technical support and troubleshooting across multiple project locations.",
    img: sl6,
  },
  {
    id: 7,
    title: "Equipment Supply & Integration",
    desc: "Supply of certified hardware components with seamless system integration.",
    img: sl7,
  },
  {
    id: 8,
    title: "Institutional & Commercial Projects",
    desc: "End-to-end solutions for hostels, institutions, offices, and commercial facilities.",
    img: sl8,
  },
  {
    id: 9,
    title: "Multi-Location Project Execution",
    desc: "Scalable execution and support across regions with standardized processes.",
    img: sl9,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#F5F9FC]" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-[#C9A24D]">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-[#475569] max-w-3xl mx-auto">
            ARVI Solutions delivers <span className="font-semibold text-[#2EC4B6]">reliable, scalable, and technology-driven services</span> 
            tailored to diverse operational environments.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl overflow-hidden
                shadow-[0_15px_40px_rgba(15,42,68,0.12)]
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(15,42,68,0.25)]
                transition-all duration-500 group
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    w-full h-56 object-cover
                    group-hover:scale-110 transition-transform duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7 text-center">
                <h3 className="text-xl font-bold text-[#C9A24D] group-hover:text-[#2EC4B6] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-[#475569] mt-3 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-2.5 rounded-full
                    bg-[#2EC4B6] text-[#ffffff] font-semibold
                    hover:bg-[#C9A24D] hover:text-white
                    transition-all duration-300
                    shadow-md hover:shadow-lg
                  "
                >
                  Learn More <FaRightLong />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
