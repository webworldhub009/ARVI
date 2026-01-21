import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/image/Arvi_Solution_3D_Logo_1.png";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaLayerGroup,
  FaInfoCircle,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

/* =====================
   COLORS
===================== */
const COLORS = {
  primary: "#011F32",
  secondary: "#36080A",
  light: "#F8FAFC",
};

/* =====================
   NAV ITEMS
===================== */
const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About ARIV", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/services", icon: <FaLayerGroup /> },
  { name: "Projects", path: "/projects", icon: <FaBuilding /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const socialIcons = [
  { icon: FaFacebookF, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaYoutube, link: "#" },
];

const COMPANY_INFO = {
  email: "info@arivsolutions.com",
  mobile: "+91 98978 14896",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div
        className="text-white text-xs md:text-sm px-4 md:px-12"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-1">
          <p className="flex items-center gap-2">
            <FaEnvelope /> {COMPANY_INFO.email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> {COMPANY_INFO.mobile}
          </p>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className="sticky top-0 z-50 border-b bg-[#E1E2E0]"
        
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-0 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="ARIV Logo"
              className="h-25  object-contain rounded-full "
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 text-sm uppercase font-medium relative
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-[#36080A] after:transition-all after:duration-300
                  hover:after:w-full`}
                  style={{
                    color:
                      pathname === item.path
                        ? COLORS.secondary
                        : COLORS.primary,
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Socials */}
          <div className="hidden md:flex gap-4">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="p-2 rounded-full transition hover:scale-110"
                style={{ color: COLORS.primary }}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Icon */}
          <FaBars
            onClick={toggleMenu}
            className="md:hidden text-3xl cursor-pointer"
            style={{ color: COLORS.primary }}
          />
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed inset-0 z-50 flex"
          >
            <motion.div
              ref={panelRef}
              className="w-72 h-full bg-white px-6 py-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="ARIV" className="h-12" />
                <FaTimes
                  onClick={toggleMenu}
                  className="text-2xl cursor-pointer"
                  style={{ color: COLORS.primary }}
                />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:text-danger"
                    style={{ color: COLORS.primary }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="mt-auto pt-6 border-t flex justify-center gap-4">
                {socialIcons.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    className="p-2 rounded-full hover:scale-110 transition"
                    style={{ color: COLORS.primary }}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="flex-1 backdrop-blur-sm" onClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;
