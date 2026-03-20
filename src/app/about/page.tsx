"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const values = [
  { title: "Integrity", desc: "We operate with honesty and full transparency in everything we do." },
  { title: "Reliability", desc: "Delivering consistent, dependable services you can count on." },
  { title: "Innovation", desc: "Continuously creating solutions for a sustainable future." },
  { title: "Community", desc: "Investing in people and local development across Malawi." },
];

const stats = [
  { number: "4+", label: "Years of Experience" },
  { number: "4", label: "Active Partners" },
  { number: "8+", label: "Assets Owned & Growing" },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/blantyre_large.jpg" alt="About Muha" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a30]/95 via-[#050a30]/80 to-[#050a30]/50" />
        </div>
        <div className="relative z-10 text-center px-6 pt-24 pb-16">
          <motion.span
            className="inline-block text-[#233dff] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Who We Are
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            About Muha Investments
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Building Malawi's future through property development and reliable transport solutions since 2021.
          </motion.p>
        </div>
      </section>

      {/* ═══ OUR STORY ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/blantyre_large.jpg"
              alt="Muha Investments"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#233dff] text-white px-5 py-3 rounded-xl shadow-xl text-sm font-bold">
              Est. October 2021
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3 mb-6 leading-snug">
              From two partners <br /> to a growing force.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Muha Investments was founded in <strong>October 2021</strong> by two partners with a clear vision — to build Malawi's future through
              reliable <strong>transport</strong> and sustainable <strong>property development</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Headquartered in <strong>Blantyre, Malawi</strong>, we have grown to four committed owners. Our fleet now spans minibuses and heavy lorries,
              serving thousands of passengers and businesses across the country — with more to come.
            </p>
            <ul className="space-y-3">
              {[
                "Founded October 2021 in Blantyre, Malawi",
                "Grown from 2 to 4 committed owners",
                "8+ fleet and property assets",
                "Serving thousands of passengers & businesses",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <FaCheckCircle className="text-[#233dff] mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-[#050a30]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ VISION & MISSION ════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">
          {[
            {
              label: "Vision",
              title: "Where we want to go.",
              text: "To be the most trusted leader in Malawi's property and transport sector — creating lasting opportunities and delivering reliable services that shape the nation's future.",
            },
            {
              label: "Mission",
              title: "How we get there.",
              text: "To connect communities, support businesses, and build sustainable investments through innovation, integrity, and dedication to the people of Malawi.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition border border-gray-100 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">{item.label}</span>
              <h3 className="text-2xl font-bold text-[#0a0f4d] mt-2 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ MID BANNER ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#050a30] via-[#0a1440] to-[#233dff]/80">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.p
            className="text-[#93a8ff] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Promise
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We don't just transport goods. <br />
            <span className="text-[#93a8ff]">We build futures.</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every km driven, every investment made — all in service of Malawi's growth.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#050a30] font-bold rounded-lg hover:bg-gray-100 transition shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Partner With Us
          </motion.a>
        </div>
      </section>

      {/* ═══ CORE VALUES ═════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#233dff] text-xs font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-extrabold text-[#0a0f4d] mt-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-[#233dff]/30 hover:shadow-xl transition group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[#233dff]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#233dff] transition-colors">
                  <span className="text-[#233dff] group-hover:text-white font-bold text-xl transition-colors">
                    {value.title[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0a0f4d] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#050a30] text-white text-center px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Be part of our story.
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Whether as a partner, investor, or customer — there is a place for you in Muha Investments' journey.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-[#233dff] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition hover:scale-105 transform"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
}
