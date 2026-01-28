// Floating Contact Buttons Component
// Permanent on all pages (place this in your main layout like App.jsx)

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FloatingContactButtons() {
  return (
    <>
      {/* CALL BUTTON - LEFT BOTTOM */}
      <a
        href="tel:+919059117459" // change your number
        className="fixed bottom-6 left-6 z-50 bg-[#04207F] text-white p-4 rounded-full shadow-xl hover:bg-[#01A00B] transition-all duration-300 flex items-center justify-center"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WHATSAPP BUTTON - RIGHT BOTTOM */}
      <a
        href="https://wa.me/918886327899" // change your number
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#01A00B] text-white p-4 rounded-full shadow-xl hover:bg-[#04207F] transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}
