import React, { useState } from "react";
import logo from '../../assets/Logo.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-white border-b border-gray-100">
      
      {/* Left Section: Logo */}
      <div>
        <img className="w-24 " src={logo} alt="" srcset="" />
      </div>

      <div className="hidden md:flex items-center space-x-12">
        <a href="#home" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">Home</a>
        <a href="#pages" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Pages</a>
        <a href="#portfolio" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Portfolio</a>
        <a href="#blog" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Blog</a>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        
        <a 
          href="mailto:info@floka.com" 
          className="hidden md:block text-sm font-medium text-gray-900 hover:underline decoration-1 underline-offset-4"
        >
          info@floka.com
        </a>
        <div className="hidden md:block h-6 w-[1px] bg-gray-200"></div>

        <button className="hidden md:flex flex-col gap-1 group">
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-black rounded-full group-hover:bg-gray-600"></span>
            <span className="w-1 h-1 bg-black rounded-full group-hover:bg-gray-600"></span>
          </div>
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-black rounded-full group-hover:bg-gray-600"></span>
            <span className="w-1 h-1 bg-black rounded-full group-hover:bg-gray-600"></span>
          </div>
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col space-y-6 mt-10">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">Home</a>
            <a href="#pages" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">Pages</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">Portfolio</a>
            <a href="#blog" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">Blog</a>
            <div className="pt-6 border-t border-gray-100">
              <a href="mailto:info@floka.com" className="text-sm font-medium text-gray-600 underline">info@floka.com</a>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
