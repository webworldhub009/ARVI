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
    title: "1.CCTV Systems & Surveillance",
    desc: "Advanced CCTV solutions with HD cameras, remote access, and 24/7 monitoring to ensure reliable security for commercial and institutional environments.",
    img: sl1,
  },
  {
    id: 2,
    title: "2.Network Infrastructure",
    desc: "Robust and secure LAN/WAN networking solutions designed for high performance, scalability, and uninterrupted connectivity across commercial and institutional setups.",
    img: sl2,
  },
  {
    id: 3,
    title: "3.Technical Documentation",
    desc: "Clear, accurate, and compliant technical documentation ensuring transparency, smooth operations, and hassle-free audits throughout the project lifecycle.",
    img: sl3,
  },
  {
    id: 4,
    title: "4.Tender & Bulk Supply Solutions",
    desc: "Reliable tender and bulk supply services delivering certified equipment, competitive pricing, and timely fulfillment for large-scale institutional and commercial projects.",
    img: sl4,
  },
  {
    id: 5,
    title: "5.Annual Maintenance Contracts (AMC)",
    desc: "Comprehensive AMC services ensuring preventive maintenance, quick issue resolution, minimal downtime, and reliable long-term system performance.",
    img: sl5,
  },
  {
    id: 6,
    title: "6.Structured Cabling & networking",
    desc: "Reliable structured cabling and networking solutions designed for high performance, scalability, and secure data flow across commercial and institutional environments.",
    img: sl6,
  },
  {
    id: 7,
    title: "7. Computing Digital Infrastructure",
    desc: "Robust computing and digital infrastructure solutions that ensure secure operations, high performance, and scalable IT environments for modern organizations",
    img: sl7,
  },
  {
    id: 8,
    title: "8.Compputer accorsories & Video conferencing cameras",
    desc: "Reliable computer accessories and high-quality video conferencing cameras designed to enhance productivity, seamless collaboration, and professional communication environments.",
    img: sl8,
  },
  {
    id: 9,
    title: "9.All Type of printing solutions",
    desc: "Comprehensive printing solutions including installation, maintenance, and support for printers, scanners, and multifunction devices—ensuring reliable performance and cost-efficient operations.",
    img: sl9,
  },
  {
    id: 10,
    title: "Real Estate Projects",
    desc: "End-to-end technology and infrastructure solutions for real estate projects, including security systems, networking, and digital enablement—designed for reliable, scalable, and future-ready developments.",
    img: sl9,
  },
  {
    id: 11,
    title: "School & Institutional Furniture",
    desc: "Durable, ergonomic, and space-efficient furniture solutions for schools and institutions, designed to support learning environments with quality, safety, and long-term reliability.",
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
