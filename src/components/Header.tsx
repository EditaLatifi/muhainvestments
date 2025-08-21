"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed w-full top-0 z-50 shadow-xl"
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 🔹 Top Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs md:text-sm flex items-center justify-between px-4 md:px-8 py-2 shadow-md">
        <p className="tracking-wide hidden sm:flex items-center space-x-2">
          <span>✨</span> <span>Your satisfaction is our happiness</span>
        </p>
        <div className="flex items-center space-x-4 md:space-x-5">
          <Link
            href="mailto:info@muhainvestments.com"
            className="hidden sm:flex items-center space-x-2 hover:text-yellow-200 transition"
          >
            <FaEnvelope /> <span>info@muhainvestments.com</span>
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-300 transition hover:scale-110">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-sky-300 transition hover:scale-110">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-200 transition hover:scale-110">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="bg-gradient-to-r from-[#050a30] via-[#0a0f4d] to-[#050a30] backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-6 md:py-8 text-white relative">
          
          {/* Left Menu (Desktop) */}
          <nav className="hidden md:flex space-x-12 text-lg font-semibold">
            {["Home", "Services", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[3px] bg-[#233dff] shadow-[0_0_8px_#233dff] transition-all duration-300 ease-in-out group-hover:w-full w-0 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <motion.div whileHover={{ scale: 1.1 }} className="rounded-full p-2 md:p-3 bg-gradient-to-r from-[#233dff] to-blue-500 shadow-[0_0_25px_rgba(35,61,255,0.6)]">
              <Image
                src="/MUHA.png"
                alt="Muha Investments Logo"
                width={70}
                height={70}
                priority
                className="rounded-full drop-shadow-xl"
              />
            </motion.div>
          </Link>

          {/* Right CTA (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#233dff] to-blue-600 text-white font-bold shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-3/4 h-full bg-[#0a0f4d] shadow-2xl z-40 flex flex-col items-center pt-24 space-y-8 text-lg font-semibold text-white"
        >
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-[#233dff] transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
