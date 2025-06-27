import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FFB3] mb-4">SoundWave</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium headphones crafted for music lovers, gamers, and pros alike.
            Experience next-level audio like never before.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#00FFB3] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Products</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-lg font-semibold text-[#00FFB3] mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">FAQs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Shipping</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Returns</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#00FFB3]">Warranty</a></li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="text-lg font-semibold text-[#00FFB3] mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-[#00FFB3]"><Facebook size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#00FFB3]"><Twitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#00FFB3]"><Instagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#00FFB3]"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-neutral-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SoundWave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
