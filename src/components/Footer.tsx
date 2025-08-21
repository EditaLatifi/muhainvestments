import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f4d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <Image
            src="/MUHA.png" // <-- replace with your actual logo file in /public
            alt="Muha Investments Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-gray-300 mt-2 text-sm">
            Our Satisfaction is Your Happiness
          </p>
        </div>

        {/* Menu */}
   <div>
  <h3 className="font-semibold text-lg mb-3">Menu</h3>
  <ul className="space-y-2 text-gray-300">
    <li>
      <Link href="/" className="hover:text-[#3b44f6] transition">
        Home
      </Link>
    </li>
    <li>
      <Link href="/services" className="hover:text-[#3b44f6] transition">
        Services
      </Link>
    </li>
    <li>
      <Link href="/about" className="hover:text-[#3b44f6] transition">
        About Us
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-[#3b44f6] transition">
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#3b44f6]" /> Blantyre, Malawi
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#3b44f6]" /> info@muha-investments.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#3b44f6] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#3b44f6] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#3b44f6] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 mt-10 border-t border-white/10 pt-6">
        <p>&copy; {new Date().getFullYear()} Muha Investments. All rights reserved.</p>
      </div>
    </footer>
  );
}
