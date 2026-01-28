import React, { useState } from "react";
import { Link, Links, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/image/services/sd1.jpg";
import img2 from "../../assets/image/services/sd2.jpg";
import img3 from "../../assets/image/services/sd3.jpg";
import img4 from "../../assets/image/services/sd4.jpg";
import img5 from "../../assets/image/services/sd5.jpg";
import img6 from "../../assets/image/services/sd6.jpg";
import img7 from "../../assets/image/services/sd7.jpg";
import img8 from "../../assets/image/services/sd8.jpg";
import img9 from "../../assets/image/services/sd9.jpg";
import img10 from "../../assets/image/services/sd10.jpg";
import img11 from "../../assets/image/services/sd11.jpg";
import img12 from "../../assets/image/services/sd12.jpg";
import img13 from "../../assets/image/services/sd13.jpg";
import img14 from "../../assets/image/services/sd14.jpg";
import img15 from "../../assets/image/services/sd15.jpg";
import img16 from "../../assets/image/services/sd16.jpg";
import img17 from "../../assets/image/services/sd17.jpg";
import img18 from "../../assets/image/services/sd18.jpg";
import img19 from "../../assets/image/services/sd19.jpg";
import img20 from "../../assets/image/services/sd20.jpg";
import img21 from "../../assets/image/services/sd21.jpg";
import img22 from "../../assets/image/services/sd22.jpg";
import img23 from "../../assets/image/services/sd23.jpg";
import img24 from "../../assets/image/services/sd24.jpg";
import img25 from "../../assets/image/services/sd25.jpg";
import img26 from "../../assets/image/services/sd26.jpg";
import img27 from "../../assets/image/services/sd27.jpg";
import img28 from "../../assets/image/services/sd28.jpg";
import img29 from "../../assets/image/services/sd29.jpg";
import img30 from "../../assets/image/services/sd30.jpg";
import img31 from "../../assets/image/services/sd31.jpg";
import img32 from "../../assets/image/services/sd32.jpg";
import img33 from "../../assets/image/services/sd33.jpg";
import img34 from "../../assets/image/services/sd34.jpg";
import img35 from "../../assets/image/services/sd35.jpg";
import img36 from "../../assets/image/services/sd36.jpg";
import img37 from "../../assets/image/services/sd37.jpg";
import img38 from "../../assets/image/services/sd38.jpg";
import img39 from "../../assets/image/services/sd39.jpg";
import img40 from "../../assets/image/services/sd40.jpg";
import img41 from "../../assets/image/services/sd41.jpg";
import img42 from "../../assets/image/services/sd42.jpg";
import img43 from "../../assets/image/services/sd43.jpg";
import img44 from "../../assets/image/services/sd44.jpg";
import img45 from "../../assets/image/services/sd45.jpg";
import img46 from "../../assets/image/services/sd46.jpg";
import img47 from "../../assets/image/services/sd47.jpg";
import img48 from "../../assets/image/services/sd48.jpg";
import img49 from "../../assets/image/services/sd49.jpg";
import img50 from "../../assets/image/services/sd50.jpg";
import img51 from "../../assets/image/services/sd51.jpg";
import img52 from "../../assets/image/services/sd52.jpg";
import img53 from "../../assets/image/services/sd53.jpg";
import img54 from "../../assets/image/services/sd54.jpg";
import img55 from "../../assets/image/services/sd55.jpg";
import img56 from "../../assets/image/services/sd56.jpg";
import img57 from "../../assets/image/services/sd57.jpg";
import img58 from "../../assets/image/services/sd58.jpg";
import img59 from "../../assets/image/services/sd59.jpg";
import img60 from "../../assets/image/services/sd60.jpg";
import img61 from "../../assets/image/services/sd61.jpg";
import img62 from "../../assets/image/services/sd62.jpg";
import img63 from "../../assets/image/services/sd63.jpg";
import img64 from "../../assets/image/services/sd64.jpg";
import img65 from "../../assets/image/services/sd65.jpg";
import img66 from "../../assets/image/services/sd66.jpg";
import img67 from "../../assets/image/services/sd67.jpg";
import img68 from "../../assets/image/services/sd68.jpg";
import img69 from "../../assets/image/services/sd69.jpg";
import img70 from "../../assets/image/services/sd70.jpg";
import img71 from "../../assets/image/services/sd71.jpg";
import img72 from "../../assets/image/services/sd72.jpg";




const SERVICE_DATA = {
  1: {
    title: "CCTV & Surveillance",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "HD CCTV Cameras", short: "Crystal clear surveillance cameras", long: "High-definition CCTV cameras providing 24/7 security monitoring.", img: img1 },
      { title: "IP Cameras", short: "Remote monitoring solutions", long: "Network based IP cameras with remote access and storage.", img: img2 },
      { title: "DVR / NVR", short: "Reliable recording systems", long: "Advanced DVR and NVR solutions for secure footage storage.", img: img3 },
      { title: "Access Control", short: "Authorized entry systems", long: "Biometric and card-based access control systems.", img: img4 },
      { title: "Monitoring Setup", short: "Central control rooms", long: "Professional monitoring room setup for enterprises.", img: img5 },
      { title: "Maintenance", short: "System health & support", long: "Regular servicing and maintenance of surveillance systems.", img: img6 },
    ],
  },
  2: {
    title: "Network Infrastructure",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "LAN Network Setup", short: "High-speed and reliable local networks", long: "High-speed and reliable local networks for seamless internal connectivity.", img: img7 },
      { title: "WAN Connectivity", short: "Secure wide-area networking ", long: "Secure wide-area networking for smooth multi-location communication.", img: img8 },
      { title: "Structured Cabling", short: "ROrganized, scalable cabling", long: "Organized, scalable cabling for efficient and stable network performance.", img: img9 },
      { title: "Network Security & Firewall", short: "Protection against threats with advanced firewall and security systems.", long: "Protection against threats with advanced firewall and security systems.", img: img10 },
      { title: "Switching & Routing", short: "Managed switches and routers", long: "Managed switches and routers for optimized and secure data traffic.", img: img11 },
      { title: "Network Support & Monitoring", short: "Continuous monitoring and support to ensure uptime and quick issue resolution.", long: "Continuous monitoring and support to ensure uptime and quick issue resolution.", img: img12 },
    ],
  },
  3: {
    title: "Structured Cabling",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Network Design & Installation", short: "Customized cabling layouts", long: "Customized cabling layouts ensuring seamless connectivity for offices, data centers, and commercial spaces", img: img13 },
      { title: " Fiber Optic Cabling", short: "High‑speed, long‑distance data ", long: "High‑speed, long‑distance data transmission with reliable fiber optic solutions for modern enterprises.", img: img14 },
      { title: "Data & Voice Integration", short: "Unified cabling systems", long: "Unified cabling systems that support both internet and telephony, reducing clutter and improving efficiency", img: img15 },
      { title: "Cable Testing & Certification", short: "BComprehensive testing", long: "BComprehensive testing to guarantee performance, compliance, and long‑term reliability of installed cabling.", img: img16 },
      { title: "Structured Cabling Maintenance", short: "Regular inspections, troubleshooting", long: "Regular inspections, troubleshooting, and upgrades to keep networks running smoothly without downtime.", img: img17 },
      { title: "Server Room & Rack Management", short: "Organized cabling for server ", long: "Organized cabling for server racks, ensuring easy scalability, reduced interference, and professional appearance.", img: img18 },
    ],
  },
  4: {
    title: "Printing Solutions",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Digital Printing", short: "High‑quality prints for brochures,", long: "High‑quality prints for brochures, flyers, and business cards with sharp colors and fast turnaround.", img: img19 },
      { title: "Offset Printing", short: "Cost‑effective bulk printing", long: "Cost‑effective bulk printing for magazines, catalogs, and newspapers with consistent professional finish", img: img20 },
      { title: "Large Format Printing", short: "Posters, banners, and signage", long: "Posters, banners, and signage in vibrant colors, perfect for events, promotions, and outdoor advertising.", img: img21 },
      { title: "Custom Packaging & Labels", short: "Personalized packaging designs", long: "Personalized packaging designs and product labels that enhance brand identity and customer appeal", img: img22 },
      { title: "Corporate Stationery Printing", short: "Letterheads, envelopes, and", long: "Letterheads, envelopes, and notepads tailored to your brand for a polished business presence.", img: img23 },
      { title: "Promotional Merchandise Printing", short: "T‑shirts, mugs, and giveaways printed", long: "T‑shirts, mugs, and giveaways printed with logos or designs to boost marketing campaigns.", img: img24 },
    ],
  },
  5: {
    title: "Video Conferencing",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "HD Video Conferencing Setup", short: "Crystal‑clear video and audio", long: "Crystal‑clear video and audio systems for seamless virtual meetings across teams and clients.", img: img25 },
      { title: "Cloud‑Based Conferencing Platforms", short: "Flexible, secure, and scalable solutions", long: "Flexible, secure, and scalable solutions that allow meetings from anywhere, on any device.", img: img26},
      { title: "Multi‑Device Integration", short: "Smooth connectivity across", long: "Smooth connectivity across laptops, mobiles, and tablets for uninterrupted collaboration.", img: img27 },
      { title: "Secure Communication Channels", short: "End‑to‑end encryption ensuring ", long: "End‑to‑end encryption ensuring privacy and protection of sensitive business discussions.", img: img28 },
      { title: "Technical Support & Maintenance", short: "24/7 monitoring, troubleshooting,", long: "24/7 monitoring, troubleshooting, and upgrades to keep conferencing systems running flawlessly", img: img29 },
      { title: "Conference Room Design & Installation", short: "Customized room setups ", long: "Customized room setups with cameras, microphones, and displays for professional meeting experiences.", img: img30 },
    ],
  },
  6: {
    title: "Computer Accessories",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Keyboards & Mice", short: "Ergonomic and wireless options", long: "Ergonomic and wireless options designed for comfort, speed, and productivity in everyday computing.", img: img31 },
      { title: "Headsets & Speakers", short: "High‑quality audio accessories", long: "High‑quality audio accessories for clear communication, immersive gaming, and professional conferencing.", img: img32 },
      { title: " Monitors & Display Solution", short: "HD and 4K monitors with", long: "HD and 4K monitors with adjustable stands, perfect for design, gaming, and office work", img: img33 },
      { title: "External Storage Devices", short: "Portable hard drives", long: "Portable hard drives and SSDs for secure backups, fast transfers, and expanded storage capacity.", img: img34 },
      { title: "Power & Connectivity Accessories", short: "Adapters, surge protectors,", long: "Adapters, surge protectors, and docking stations to ensure reliable power and seamless device connections.", img: img35 },
      { title: "Webcams & Multimedia Tools", short: "HD webcams and accessories ", long: "HD webcams and accessories for video calls, streaming, and content creation with professional clarity.", img: img36 },
    ],
  },
  7: {
    title: "Computing Infrastructure",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Server Deployment & Management", short: "Robust server setups with", long: "Robust server setups with monitoring and optimization to ensure high performance and scalability.", img: img37 },
      { title: "Cloud Infrastructure Solution", short: "Flexible cloud platforms", long: "Flexible cloud platforms for storage, applications, and computing power with secure remote access.", img: img38 },
      { title: "Data Security & Backup Systems", short: "Advanced firewalls, encryption,", long: "Advanced firewalls, encryption, and automated backup solutions to protect critical business information.", img: img39 },
      { title: "Network Architecture & Optimization", short: "Design and implementation", long: "Design and implementation of efficient networks that support seamless communication and data flow", img: img40 },
      { title: " Virtualization & Resource Allocation", short: "Optimized use of hardware through ", long: "Optimized use of hardware through virtualization, reducing costs and improving system efficiency", img: img41 },
      { title: "IT Infrastructure Support & Maintenance", short: "Proactive monitoring, troubleshooting,", long: "Proactive monitoring, troubleshooting, and upgrades to keep computing systems reliable and future‑ready.", img: img42 },
    ],
  },
  8: {
    title: "AMC Services",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Hardware Maintenance", short: "Regular servicing and repair", long: "Regular servicing and repair of desktops, laptops, printers, and other IT hardware to ensure smooth performance", img: img43 },
      { title: "Network Support", short: "Monitoring and troubleshooting of", long: "Monitoring and troubleshooting of LAN/WAN connections, routers, and switches for uninterrupted connectivity.", img: img44 },
      { title: "Software Updates & Support", short: "Installation of patches,", long: "Installation of patches, upgrades, and bug fixes to keep systems secure and up‑to‑date.", img: img45 },
      { title: "Security Management", short: "irewall configuration, antivirus updates,", long: "Firewall configuration, antivirus updates, and data protection measures to safeguard against cyber threats.", img: img46 },
      { title: "System Performance Optimization", short: "Routine checks and tuning ", long: "Routine checks and tuning to improve speed, efficiency, and reliability of computing infrastructure.", img: img47 },
      { title: "On‑Call Technical Assistance", short: "Quick response support", long: "Quick response support for urgent issues, minimizing downtime and ensuring business continuity.", img: img48 },
    ],
  },
  9: {
    title: "Tender & Bulk Supply",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Bulk Procurement Management", short: "HEfficient handling of large‑scale", long: "HEfficient handling of large‑scale orders with cost optimization and timely delivery.", img: img49 },
      { title: "Vendor Coordination & Sourcing", short: "Strong supplier networks to", long: "Strong supplier networks to ensure quality products and competitive pricing for bulk requirements.", img: img50 },
      { title: "Tender Documentation & Compliance", short: "Preparation of bids,", long: "Preparation of bids, proposals, and compliance reports to meet government and corporate tender standards.", img: img51 },
      { title: "Logistics & Distribution Services", short: "Streamlined transport and", long: "Streamlined transport and warehousing solutions for safe and timely bulk deliveries.", img: img52 },
      { title: "Quality Assurance & Inspection", short: "Rigorous checks and ", long: "Rigorous checks and certifications to maintain product standards across all bulk supplies.", img: img53 },
      { title: "Contract Management & Support", short: "End‑to‑end assistance in", long: "End‑to‑end assistance in managing tender contracts, renewals, and client relationships.", img: img54 },
    ],
  },
  10: {
    title: "Website Design & Development",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Custom Website Design", short: "Tailor‑made layouts and visuals", long: "Tailor‑made layouts and visuals that reflect your brand identity and engage your audience effectively", img: img55 },
      { title: "Responsive Development", short: "Mobile‑friendly and cross‑platform ", long: "Mobile‑friendly and cross‑platform websites ensuring smooth performance on desktops, tablets, and smartphones.", img: img56 },
      { title: "E‑Commerce Solutions", short: "Secure, scalable online stores", long: "Secure, scalable online stores with payment gateways, product catalogs, and user‑friendly shopping experiences.", img: img57 },
      { title: "Performance Optimization", short: "Speed enhancements, SEO‑friendly", long: "Speed enhancements, SEO‑friendly coding, and streamlined architecture for faster load times and better rankings", img: img58 },
      { title: "Security & Maintenance", short: "Regular updates, backups, ", long: "Regular updates, backups, and advanced security measures to protect websites from threats and downtime.", img: img59 },
      { title: "CMS Integration & Support", short: "Easy‑to‑manage content systems", long: "Easy‑to‑manage content systems like WordPress, Drupal, or custom CMS for seamless updates and scalability.", img: img60 },
    ],
  },
  11: {
    title: "Real Estate Projects",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Residential Development", short: "Design and construction of modern", long: "Design and construction of modern apartments, villas, and housing societies tailored to family lifestyles.", img: img61 },
      { title: "Commercial Complexes", short: "Office spaces, malls, and retail", long: "Office spaces, malls, and retail outlets built with functionality, accessibility, and business growth in mind.", img: img62 },
      { title: "Township Planning", short: "Integrated communities with housing,", long: "Integrated communities with housing, schools, healthcare, and recreational facilities for holistic living.", img: img63 },
      { title: " Infrastructure & Amenities", short: "Roads, utilities, parks, and ", long: "Roads, utilities, parks, and public spaces developed to support sustainable and well‑connected neighborhoods.", img: img64 },
      { title: "Hospitality Projects", short: "Hotels, resorts, and serviced", long: "Hotels, resorts, and serviced apartments designed for comfort, luxury, and tourism appeal.", img: img65 },
      { title: "Industrial & Warehousing Facilities", short: "Factories, logistics hubs,", long: "Factories, logistics hubs, and warehouses built to meet modern industry standards and operational efficiency", img: img66 },
    ],
  },
  12: {
    title: "School & Institutional Furniture",
    desc: "Advanced security monitoring solutions",
    cards: [
      { title: "Classroom Desks & Benches", short: "Durable, ergonomic furniture designed", long: "Durable, ergonomic furniture designed for comfort and effective learning environments.", img: img67 },
      { title: "Library Furniture", short: "Bookshelves, reading tables,", long: "Bookshelves, reading tables, and seating arrangements that create organized and inspiring study spaces.", img: img68 },
      { title: "Computer Lab Workstations", short: "Modern desks and modular setups", long: "Modern desks and modular setups tailored for technology‑driven learning and digital labs.", img: img69 },
      { title: " Cafeteria & Dining Furniture", short: "Sturdy tables and chairs built", long: "Sturdy tables and chairs built for high‑traffic areas, ensuring safety and convenience for students.", img: img70 },
      { title: "Office & Administrative Furniture", short: "Professional desks, storage units", long: "Professional desks, storage units, and seating solutions for staff rooms and administrative offices", img: img71 },
      { title: "Auditorium & Multipurpose Hall Seating", short: "Comfortable, space‑efficient seating", long: "Comfortable, space‑efficient seating systems for events, lectures, and cultural programs.", img: img72 },
    ],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICE_DATA[id];
  const [activeCard, setActiveCard] = useState(null);

  if (!service) return <div className="py-20 text-center">Service Not Found</div>;

  return (
    <section className="bg-gradient-to-b from-[#031825] to-[#041E2F] text-white px-6">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-[#41B9E8]"
        >
          {service.title}
        </motion.h1>
        <p className="text-white/80 mt-4 max-w-2xl">
          {service.desc}
        </p>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="bg-[#052B43]/70 border-y border-[#0A3B5A] py-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {["24/7 Monitoring", "Certified Engineers", "Enterprise Security"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-[#41B9E8] font-semibold text-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              className="group bg-[#052B43]/90 backdrop-blur-xl rounded-2xl overflow-hidden
              shadow-xl border border-[#0A3B5A] hover:border-[#41B9E8]/70 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E2F]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#41B9E8] mb-2">
                  {card.title}
                </h3>

                <p className="text-white/70 text-sm mb-6">
                  {card.short}
                </p>

                {/* Button */}
                <button
                  onClick={() => setActiveCard(card)}
                  className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full
                  bg-[#41B9E8] text-[#041E2F] font-semibold overflow-hidden
                  hover:text-[#41B9E8] transition-all duration-300 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative">Learn More →</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#041E2F] py-20 text-center border-t border-[#0A3B5A]">
        <h3 className="text-3xl font-bold text-[#41B9E8] mb-4">
          Need a Custom Security Solution?
        </h3>
        <p className="text-white/70 mb-8">
          Talk to ARVI experts for tailored surveillance systems.
        </p>
        <button className="px-8 py-3 bg-[#41B9E8] text-[#041E2F] rounded-full font-semibold hover:bg-white hover:text-[#41B9E8] transition cursor-pointer">
          <Link to="/contact">Contact ARVI Team</Link>

        </button>
      </div>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#052B43] max-w-lg w-full rounded-2xl p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 text-white text-xl cursor-pointer"
              >
                ✕
              </button>

              <img src={activeCard.img} className="h-52 w-full object-cover rounded-lg mb-6" />

              <h3 className="text-2xl font-bold text-[#41B9E8] mb-3">
                {activeCard.title}
              </h3>
              <p className="text-white/80 mb-6">
                {activeCard.long}
              </p>

              <button className="px-6 py-2 bg-[#41B9E8] text-[#041E2F] rounded-full font-semibold hover:bg-white hover:text-[#41B9E8] transition cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceDetail;
