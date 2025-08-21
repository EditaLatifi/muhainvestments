"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHeroDone, setIsHeroDone] = useState(false);
const assets = [
  {
    title: "15-Seater Minibus",
    desc: "Reliable passenger transport.",
    img: "/minibus-white.png", // change to your actual file path
  },
  {
    title: "5-Ton Lorry",
    desc: "For heavy goods transportation.",
    img: "/lorry-1.png", // change to your actual file path
  },
  {
    title: "5-Ton Lorry",
    desc: "Used for logistics and deliveries.",
    img: "/lorry-2.png", // change to your actual file path
  },
  {
    title: "15-Seater Minibus",
    desc: "Passenger mobility across Malawi.",
    img: "/minibus-yellow.png", // change to your actual file path
  },
];
const timeline = [
  {
    year: "2021",
    title: "Founded",
    desc: "Muha Investments started with 2 partners in Blantyre, Malawi.",
  },
  {
    year: "2022",
    title: "First Fleet Expansion",
    desc: "Added 15-seater minibuses to improve passenger transport.",
  },
  {
    year: "2023",
    title: "Goods Logistics",
    desc: "Introduced 5-ton lorries to handle cargo and goods transport.",
  },
  {
    year: "2025",
    title: "Ownership Growth",
    desc: "Now 4 committed owners and expanding planned investments.",
  },
  {
    year: "Future",
    title: "Next Chapter",
    desc: "Agriculture farms, intercity 55-seater buses, and beyond.",
  },
];

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <div className="text-center">
      <h3 className="text-5xl font-extrabold text-[#233dff]">
        {count.toLocaleString()}+
      </h3>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
}



  // Watch scroll to switch truck mode
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsHeroDone(true); // after hero
      } else {
        setIsHeroDone(false); // inside hero
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#050a30] via-[#0a1440] to-[#233dff] text-white min-h-screen pt-20 relative">
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building the Future of Transport <br /> & Development in Malawi
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-300 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Muha Investments connects communities with reliable transport and
          sustainable property development.
        </motion.p>

        {/* Big Truck in Hero (drives across screen) */}
        {!isHeroDone && (
          <motion.div
            className="absolute bottom-20 left-0 w-[200px] md:w-[300px] lg:w-[400px]"
            initial={{ x: "-100%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/truck.svg"
              alt="Moving Truck"
              width={400}
              height={200}
              className="drop-shadow-2xl"
            />
          </motion.div>
        )}

        {/* Hero Buttons */}
        <div className="flex justify-center gap-6 z-10">
          <a
            href="/services"
            className="px-8 py-3 bg-[#233dff] rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white hover:text-[#050a30] transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    {/* === SMALL FLOATING TRUCK AFTER HERO === */}
{isHeroDone && (
  <motion.div
    className="fixed left-6 top-8  md:left-8 md:top-20 z-50"
    animate={{ scale: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src="/truck.svg"
      alt="Truck Small"
      width={200}
      height={100}
      className="w-[120px] md:w-[200px]" // smaller on mobile
    />
  </motion.div>
)}


<section className="py-20 bg-white px-6">
  {/* Introduction Header */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side Image */}
    <div>
      <img
        src="/blantyre_large.jpg" // replace with your image path
        alt="Company Building"
        className="rounded-2xl shadow-lg"
      />
    </div>

    {/* Right Side Text */}
    <div className="text-left">
      <h4 className="text-gray-400 font-medium mb-2">Who We Are</h4>
      <h2 className="text-4xl font-bold text-[#0a0f4d] leading-snug mb-6">
        Founded in <span className="text-[#3b44f6]">October 2021</span> by two
        partners.
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Headquartered in <span className="font-semibold">Blantyre, Malawi</span>, 
        Muha Investments started with a simple goal: to build Malawi’s future through 
        <span className="font-semibold"> property development </span> and 
        <span className="font-semibold"> logistics services</span>.  
        Today, we are four committed owners and continue to grow steadily.
      </p>
      <button className="bg-[#3b44f6] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#2c34c7] transition">
        Contact us
      </button>
    </div>
  </div>
{/* Bottom Stats / Highlights */}
<div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
  {/* Years of Experience */}
  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#3b44f6]">
    <h3 className="text-5xl font-extrabold text-[#3b44f6] mb-3">4+</h3>
    <p className="text-gray-700 font-medium">Years of experience in this field</p>
  </div>

  {/* Location */}
  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#0a0f4d]">
    <h3 className="text-2xl font-bold text-[#0a0f4d] mb-3">📍 Blantyre, Malawi</h3>
    <p className="text-gray-700 font-medium">We know the region, we live here</p>
  </div>

  {/* Trusted Company */}
  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#3b44f6]">
    <h3 className="text-2xl font-bold text-[#0a0f4d] mb-3">🤝 Trusted & Growing</h3>
    <p className="text-gray-700 font-medium">Stable company with strong vision</p>
  </div>
</div>

</section>



<section className="py-16 bg-[#050a30] text-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Our Assets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {assets.map((asset, i) => (
        <div
          key={i}
          className="bg-[#0a1440] rounded-2xl shadow-lg p-6 flex flex-col items-center"
        >
          <div className="w-full h-72 flex items-center justify-center bg-white rounded-lg">
            <Image
              src={asset.img}
              alt={asset.title}
              width={800}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-xl font-bold mt-6">{asset.title}</h3>
          <p className="text-gray-300 mt-2 text-center">{asset.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#233dff22,transparent_70%)]"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-[#0a0f4d]"
    >
      Our Journey <span className="text-[#233dff]">& Growth</span>
    </motion.h2>

    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#233dff]"></div>

      <div className="space-y-16">
        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center"
            >
              {/* Dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#233dff] rounded-full border-4 border-white shadow-xl z-30"></span>

              {/* Card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-2xl shadow-lg bg-white border hover:shadow-2xl transition-all duration-500 relative z-20
                ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
                text-center md:text-inherit`}
              >
                <h3 className="text-2xl font-bold text-[#0a0f4d] mb-2">
                  {item.year} —{" "}
                  <span className="text-[#233dff]">{item.title}</span>
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>


 <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <Counter target={50000} label="Passengers Served" />
        <Counter target={1200} label="Trips Completed" />
        <Counter target={5000} label="Tons of Goods Delivered" />
        <Counter target={4} label="Years Strong" />
      </div>
    </section>


     <section className="py-20 px-6 text-center bg-[#0a1440]">
  <h2 className="text-3xl font-bold mb-12">Planned Investments</h2>
  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    <div className="bg-gradient-to-br from-green-600/20 to-[#050a30] p-8 rounded-xl shadow-lg">
      <Image src="/farm.jpg" alt="Agricultural Farm" width={500} height={300} className="rounded-lg mb-4"/>
      <h3 className="text-2xl font-bold mb-3">Agricultural Farm</h3>
      <p className="text-gray-300">Rice & fruit/vegetable plantations.</p>
    </div>
    <div className="bg-gradient-to-br from-blue-600/20 to-[#050a30] p-8 rounded-xl shadow-lg">
      <Image src="/bus.jpg" alt="55-seater Bus" width={500} height={300} className="rounded-lg mb-4"/>
      <h3 className="text-2xl font-bold mb-3">2 Long Distance Buses</h3>
      <p className="text-gray-300">55-seater intercity travel buses.</p>
    </div>
  </div>
</section>


<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0f4d] mb-6">
      Partner with <span className="text-[#3b44f6]">Muha Investments</span>
    </h2>
    <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
      Be part of shaping the future of <span className="font-semibold">transport</span> 
      and <span className="font-semibold">development</span> in Malawi.  
      Together, we build progress and create opportunities.
    </p>

    <a
      href="/contact"
      className="inline-block px-10 py-4 bg-gradient-to-r from-[#233dff] to-[#3b44f6] text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
    >
      Get in Touch
    </a>
  </div>
</section>


    </div>
  );
}
