import {
  FaUserCog,
  FaHandshake,
  FaClock,
  FaFileAlt,
  FaGlobeAsia,
} from "react-icons/fa";

const differentiators = [
  {
    icon: FaUserCog,
    title: "Domain Expertise",
    desc: "Skilled technicians with specialized experience in CCTV, networking, and reliable field service delivery.",
  },
  {
    icon: FaHandshake,
    title: "Client-Centric Engagement",
    desc: "Solutions tailored to site conditions, operational priorities, and budgetary constraints.",
  },
  {
    icon: FaClock,
    title: "Reliability & Timeliness",
    desc: "Strong focus on meeting timelines, SLAs, and consistently delivering committed outcomes.",
  },
  {
    icon: FaFileAlt,
    title: "Process & Documentation Strength",
    desc: "Robust documentation practices ensuring transparency, billing accuracy, and audit readiness.",
  },
  {
    icon: FaGlobeAsia,
    title: "Regional Reach",
    desc: "Capability to execute and support projects across hostels, institutions, and commercial sites.",
  },
];

export default function KeyDifferentiatorsTimeline() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#06141B] via-[#0E2A36] to-[#0B1C26] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#C9A24D] text-[#230304] font-semibold text-xs sm:text-sm">
            Why ARVI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What Makes Us{" "}
            <span className="text-[#C9A24D]">Different</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical Line (hide on small screens) */}
          <div className="hidden sm:block absolute left-7 top-0 h-full w-[2px] bg-gradient-to-b from-[#C9A24D]/0 via-[#C9A24D] to-[#C9A24D]/0" />

          <div className="space-y-10 sm:space-y-14">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 sm:gap-8 group"
              >
                {/* ICON */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-xl
                    flex items-center justify-center
                    bg-[#03303A]
                    text-[#C9A24D]
                    text-xl sm:text-2xl
                    border border-[#C9A24D]/40
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:shadow-lg
                    group-hover:shadow-[#C9A24D]/20
                  ">
                    <item.icon />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="
                  flex-1
                  p-5 sm:p-6
                  rounded-xl
                  bg-white/5 backdrop-blur
                  border border-white/10
                  transition-all duration-300
                  group-hover:border-[#C9A24D]/50
                  group-hover:bg-white/10
                ">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
