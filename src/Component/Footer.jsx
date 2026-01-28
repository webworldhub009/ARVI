import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaPhoneAlt,
  FaInfoCircle,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaLayerGroup,
  FaBuilding,
  FaImages,
  FaStore,
  FaProjectDiagram,
  FaFile,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import logo from "../assets/image/Arvi_Solution_3D_Logo_1.png";
import bgImg from "../assets/image/Arvi_Solution_3D_Logo_1.png";
import Translator from "./Translator";

/* =====================
   ARIV BRAND COLORS
===================== */
const COLORS = {
  primary: "#0D4A6B",
  secondary: "#230304",
  accent: "#C9A24D",
};

/* =====================
   ARIV SERVICES
===================== */
const servicesData = [
  { name: "Enterprise Technology & Integration", path: "/services/enterprise", icon: FaLayerGroup },
  { name: "Digital Setup Solutions", path: "/services/digital", icon: FaBuilding },
  { name: "Website Design Solutions", path: "/services/web", icon: FaImages },
  { name: "Printing Solutions", path: "/services/printing", icon: FaStore },
  { name: "School Furniture Solutions", path: "/services/furniture", icon: FaBuilding },
  { name: "Real Estate Projects", path: "/services/10", icon: FaProjectDiagram },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      className="relative text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#230304]/90"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* ABOUT ARIV */}
        <div>
          <img src={logo} alt="ARIV Logo" className="w-40 mb-4 rounded-full" />
          <p className="text-white/90 leading-relaxed">
            ARVI is a trusted enterprise solutions provider delivering
            technology integration, digital transformation, infrastructure,
            and turnkey business solutions across multiple industries.
          </p>

       <div className="mt-5">  <Link
              to="https://arvisolutions.in/webmail"
              className="bg-[#00b7ff]  hover:bg-[#5bd0ff] text-white px-6 py-3 rounded-lg text-center font-medium transition transform hover:scale-105 duration-300 min-w-[120px] "
            >
              ✉️ Webmail
            </Link></div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/", <FaHome />],
              ["About ARIV", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaLayerGroup />],
              ["Ccertificate", "/certificate", <FaBuilding />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
              // ["Terms & Conditions", "/terms", <FaFile />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#C9A24D] transition"
                >
                  <span className="text-[#C9A24D]">{icon}</span>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-bold text-2xl text-white font-[italiana]">
            Translator 👇
          </h4>
          <div className="mb-4 flex">
            <Translator />
            <div className="w-42 md:w-16"></div>
          </div>
        </div>
      

        {/* SERVICES */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-[#C9A24D] transition"
                >
                  <Icon className="text-[#C9A24D]" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterestP].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:bg-[#C9A24D] hover:text-[#230304] transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Information</h4>

          <p className="py-1">
            <FaPhoneAlt className="inline mr-2 text-[#C9A24D]" />
            +91 9059117459
          </p>
          <p className="py-1">
            <FaPhoneAlt className="inline mr-2 text-[#C9A24D]" />
            +91 8886327899
          </p>

          <p className="py-1">
            <FaEnvelope className="inline mr-2 text-[#C9A24D]" />
            Arunn@arvisolutions.in
          </p>
          <p className="py-1">
            <FaEnvelope className="inline mr-2 text-[#C9A24D]" />
            Helpdesk@arvisolutions.in
          </p>

          <p className="text-white/90 mt-3 text-sm">
            <strong>Head Office:</strong>
            <br />
            Plot No. 6 Ground Floor Kalyanpuri Colony Road Opposite Sai Ambika Vihar Visatath Enclave, Azmath Nagar, Uppal, Hyderabad, Telangana 500039
          </p>
          {/* <p className="text-white/90 mt-3 text-sm">
            <strong>Head Office:</strong>
            <br />
            Plot No. 8-43/9/10 Ground Floor West Bajali Nearby Street No. 6 Sri Laxmi Narsimha Tent House Balaji Hill Colony Uppal Hyderabad Telangana 500039
          </p> */}
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#0D4A6B] py-5 text-white/80 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm px-6">
          <VisitorCounter />
          <p>© {new Date().getFullYear()} ARVI Solutions. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-[#C9A24D] font-semibold">
              <a href="https://webworldhub.co.in/" className="hover:text-[#230304] font-semibold">Web World Hub</a>
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
