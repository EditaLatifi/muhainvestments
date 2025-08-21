"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
<div className="bg-white md:mt-[140px] mt-[100px] md:space-y-[100px] space-y-[60px]">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#050a30] via-[#0a1440] to-[#233dff] text-white py-24 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From property development to reliable transport solutions — Muha
          Investments is building Malawi’s future with strength and vision.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Property Development",
            desc: "We own 4 plots of land pending development, with a vision to create modern, sustainable housing and business spaces for communities.",
            img: "/property.jpg", // replace with pexels/unsplash photo
          },
          {
            title: "Passenger Transport",
            desc: "Our fleet of 15-seater minibuses ensures safe and reliable daily travel across Malawi.",
            img: "/passenger.jpg",
          },
          {
            title: "Goods Transport",
            desc: "With 5-ton lorries, we provide reliable logistics services for moving goods across regions.",
            img: "/goods.jpg",
          },
          {
            title: "Planned Investments",
            desc: "Expanding into agriculture and intercity travel to diversify and serve Malawi better.",
            img: "/future.jpg",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Image
              src={service.img}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-semibold text-[#0a0f4d] mb-3">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FUTURE INVESTMENTS TIMELINE */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0a0f4d] mb-12">
            Our Planned Investments
          </h2>
          <div className="relative border-l-4 border-[#233dff] text-left pl-8 space-y-12">
            {[
              {
                year: "2025",
                title: "Agricultural Farm",
                desc: "Launching rice and fruit/vegetable plantations to boost food security.",
              },
              {
                year: "2026",
                title: "55-Seater Long Distance Buses",
                desc: "Expanding passenger transport with intercity travel services.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md p-6 rounded-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#3b44f6]">
                  {item.year} — {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0a0f4d] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Partner With Us
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Together, we can drive development and create opportunities across
          Malawi. Let’s shape the future side by side.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-10 py-4 bg-[#233dff] text-white font-bold rounded-lg shadow-lg hover:bg-[#0a0f4d] transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}
