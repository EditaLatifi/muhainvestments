"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaTruck, FaPhone } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f7ff] flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#233dff]/20 mx-auto">
          <Image src="/MUHA.png" alt="Muha Investments" width={64} height={64} className="object-cover" />
        </div>
      </motion.div>

      {/* 404 number */}
      <motion.h1
        className="text-[120px] md:text-[160px] font-extrabold leading-none text-[#050a30] opacity-5 select-none absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#233dff]/10 flex items-center justify-center mx-auto mb-6">
          <FaTruck className="text-[#233dff]" size={24} />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#050a30] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">
          Looks like this route doesn't exist. Let's get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#233dff] text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            <FaHome size={14} /> Go Home
          </Link>
          <a
            href="tel:+265998891004"
            className="flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-[#050a30] font-semibold rounded-xl hover:border-[#233dff] hover:text-[#233dff] transition"
          >
            <FaPhone size={13} /> Call Us
          </a>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          {[
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#233dff] transition">
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
