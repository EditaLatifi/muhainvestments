"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHome, FaBus, FaTruck, FaSeedling, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const services = [
  {
    icon: FaHome,
    title: "Property Development",
    desc: "We own 4 plots of land in Blantyre, with a vision to build modern, sustainable housing and commercial spaces that elevate communities.",
    img: "/property.jpg",
    tag: "Development",
  },
  {
    icon: FaBus,
    title: "Passenger Transport",
    desc: "Our fleet of 15-seater minibuses provides safe and reliable daily travel for thousands of passengers across Malawi.",
    img: "/passenger.jpg",
    tag: "Transport",
  },
  {
    icon: FaTruck,
    title: "Goods Transport",
    desc: "With 5-ton lorries and growing, we deliver reliable logistics for businesses moving cargo across regions of Malawi.",
    img: "/goods.jpg",
    tag: "Logistics",
  },
  {
    icon: FaSeedling,
    title: "Planned Investments",
    desc: "Expanding into agriculture and intercity travel — rice and vegetable farms plus 55-seater long-distance buses by 2026.",
    img: "/future.jpg",
    tag: "Future",
  },
];

const planned = [
  {
    year: "2025",
    title: "Agricultural Farm",
    desc: "Launching rice and fruit/vegetable plantations to boost food security and rural employment across Malawi.",
    img: "/farm.jpg",
  },
  {
    year: "2026",
    title: "55-Seater Long Distance Buses",
    desc: "Expanding passenger transport with intercity travel services connecting major cities across Malawi.",
    img: "/bus.jpg",
  },
];

const servicesFaqs = [
  {
    q: "How do I request a transport quote?",
    a: "Fill in the quote form on this page with your service type, pickup location, destination, and date. We will get back to you promptly with pricing and availability.",
  },
  {
    q: "What is the capacity of your minibuses?",
    a: "Our passenger minibuses seat up to 15 people, making them ideal for group travel, school transport, corporate transfers, and community travel across Malawi.",
  },
  {
    q: "What types of goods can you transport?",
    a: "Our 5-ton lorries can handle a wide range of cargo — agricultural produce, construction materials, retail goods, and general freight. Contact us to discuss specific requirements.",
  },
  {
    q: "Do you offer regular/scheduled transport routes?",
    a: "Yes, we operate regular passenger routes across Malawi. Contact us to find out about routes near you or to arrange a dedicated service for your business or group.",
  },
  {
    q: "Can I hire a lorry for a single delivery?",
    a: "Absolutely. We offer both one-off and recurring logistics arrangements depending on your needs. Get in touch and we will tailor a solution for you.",
  },
  {
    q: "Are your vehicles insured and licensed?",
    a: "Yes. All Muha Investments vehicles are fully insured and operate in compliance with Malawi transport regulations, ensuring the safety of passengers and cargo.",
  },
];

function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Common Questions</h2>
          <p className="text-gray-500 mt-3">Everything you need to know before getting started.</p>
        </div>
        <div className="space-y-3">
          {servicesFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm md:text-base transition-colors ${open === i ? "text-[#233dff]" : "text-[#0a0f4d]"}`}>
                  {faq.q}
                </span>
                <FaChevronDown
                  className={`shrink-0 ml-4 text-[#233dff] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  size={14}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fields, setFields] = useState({ serviceType: "", name: "", phone: "", pickup: "", destination: "", date: "", details: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Get Started</span>
          <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Request a Quote</h2>
          <p className="text-gray-500 mt-3">Tell us what you need — we'll get back to you quickly.</p>
        </div>
        {status === "success" ? (
          <motion.div
            className="bg-white rounded-2xl shadow-md p-12 text-center border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0a0f4d] mb-2">Request Received!</h3>
            <p className="text-gray-500">We'll be in touch shortly. You can also call us on{" "}
              <a href="tel:+265998891004" className="text-[#233dff] font-semibold">+265 998 891 004</a>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Service type */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Service Type <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Passenger Transport", "Goods Transport", "Property", "Other"].map((type) => (
                    <label key={type} className="relative cursor-pointer">
                      <input type="radio" name="serviceType" value={type} className="peer sr-only" required onChange={() => setFields((p) => ({ ...p, serviceType: type }))} />
                      <div className={`text-center py-3 px-2 rounded-xl border text-xs font-semibold transition ${fields.serviceType === type ? "border-[#233dff] bg-[#233dff]/5 text-[#233dff]" : "border-gray-200 text-gray-500"}`}>
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Full Name <span className="text-red-400">*</span></label>
                  <input required name="name" value={fields.name} onChange={handleChange} type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone <span className="text-red-400">*</span></label>
                  <input required name="phone" value={fields.phone} onChange={handleChange} type="tel" placeholder="+265 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Pickup Location</label>
                  <input name="pickup" value={fields.pickup} onChange={handleChange} type="text" placeholder="e.g. Blantyre" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Destination</label>
                  <input name="destination" value={fields.destination} onChange={handleChange} type="text" placeholder="e.g. Lilongwe" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Preferred Date</label>
                <input name="date" value={fields.date} onChange={handleChange} type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Additional Details</label>
                <textarea name="details" value={fields.details} onChange={handleChange} rows={4} placeholder="Describe your needs — cargo type, number of passengers, frequency, etc." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#233dff]/40 focus:border-[#233dff] transition resize-none" />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please call +265 998 891 004.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-[#233dff] text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition hover:scale-[1.02] transform duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : <><span>Submit Request</span><FaArrowRight size={14} /></>}
              </button>
              <p className="text-center text-xs text-gray-400">
                Or call us directly: <a href="tel:+265998891004" className="text-[#233dff] font-semibold">+265 998 891 004</a>
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-white">

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/goods.jpg" alt="Services" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a30]/95 via-[#050a30]/80 to-[#050a30]/50" />
        </div>
        <div className="relative z-10 text-center px-6 pt-24 pb-16">
          <motion.span
            className="inline-block text-[#233dff] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We Offer
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From property development to reliable transport solutions — Muha Investments is building Malawi's future with strength and vision.
          </motion.p>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Services</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-gray-100 bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#050a30]/30" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#233dff] text-white text-xs font-semibold rounded-full">
                    {service.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#233dff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#233dff] transition-colors duration-300">
                      <service.icon className="text-[#233dff] group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                    <h2 className="text-xl font-bold text-[#0a0f4d]">{service.title}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID BANNER ══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/passenger.jpg" alt="Transport" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#050a30]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Reliable. Local. <span className="text-[#233dff]">Growing.</span>
          </motion.h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Every journey we make, every delivery we complete is a commitment to Malawi's progress.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#233dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Get a Quote <FaArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══ PLANNED INVESTMENTS ═════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">What's Next</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Planned Investments</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We are not stopping here. The next chapter of Muha Investments is already in motion.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {planned.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group border border-gray-100"
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative h-52">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#050a30]/30" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#233dff] text-white text-xs font-bold rounded-full">{item.year}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a0f4d] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE REQUEST ═══════════════════════════════════════ */}
      <QuoteForm />

      {/* ═══ FAQ ═════════════════════════════════════════════════ */}
      <ServicesFaq />

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#050a30] text-white text-center px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to partner with us?
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Let's shape the future of Malawi's transport and development together.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-[#233dff] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition hover:scale-105 transform"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
