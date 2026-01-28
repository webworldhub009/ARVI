import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";

import PDF1 from "../../assets/image/ARVI GST FILE.pdf";
import PDF2 from "../../assets/image/gallery/Print _ Udyam Registration Certificate 25.pdf";
// import PDF3 from "../../assets/image/ARVI GST FILE.pdf";

const certificates = [
  {
    title: "GST Registration Certificate",
    description:
      "Official GST registration ensuring statutory compliance, transparent taxation, and authorized business operations.",
      pdf: PDF1,
    },
    {
      title: "UDYAM Registration",
      description:
      "Government-recognized MSME registration establishing ARVI’s legal identity, credibility, and operational authenticity.",
      pdf: PDF2,
  },
];

function CertificateSection() {
  return (
    <section
      className="relative py-24 px-6 bg-gradient-to-br from-[#34191B] via-[#1E293B] to-[#0F172A]"
      id="certificates"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          ARVI <span className="text-[#40BBDF]">Certifications & Registrations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-white/80 max-w-3xl mx-auto"
        >
          Our certifications reflect ARVI’s commitment to compliance, quality
          assurance, ethical operations, and trusted delivery across enterprise
          and institutional projects.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl 
                         border border-white/10 p-8 shadow-xl
                         hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(64,187,223,0.25)]
                         transition-all duration-500 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#40BBDF] mb-4">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed flex-1">
                {cert.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-white/10"></div>

              {/* Actions */}
              <div className="flex gap-4 justify-center">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full 
                             bg-[#40BBDF] text-[#34191B] font-semibold
                             hover:bg-white transition-all duration-300 hover:scale-105"
                >
                  <FaEye /> View
                </a>

                <a
                  href={cert.pdf}
                  download
                  className="flex items-center gap-2 px-6 py-2 rounded-full 
                             border-2 border-[#40BBDF] text-white font-semibold
                             hover:bg-[#40BBDF] hover:text-[#34191B]
                             transition-all duration-300 hover:scale-105"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
