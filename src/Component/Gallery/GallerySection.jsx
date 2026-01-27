import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import gs1 from "../../assets/image/w4.jpg";
import gs2 from "../../assets/image/w4.jpg";
import gs3 from "../../assets/image/w4.jpg";
import gs4 from "../../assets/image/w4.jpg";
import gs5 from "../../assets/image/w4.jpg";
import gs6 from "../../assets/image/w4.jpg";
import gs7 from "../../assets/image/w4.jpg";
import gs8 from "../../assets/image/w4.jpg";
import gs9 from "../../assets/image/w4.jpg";
import gs10 from "../../assets/image/w4.jpg";

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    { src: gs1, title: "Luxury Cabin Design" },
    { src: gs2, title: "Corporate Elevator" },
    { src: gs3, title: "Modern Escalator" },
    { src: gs4, title: "Retail Access Lift" },
    { src: gs5, title: "Commercial Escalator" },
  ];

  const moreGallery = [
    { src: gs6, title: "Industrial Lift System" },
    { src: gs7, title: "Glass Door Elevator" },
    { src: gs8, title: "Automatic Escalator" },
    { src: gs9, title: "High-Rise Tower Elevator" },
    { src: gs10, title: "Smart Building Access" },
  ];

  return (
    <div>
      {/* 🔹 MAIN GALLERY SECTION */}
      <section className="bg-white" id="product">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* First Large Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
                onClick={() => setSelectedImage(galleryData[0].src)}
              >
                <img
                  src={galleryData[0].src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#41B9E8]/40 to-black/20 group-hover:opacity-70 transition"></div>
                <h3 className="z-10 text-2xl font-semibold text-white absolute top-0 left-0 p-4 md:text-3xl">
                  {galleryData[0].title}
                </h3>
              </div>
            </div>

            {/* Middle Section */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 cursor-pointer"
                onClick={() => setSelectedImage(galleryData[1].src)}
              >
                <img
                  src={galleryData[1].src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#41B9E8]/40 to-black/20 group-hover:opacity-70 transition"></div>
                <h3 className="z-10 text-2xl font-semibold text-white absolute top-0 left-0 p-4 md:text-3xl">
                  {galleryData[1].title}
                </h3>
              </div>

              <div className="grid gap-4 grid-cols-2">
                {[galleryData[2], galleryData[3]].map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 cursor-pointer"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#41B9E8]/40 to-black/20 group-hover:opacity-70 transition"></div>
                    <h3 className="z-10 text-2xl font-semibold text-white absolute top-0 left-0 p-4 md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
                onClick={() => setSelectedImage(galleryData[4].src)}
              >
                <img
                  src={galleryData[4].src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#41B9E8]/40 to-black/20 group-hover:opacity-70 transition"></div>
                <h3 className="z-10 text-2xl font-semibold text-white absolute top-0 left-0 p-4 md:text-3xl">
                  {galleryData[4].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 ADDITIONAL GALLERY SECTION */}
      <section className="bg-[#FFFDFA] py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {moreGallery.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40 cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#41B9E8]/30 to-black/10 group-hover:opacity-80 transition"></div>
              <h3 className="z-10 text-xl font-semibold text-white absolute top-0 left-0 p-4 md:text-2xl">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-[#41B9E8] p-3 rounded-full text-white hover:bg-[#2F3293] transition-all z-50"
              >
                <FaTimes size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GallerySection;
