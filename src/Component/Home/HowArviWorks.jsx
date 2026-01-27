import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaDraftingCompass,
  FaTools,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Requirement Assessment",
    desc: "We carefully analyze site conditions, technical needs, and client objectives to ensure the right solution from day one.",
  },
  {
    icon: FaDraftingCompass,
    title: "Planning & Design",
    desc: "Our experts design scalable and compliant solutions aligned with operational priorities and budget constraints.",
  },
  {
    icon: FaTools,
    title: "Execution & Installation",
    desc: "Certified technicians execute the project using industry best practices, ensuring safety, accuracy, and quality.",
  },
  {
    icon: FaClipboardCheck,
    title: "Testing & Documentation",
    desc: "Comprehensive testing, validation, and detailed documentation for transparency, billing, and audits.",
  },
  {
    icon: FaHandshake,
    title: "Handover & Support",
    desc: "On-time project handover with continuous post-deployment support and long-term service commitment.",
  },
];

export default function HowArviWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#06141B] via-[#0E2A36] to-[#0B1C26] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-sm">
            How ARVI Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Proven <span className="text-[#C9A24D]">Service Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-sm md:text-base">
            A structured, transparent, and reliable approach that ensures quality delivery, compliance, and long-term trust.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C9A24D]/0 via-[#C9A24D] to-[#C9A24D]/0" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="md:w-1/2">
                    <div className="p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#C9A24D]/50 transition group">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                        <span className="text-[#C9A24D] font-bold">
                          0{i + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#03303A] text-[#C9A24D] text-2xl border border-[#C9A24D]/40 shadow-lg group-hover:scale-110 transition">
                      <Icon />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
