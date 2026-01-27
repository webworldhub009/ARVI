import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import gi1 from "../../assets/image/s1.jpg";
import gi2 from "../../assets/image/s1.jpg";
import gi3 from "../../assets/image/s1.jpg";
import gi4 from "../../assets/image/s1.jpg";
import gi5 from "../../assets/image/s1.jpg";
import gi6 from "../../assets/image/s1.jpg";
import gi7 from "../../assets/image/s1.jpg";
import gi8 from "../../assets/image/s1.jpg";
import gi9 from "../../assets/image/s1.jpg";
import gi10 from "../../assets/image/s1.jpg";
import gi11 from "../../assets/image/s1.jpg";

const images = [
  gi1, gi2, gi3, gi4, gi5, gi6, gi7, gi8, gi9, gi10, gi11,
];

function GalleryImage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-5 sm:px-8 py-10 bg-[#F5F9FC]" id="gallery">
      {/* Masonry Gallery */}
      <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="
              cursor-pointer rounded-xl 
              transition-all duration-300
              hover:scale-[1.05]
              hover:shadow-[0_15px_40px_rgba(15,42,68,0.25)]
            "
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-[#0F2A44]/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-6xl w-full mx-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Image */}
              <img
                src={images[selectedIndex]}
                alt="Full view"
                className="
                  w-full max-h-[90vh] object-contain 
                  rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                "
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="
                  absolute top-4 right-4
                  bg-[#C9A24D] p-3 rounded-full text-white
                  hover:bg-[#f0bf57]
                  transition-all duration-300
                  shadow-lg cursor-pointer
                "
              >
                <FaTimes size={20} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="
                  absolute top-1/2 left-4 -translate-y-1/2
                  bg-[#2EC4B6]/70 p-3 rounded-full text-white
                  hover:bg-[#2EC4B6]
                  transition-all duration-300
                  shadow-lg cursor-pointer
                "
              >
                <FaChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="
                  absolute top-1/2 right-4 -translate-y-1/2
                  bg-[#2EC4B6]/70 p-3 rounded-full text-white
                  hover:bg-[#2EC4B6]
                  transition-all duration-300
                  shadow-lg cursor-pointer
                "
              >
                <FaChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryImage;
