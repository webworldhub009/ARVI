// src/pages/ServiceDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ------------------ Image Imports ------------------
import sl11 from "../../assets/image/sc5.jpg";
import sl21 from "../../assets/image/sc1.jpg";
import sl31 from "../../assets/image/sc1.jpg";
import sl41 from "../../assets/image/sc1.jpg";
import sl51 from "../../assets/image/sc1.jpg";
import sl61 from "../../assets/image/sc1.jpg";
import sl71 from "../../assets/image/sc1.jpg";
import sl81 from "../../assets/image/sc1.jpg";
import sl91 from "../../assets/image/sc1.jpg";

// ------------------ ARVI Service Data ------------------
const serviceDetails = {
  1: {
    title: "CCTV & Surveillance Solutions",
    dec: "Advanced security surveillance systems with professional deployment.",
    image: sl11,
    tableData: [
      "HD & IP Cameras",
      "24/7 Monitoring",
      "Remote Access",
      "Secure Storage",
      "Night Vision",
      "Scalable Architecture",
      "Low Maintenance",
    ],
    faqs: [
      { q: "Is remote monitoring available?", a: "Yes, secure remote access is supported." },
      { q: "Can it scale for large sites?", a: "Absolutely, systems are scalable." },
    ],
  },

  2: {
    title: "Network Infrastructure Services",
    dec: "Structured, secure, and high-performance networking solutions.",
    image: sl21,
    tableData: [
      "LAN / WAN Setup",
      "Structured Cabling",
      "Firewall Security",
      "Enterprise Grade Hardware",
      "High Availability",
      "Low Latency",
      "Future Ready",
    ],
    faqs: [
      { q: "Is it suitable for enterprises?", a: "Yes, designed for enterprise use." },
      { q: "Does it support security?", a: "Advanced firewall & monitoring included." },
    ],
  },

  3: {
    title: "System Installation & Commissioning",
    dec: "End-to-end installation with compliance and performance assurance.",
    image: sl31,
    tableData: [
      "Certified Engineers",
      "Compliance Checked",
      "On-Site Testing",
      "Documentation",
      "Smooth Commissioning",
      "Quality Assurance",
      "Reliable Handover",
    ],
    faqs: [
      { q: "Is documentation provided?", a: "Yes, full project documentation." },
      { q: "Do you perform testing?", a: "Complete on-site testing included." },
    ],
  },

  4: {
    title: "Site Survey & Technical Consultancy",
    dec: "Professional assessment aligned to operational and budgetary needs.",
    image: sl41,
    tableData: [
      "Site Evaluation",
      "Risk Assessment",
      "Cost Optimization",
      "Technical Planning",
      "Compliance Review",
      "Solution Blueprint",
      "Expert Guidance",
    ],
    faqs: [
      { q: "Is the survey customized?", a: "Yes, site-specific analysis is done." },
      { q: "Do you provide reports?", a: "Detailed technical reports included." },
    ],
  },

  5: {
    title: "Annual Maintenance Contracts (AMC)",
    dec: "Preventive maintenance ensuring reliability and uptime.",
    image: sl51,
    tableData: [
      "Scheduled Maintenance",
      "Priority Support",
      "Reduced Downtime",
      "Compliance Records",
      "Cost Control",
      "Dedicated Engineers",
      "Service Reports",
    ],
    faqs: [
      { q: "Is support priority-based?", a: "Yes, AMC clients get priority support." },
      { q: "Are reports provided?", a: "Detailed service reports included." },
    ],
  },

  6: {
    title: "Field Service Operations",
    dec: "On-site technical support across multiple project locations.",
    image: sl61,
    tableData: [
      "Rapid Response",
      "Multi-Location Support",
      "Skilled Technicians",
      "Issue Resolution",
      "Minimal Downtime",
      "Process Driven",
      "Reliable Execution",
    ],
    faqs: [
      { q: "Is multi-location support available?", a: "Yes, pan-location execution supported." },
      { q: "Are technicians certified?", a: "Yes, trained and experienced staff." },
    ],
  },

  7: {
    title: "Equipment Supply & Integration",
    dec: "Certified hardware supply with seamless integration.",
    image: sl71,
    tableData: [
      "Certified Equipment",
      "Vendor Neutral",
      "Seamless Integration",
      "Warranty Support",
      "Quality Tested",
      "Compatibility Checked",
      "Secure Deployment",
    ],
    faqs: [
      { q: "Is equipment certified?", a: "Yes, only certified hardware used." },
      { q: "Do you support integration?", a: "Complete integration services provided." },
    ],
  },

  8: {
    title: "Institutional & Commercial Projects",
    dec: "Turnkey execution for institutions and commercial facilities.",
    image: sl81,
    tableData: [
      "Hostels & Campuses",
      "Commercial Buildings",
      "Large Scale Projects",
      "Compliance Driven",
      "Structured Execution",
      "Timely Delivery",
      "Quality Assurance",
    ],
    faqs: [
      { q: "Do you handle large projects?", a: "Yes, institutional-scale projects supported." },
      { q: "Is execution standardized?", a: "Yes, process-driven execution." },
    ],
  },

  9: {
    title: "Multi-Location Project Execution",
    dec: "Scalable deployment across regions with centralized control.",
    image: sl91,
    tableData: [
      "Regional Coverage",
      "Centralized Monitoring",
      "Standardized Processes",
      "Timely Execution",
      "Dedicated Coordination",
      "Reporting & Billing",
      "Reliable Support",
    ],
    faqs: [
      { q: "Is regional execution supported?", a: "Yes, across multiple locations." },
      { q: "Is reporting centralized?", a: "Yes, structured reporting available." },
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0F2A44]">Service Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-[#2EC4B6] text-[#0F2A44] rounded-full font-semibold hover:bg-[#0F2A44] hover:text-white transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F9FC]">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2A44]/80"></div>

        <motion.div
          className="relative z-10 max-w-4xl px-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#8EDCE6]">
            {service.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            {service.dec}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-8 px-8 py-3 rounded-full bg-[#2EC4B6] text-[#0F2A44] font-semibold hover:bg-white transition"
          >
            Contact Us
          </button>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-2xl shadow-xl object-cover h-full"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#0F2A44] mb-6">
            Service Highlights
          </h2>

          <table className="w-full border border-[#2EC4B6]/40">
            <tbody>
              {service.tableData.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-3 bg-[#2EC4B6] text-[#0F2A44] font-semibold">
                    Feature {i + 1}
                  </td>
                  <td className="px-4 py-3 text-[#1E293B] bg-white">
                    {item}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 px-6 py-3 bg-[#0F2A44] text-white rounded-full hover:bg-[#2EC4B6] hover:text-[#0F2A44] transition"
          >
            Back to Services
          </button>
        </div>
      </section>
    </div>
  );
}
