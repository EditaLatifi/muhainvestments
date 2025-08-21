"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
<div className="bg-white md:mt-[140px] mt-[100px] md:space-y-[100px] space-y-[60px]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#050a30] to-[#233dff] text-white py-20 text-center px-6">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “Great partnerships are built on trust and communication. 
          We’d love to hear from you.”
        </motion.p>
      </section>

      {/* CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        
        {/* LEFT: TESTIMONIAL + INFO */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a0f4d] mb-6">
            What Our Partners Say
          </h2>
          <div className="space-y-6 mb-10">
            <blockquote className="p-6 bg-gray-100 rounded-xl shadow">
              <p className="italic text-gray-700">
                “Muha Investments has been a reliable partner for logistics. 
                Their professionalism and efficiency are unmatched.”
              </p>
              <footer className="mt-3 text-[#3b44f6] font-semibold">
                — Partner, Local Business
              </footer>
            </blockquote>
            <blockquote className="p-6 bg-gray-100 rounded-xl shadow">
              <p className="italic text-gray-700">
                “They don’t just transport goods; they deliver trust and growth 
                for communities.”
              </p>
              <footer className="mt-3 text-[#3b44f6] font-semibold">
                — Community Leader
              </footer>
            </blockquote>
          </div>

          <h3 className="text-xl font-bold text-[#0a0f4d] mb-4">📍 Get In Touch</h3>
          <p className="mb-2"><strong>Address:</strong> Blantyre, Malawi</p>
          <p className="mb-2"><strong>Phone:</strong> +265 XXX XXX XXX</p>
          <p><strong>Email:</strong> info@muha-investments.com</p>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          className="bg-gray-50 rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-[#0a0f4d] mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3b44f6]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3b44f6]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3b44f6]"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#3b44f6] text-white font-semibold rounded-lg hover:bg-[#2c34c7] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="w-full h-[400px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122864.82378273786!2d35.03076555!3d-15.7762085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84513cbc0005f%3A0x236358dae4d811e6!2sBlantyre%2C%20Malawi!5e0!3m2!1sen!2s!4v1755776051836!5m2!1sen!2s"  width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0">

          </iframe>
      </section>
    </div>
  );
}
