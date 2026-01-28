import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* 🔹 Replace images with your own */
import img1 from "../../assets/image/h2.jpg";
import img2 from "../../assets/image/sc3.jpg";
import img3 from "../../assets/image/sc4.jpg";

const services = [
  {
    id: 1,
    title: "CCTV & Surveillance",
    desc: "Advanced security and monitoring systems for complete safety.",
    img: img1,
  },
  {
    id: 2,
    title: "Network Infrastructure",
    desc: "Secure, scalable and high-performance networking solutions.",
    img: img2,
  },
  {
    id: 3,
    title: "Structured Cabling",
    desc: "Reliable cabling systems ensuring seamless connectivity.",
    img: img3,
  },
  {
    id: 4,
    title: "Printing Solutions",
    desc: "All types of commercial & institutional printing systems.",
    img: img1,
  },
  {
    id: 5,
    title: "Video Conferencing",
    desc: "Professional audio-visual meeting & conferencing solutions.",
    img: img2,
  },
  {
    id: 6,
    title: "Computer Accessories",
    desc: "Complete range of hardware and IT accessories.",
    img: img3,
  },
  {
    id: 7,
    title: "Computing Infrastructure",
    desc: "Modern IT and digital infrastructure for organizations.",
    img: img1,
  },
  {
    id: 8,
    title: "AMC Services",
    desc: "Annual maintenance contracts for uninterrupted operations.",
    img: img2,
  },
  {
    id: 9,
    title: "Tender & Bulk Supply",
    desc: "Government and bulk supply solutions with reliability.",
    img: img3,
  },
  {
    id: 10,
    title: "Website Design & Development",
    desc: "Mobile‑friendly and cross‑platform websites .",
    img: img1,
  },
  {
    id: 11,
    title: "Real Estate Projects",
    desc: "Commercial & residential infrastructure projects.",
    img: img2,
  },
  {
    id: 12,
    title: "School & Institutional Furniture",
    desc: "Commercial & residential infrastructure projects.",
    img: img2,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#031825] to-[#041E2F] text-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#41B9E8] mb-14"
        >
          Our Services
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-[#052B43]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-[#0A3B5A] hover:border-[#41B9E8]/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E2F]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#41B9E8] mb-2">
                  {service.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm
                  bg-[#41B9E8] text-[#041E2F]
                  hover:bg-white hover:text-[#41B9E8]
                  transition-all duration-300
                  group-hover:shadow-[0_0_20px_rgba(65,185,232,0.6)]"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
