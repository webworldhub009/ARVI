import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div
      id="contact"
      className="min-h-[90vh] w-full flex items-center justify-center bg-[#06141B] py-14 px-4"
    >
      <section className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10">

          {/* LEFT – INFO */}
          <div className="p-10 md:p-12 text-white bg-gradient-to-br from-[#0B1C26] via-[#0E2A36] to-[#03303A]">
            <h2 className="text-3xl font-bold mb-8">
              Contact ARVI Solutions
              <span className="block mt-2 w-20 h-[3px] bg-[#C9A24D] rounded"></span>
            </h2>

            {/* ADDRESS */}
            <div className="flex gap-4 mb-7 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] text-xl group-hover:scale-110 transition">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Plot No. 6 Ground Floor Kalyanpuri Colony Road Opposite Sai Ambika Vihar Visatath Enclave, Azmath Nagar, Uppal, Hyderabad, Telangana 500039
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Plot No. 8-43/9/10 Ground Floor West Bajali Nearby Street No. 6 Sri Laxmi Narsimha Tent House Balaji Hill Colony Uppal Hyderabad Telangana 500039
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4 mb-7 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] text-xl group-hover:scale-110 transition">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a
                  href="tel:+918050949588"
                  className="text-white/80 hover:text-[#C9A24D] transition text-sm"
                >
                  +91 80509 49588
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] text-xl group-hover:scale-110 transition">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:Arunn@arvisolutions.in"
                  className="text-white/80 hover:text-[#C9A24D] transition text-sm"
                >
                  Arunn@arvisolutions.in
                </a><br />
                <a
                  href="mailto:Helpdesk@arvisolutions.in"
                  className="text-white/80 hover:text-[#C9A24D] transition text-sm"
                >
                  Helpdesk@arvisolutions.in
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C9A24D] hover:text-[#230304] transition transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="p-10 md:p-12 bg-[#FFFDFA]">
            <h2 className="text-3xl font-bold mb-6 text-[#0B1C26]">
              Send Us a Message
              <span className="block mt-2 w-24 h-[3px] bg-[#C9A24D] rounded"></span>
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A24D]/60 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A24D]/60 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A24D]/60 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A24D]/60 outline-none"
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0B1C26] text-white font-semibold hover:bg-[#C9A24D] hover:text-[#230304] transition-all duration-300 shadow-lg cursor-pointer"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactInfo;
