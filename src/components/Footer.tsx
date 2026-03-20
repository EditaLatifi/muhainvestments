import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#03071a] text-white">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#233dff] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">

        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#233dff]/50">
              <Image src="/MUHA.png" alt="Muha Investments" width={44} height={44} className="object-cover" />
            </div>
            <span className="text-white font-bold text-xl tracking-wide">
              Muha <span className="text-[#233dff]">Investments</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Building Malawi's future through reliable transport and sustainable property development since 2021.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#233dff] hover:text-white hover:bg-[#233dff]/20 transition">
              <FaFacebookF size={13} />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#233dff] hover:text-white hover:bg-[#233dff]/20 transition">
              <FaTwitter size={13} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#233dff] hover:text-white hover:bg-[#233dff]/20 transition">
              <FaLinkedinIn size={13} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-4 h-[1px] bg-[#233dff] group-hover:w-6 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-5">Contact Us</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:+265998891004"
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#233dff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#233dff]/30 transition">
                  <FaPhone className="text-[#233dff]" size={12} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition">+265 998 891 004</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@muha-investments.com"
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#233dff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#233dff]/30 transition">
                  <FaEnvelope className="text-[#233dff]" size={12} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition">info@muha-investments.com</p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#233dff]/10 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-[#233dff]" size={12} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-gray-200 text-sm font-medium">Blantyre, Malawi</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <p className="text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Muha Investments. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
