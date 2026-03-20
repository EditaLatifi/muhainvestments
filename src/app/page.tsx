"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaCheckCircle, FaTruck, FaMapMarkerAlt, FaUsers, FaStar, FaChevronDown } from "react-icons/fa";

/* ─── Data ─────────────────────────────────────────────────── */

const fleet = [
  { title: "15-Seater Minibus", tag: "Passenger", img: "/minibus-white.png" },
  { title: "5-Ton Lorry", tag: "Goods Transport", img: "/lorry-1.png" },
  { title: "5-Ton Lorry", tag: "Goods Transport", img: "/lorry-2.png" },
  { title: "15-Seater Minibus", tag: "Passenger", img: "/minibus-yellow.png" },
  { title: "Truck", tag: "Goods Transport", img: "/trucknew.jpeg" },
  { title: "Truck", tag: "Goods Transport", img: "/trucknew11.jpeg" },
  { title: "Truck", tag: "Goods Transport", img: "/truck111.jpeg" },
];

const stats = [
  { target: 50000, label: "Passengers Served", suffix: "+" },
  { target: 1200, label: "Trips Completed", suffix: "+" },
  { target: 5000, label: "Tons of Goods Delivered", suffix: "+" },
  { target: 4, label: "Years Strong", suffix: "+" },
];

const whyUs = [
  { icon: FaTruck, title: "Growing Fleet", desc: "From minibuses to heavy lorries — our fleet is built to handle any transport need across Malawi." },
  { icon: FaMapMarkerAlt, title: "Local Expertise", desc: "Born and based in Blantyre, we know the roads, the regions, and the people we serve." },
  { icon: FaCheckCircle, title: "Reliable & On Time", desc: "We have built our reputation on punctuality and consistency every single day." },
  { icon: FaUsers, title: "Community First", desc: "We invest back into Malawi — connecting communities, creating opportunity, building the future." },
];

const timeline = [
  { year: "2021", title: "Founded", desc: "Muha Investments started with 2 partners in Blantyre, Malawi." },
  { year: "2022", title: "First Fleet Expansion", desc: "Added 15-seater minibuses to improve passenger transport." },
  { year: "2023", title: "Goods Logistics", desc: "Introduced 5-ton lorries to handle cargo and goods transport." },
  { year: "2025", title: "Ownership Growth", desc: "Now 4 committed owners and expanding planned investments." },
  { year: "Future", title: "Next Chapter", desc: "Agriculture farms, intercity 55-seater buses, and beyond." },
];

/* ─── Counter ───────────────────────────────────────────────── */
function Counter({ target, label, suffix }: { target: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-5xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-400 mt-2 text-sm font-medium uppercase tracking-widest">{label}</p>
    </div>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
const homeFaqs = [
  {
    q: "What transport services does Muha Investments offer?",
    a: "We offer passenger transport using 15-seater minibuses and goods/cargo transport using 5-ton lorries. We serve individuals, businesses, and organisations across Malawi.",
  },
  {
    q: "Where do you operate in Malawi?",
    a: "We are headquartered in Blantyre and operate across Malawi, serving both urban and rural communities for passenger and goods transport needs.",
  },
  {
    q: "How do I book a transport service?",
    a: "You can contact us directly by calling +265 998 891 004, sending an email to info@muha-investments.com, or using the contact form on our website. We respond promptly to all enquiries.",
  },
  {
    q: "Do you handle goods delivery for businesses?",
    a: "Yes. Our 5-ton lorries are available for businesses needing regular or one-off goods transport and logistics support across Malawi.",
  },
  {
    q: "Is Muha Investments involved in property development?",
    a: "Yes. We own several plots of land in Blantyre with plans for sustainable housing and commercial development. Contact us to discuss investment or partnership opportunities.",
  },
];

function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-3">Everything you need to know about Muha Investments.</p>
        </div>
        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
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

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white text-[#0a0f4d]">

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f5f7ff]">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#233dff]/5 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#233dff]/5 blur-2xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <motion.span
              className="inline-block text-[#233dff] text-sm font-semibold uppercase tracking-widest mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Blantyre, Malawi — Est. 2021
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#050a30] leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Moving Malawi <br />
              <span className="text-[#233dff]">Forward.</span>
            </motion.h1>

            <motion.p
              className="text-gray-500 text-lg max-w-lg leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Muha Investments connects communities with reliable passenger transport,
              goods logistics, and sustainable property development across Malawi.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="/services"
                className="px-8 py-3.5 bg-[#233dff] text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-[#233dff]/25"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 border border-gray-300 text-[#050a30] font-semibold rounded-lg hover:border-[#233dff] hover:text-[#233dff] transition"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Hero stat chips */}
            <motion.div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: "50,000+", label: "Passengers" },
                { value: "1,200+", label: "Trips" },
                { value: "5,000+", label: "Tons Delivered" },
                { value: "8+", label: "Fleet Assets" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-[#050a30]">{s.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Vehicle image card */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
              <Image
                src="/lorry-1.png"
                alt="Muha Fleet"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#233dff]/10 flex items-center justify-center">
                <FaTruck className="text-[#233dff]" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Active Fleet</p>
                <p className="text-[#050a30] font-bold text-sm">8+ Vehicles</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══ WHO WE ARE ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#233dff]/10 blur-2xl" />
            <Image
              src="/blantyre_large.jpg"
              alt="Blantyre Malawi"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#233dff] text-white px-5 py-3 rounded-xl shadow-xl text-sm font-bold">
              4+ Years of Trust
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3 mb-6 leading-snug">
              A Malawian company <br /> built on trust.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in <strong>October 2021</strong> by two partners in Blantyre, Muha Investments has grown to
              four committed owners. We started with a clear goal — to build Malawi's future through reliable
              <strong> transport</strong> and sustainable <strong>property development</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today our fleet spans minibuses and heavy lorries, serving thousands of passengers
              and businesses across the country.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaStar className="text-[#233dff]" /> 4 committed owners
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaStar className="text-[#233dff]" /> Blantyre-based, Malawi-wide
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaStar className="text-[#233dff]" /> 8+ fleet assets
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Why Us</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">
              Why Choose Muha Investments
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#233dff]/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#233dff]/10 flex items-center justify-center mb-5 group-hover:bg-[#233dff] transition-colors duration-300">
                  <item.icon className="text-[#233dff] group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <h3 className="font-bold text-[#0a0f4d] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#050a30]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Counter key={i} target={s.target} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </section>

      {/* ═══ FLEET GALLERY ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Our Vehicles</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Our Fleet</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">A growing collection of vehicles serving passengers and businesses across Malawi.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((vehicle, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={vehicle.img}
                  alt={vehicle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a30]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Tag always visible */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#233dff] text-white text-xs font-semibold rounded-full">
                  {vehicle.tag}
                </span>
                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white font-bold text-lg">{vehicle.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE BANNER ════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/goods.jpg" alt="Goods Transport" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#050a30]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-[#233dff] text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Promise
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Connecting communities <br /> across Malawi, one journey at a time.
          </motion.h2>
          <motion.a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#233dff] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Work With Us
          </motion.a>
        </div>
      </section>

      {/* ═══ JOURNEY / TIMELINE ══════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Our History</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">
              Our Journey &amp; Growth
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-dashed border-[#233dff]/30" />
            <div className="space-y-14">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    className="relative flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {/* Dot */}
                    <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#233dff] rounded-full border-4 border-white shadow-lg z-10" />
                    <div className={`w-full md:w-5/12 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                      <span className="text-xs font-bold text-[#233dff] uppercase tracking-widest">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#0a0f4d] mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANNED INVESTMENTS ═════════════════════════════════ */}
      <section className="py-24 bg-[#050a30] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">What's Next</span>
            <h2 className="text-4xl font-extrabold mt-3">Planned Investments</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { img: "/farm.jpg", label: "2025", title: "Agricultural Farm", desc: "Rice & fruit/vegetable plantations supporting food security in Malawi." },
              { img: "/bus.jpg", label: "2026", title: "2 Long Distance Buses", desc: "55-seater intercity travel buses connecting cities across Malawi." },
            ].map((inv, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden relative group shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64">
                  <Image src={inv.img} alt={inv.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#050a30]/60" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#233dff] text-white text-xs font-bold rounded-full">{inv.label}</span>
                </div>
                <div className="bg-[#0a1440] p-6">
                  <h3 className="text-xl font-bold mb-2">{inv.title}</h3>
                  <p className="text-gray-400 text-sm">{inv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═════════════════════════════════════════════════ */}
      <HomeFaq />

      {/* ═══ CALL TO ACTION ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Partner With Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0f4d] mt-3 mb-6">
            Ready to build Malawi's future together?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
            Whether you need reliable transport, logistics support, or a trusted investment partner — Muha Investments is here.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-4 bg-[#233dff] text-white font-bold text-lg rounded-xl shadow-xl hover:bg-blue-600 transition hover:scale-105 transform duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
