"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050a30]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.4)]"
            : "bg-[#050a30]"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#233dff]/60">
              <Image src="/MUHA.png" alt="Muha Investments" width={40} height={40} className="object-cover" priority />
            </div>
            <span className="hidden sm:block text-white font-bold text-lg tracking-wide leading-tight">
              Muha <span className="text-[#233dff]">Investments</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                    isActive ? "text-[#233dff]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#233dff] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+265998891004"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <FaPhone className="text-[#233dff] text-xs" />
              +265 998 891 004
            </a>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-5 py-2 bg-[#233dff] text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition cursor-pointer"
              >
                Get in Touch
              </motion.span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-[#050a30] z-50 md:hidden flex flex-col px-8 pt-8 pb-10 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close + Logo */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#233dff]/60">
                    <Image src="/MUHA.png" alt="Muha" width={36} height={36} className="object-cover" />
                  </div>
                  <span className="text-white font-bold text-base">Muha <span className="text-[#233dff]">Inv.</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-3 px-4 rounded-lg text-base font-semibold transition-all ${
                        isActive
                          ? "bg-[#233dff]/20 text-[#233dff]"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Phone + Socials */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <a
                  href="tel:+265998891004"
                  className="flex items-center gap-3 text-gray-300 hover:text-white text-sm font-medium transition"
                >
                  <FaPhone className="text-[#233dff]" />
                  +265 998 891 004
                </a>
                <div className="flex gap-3">
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#233dff] text-white transition"><FaFacebookF size={14} /></a>
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#233dff] text-white transition"><FaTwitter size={14} /></a>
                  <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#233dff] text-white transition"><FaLinkedinIn size={14} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
