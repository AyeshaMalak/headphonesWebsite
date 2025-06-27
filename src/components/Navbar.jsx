import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-neutral-900 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#00FFB3]">SoundWave</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-[#00FFB3] transition">Home</a>
          <a href="#products" className="text-white hover:text-[#00FFB3] transition">Products</a>
          <a href="#features" className="text-white hover:text-[#00FFB3] transition">Features</a>
          <a href="#contact" className="text-white hover:text-[#00FFB3] transition">Contact</a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-neutral-900 px-6 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#home" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:text-[#00FFB3]">Home</a>
        <a href="#products" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:text-[#00FFB3]">Products</a>
        <a href="#features" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:text-[#00FFB3]">Features</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:text-[#00FFB3]">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
