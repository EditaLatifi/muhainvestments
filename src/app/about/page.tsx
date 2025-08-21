"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white md:mt-[120px] mt-[100px]">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#050a30] via-[#0a1440] to-[#233dff] text-white py-24 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Muha Investments
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Building Malawi’s future through property development and reliable
          transport solutions since 2021.
        </motion.p>
      </section>

      {/* COMPANY STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/blantyre_large.jpg" // 🔹 Replace with your image (pexels/truck/office)
            alt="Muha Investments"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#0a0f4d] mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Muha Investments was founded in <span className="font-semibold">October 2021</span> by two partners, and by 2025 expanded to four owners. 
            Headquartered in <span className="font-semibold">Blantyre, Malawi</span>, we focus on{" "}
            <span className="font-semibold">property development</span> and{" "}
            <span className="font-semibold">transportation logistics</span> for goods and passengers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to empower communities, support businesses, and create a sustainable 
            future through trusted investments and reliable services.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "4+", label: "Years of Experience" },
            { number: "4", label: "Active Partners" },
            { number: "8+", label: "Assets Owned & Growing" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-[#3b44f6] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div
          className="bg-gradient-to-br from-[#233dff]/10 to-[#050a30]/10 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#0a0f4d]">🌍 Vision</h2>
          <p className="text-gray-700">
            To be a trusted leader in Malawi’s property and transport sector,
            creating opportunities and delivering reliable services that shape
            the nation’s future.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-blue-600/10 to-[#233dff]/10 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#0a0f4d]">🎯 Mission</h2>
          <p className="text-gray-700">
            To connect communities, support businesses, and build sustainable
            investments through innovation, integrity, and dedication.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-[#0a0f4d] text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We operate with honesty and transparency." },
              { title: "Reliability", desc: "Delivering consistent and dependable services." },
              { title: "Innovation", desc: "Creating solutions for a sustainable future." },
              { title: "Community", desc: "Investing in people and local development." },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-200 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
