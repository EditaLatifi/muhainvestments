"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const contactInfo = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+265 998 891 004",
    href: "tel:+265998891004",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "info@muha-investments.com",
    href: "mailto:info@muha-investments.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Blantyre, Malawi",
    href: null,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="bg-white">

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/blantyre_large.jpg" alt="Contact" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a30]/95 via-[#050a30]/80 to-[#050a30]/50" />
        </div>
        <div className="relative z-10 text-center px-6 pt-24 pb-16">
          <motion.span
            className="inline-block text-[#233dff] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Reach Out
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="max-w-xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Great partnerships are built on trust and communication. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ═══ CONTACT CARDS ═══════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid sm:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition border border-gray-100 group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#233dff]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#233dff] transition-colors duration-300">
                <item.icon className="text-[#233dff] group-hover:text-white transition-colors duration-300" size={18} />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-[#0a0f4d] font-semibold hover:text-[#233dff] transition text-sm">
                  {item.value}
                </a>
              ) : (
                <p className="text-[#0a0f4d] font-semibold text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FORM + TESTIMONIALS ═════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">

          {/* Left: Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-[#0a0f4d] mt-3 mb-8">
              What Our Partners Say
            </h2>
            <div className="space-y-6">
              {[
                {
                  quote: "Muha Investments has been a reliable partner for logistics. Their professionalism and efficiency are unmatched.",
                  author: "Partner, Local Business",
                },
                {
                  quote: "They don't just transport goods — they deliver trust and growth for communities across Malawi.",
                  author: "Community Leader",
                },
                {
                  quote: "Consistent, punctual, and professional. Muha Investments is exactly the kind of partner you want.",
                  author: "Business Owner, Blantyre",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#233dff] text-4xl font-serif leading-none absolute top-4 left-5 opacity-30">"</span>
                  <p className="text-gray-600 italic text-sm leading-relaxed pl-4">{t.quote}</p>
                  <p className="text-[#233dff] font-semibold text-sm mt-4">— {t.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Send a Message</span>
            <h2 className="text-3xl font-extrabold text-[#0a0f4d] mt-3 mb-8">Get in Touch</h2>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Full Name <span className="text-red-400">*</span></label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition bg-gray-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+265 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="How can we help?" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Message <span className="text-red-400">*</span></label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition bg-gray-50 resize-none" />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please call us on +265 998 891 004.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#233dff] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition hover:scale-[1.02] transform duration-200 text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ MAP ═════════════════════════════════════════════════ */}
      <section className="h-[420px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122864.82378273786!2d35.03076555!3d-15.7762085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84513cbc0005f%3A0x236358dae4d811e6!2sBlantyre%2C%20Malawi!5e0!3m2!1sen!2s!4v1755776051836!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </section>

    </div>
  );
}
