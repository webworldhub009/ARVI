import React from "react";

function ContactMap() {
  return (
    <div>
      <section className="text-gray-700 body-font relative ">
        <div className=" inset-0 bg-gray-300 h-140 w-full ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248877.46613079114!2d77.615228!3d12.926325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12de2f0ad35f%3A0x6836b0602bf69e9a!2sStanis%20Elevators!5e0!3m2!1sen!2sus!4v1760693313898!5m2!1sen!2sus" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Diamond Elevators Map"
          ></iframe>
        </div>

        {/* <div className="container px-5 py-14 mx-auto flex justify-center"> */}
      {/* <div className="lg:w-1/3 md:w-1/2 bg-white shadow-2xl rounded-2xl p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#D65C5F]/50"> */}
        
        {/* Title */}
        {/* <h2
          className="text-3xl font-bold mb-4 text-center"
          style={{
            background: "linear-gradient(90deg, #D65C5F, #2F3293)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Me
        </h2> */}

        {/* <p className="text-gray-600 text-center mb-8">
          I’d love to hear from you! Fill out the form below and I’ll get back
          to you soon.
        </p> */}

        {/* Name */}
        {/* <input
          className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D65C5F] text-base px-4 py-3 mb-4 transition duration-200"
          placeholder="Full Name"
          type="text"
        /> */}

        {/* Phone */}
        {/* <input
          className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F3293] text-base px-4 py-3 mb-4 transition duration-200"
          placeholder="Phone Number"
          type="tel"
        /> */}

        {/* Email */}
        {/* <input
          className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D65C5F] text-base px-4 py-3 mb-4 transition duration-200"
          placeholder="Email"
          type="email"
        /> */}

        {/* Message */}
        {/* <textarea
          className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F3293] text-base px-4 py-3 mb-6 resize-none h-32 transition duration-200"
          placeholder="Your Message"
        ></textarea> */}

        {/* Submit Button */}
        {/* <button
          className="text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #D65C5F, #2F3293)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #2F3293, #D65C5F)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #D65C5F, #2F3293)";
          }}
        >
          Send Message
        </button> */}

        {/* <p className="text-xs text-gray-500 mt-5 text-center">
          We value your feedback and appreciate your time 💬
        </p> */}
      {/* </div> */}
    {/* </div> */}
      </section>
    </div>
  );
}

export default ContactMap;
