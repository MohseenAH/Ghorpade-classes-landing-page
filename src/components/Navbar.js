"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ lang, toggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
    marathi: {
      logo: "घोरपडे क्लासेस",
      toggle: "ENGLISH",
      menu: [
        { name: "होम", id: "#home" },
        { name: "कोर्सेस", id: "#courses" },
        { name: "संपर्क", id: "#contact" }
      ],
      call: "आताच कॉल करा",
    },
    english: {
      logo: "Ghorpade Classes",
      toggle: "मराठी",
      menu: [
        { name: "Home", id: "#home" },
        { name: "Courses", id: "#courses" },
        { name: "Contact", id: "#contact" }
      ],
      call: "Call Now",
    },
  };

  const t = content[lang];

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-[70] flex items-center">
      <nav className="max-w-7xl mx-auto w-full px-4 md:px-6 flex items-center justify-between">
        
        {/* 🏷️ LOGO SECTION */}
        <Link href="#home" className="flex items-center gap-2 shrink-0">
          <div className="bg-red-600 text-white w-9 h-9 flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-red-100">
            G
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
            {t.logo}
          </span>
        </Link>

        {/* 💻 DESKTOP NAV LINKS (Center) */}
        <div className="hidden md:flex items-center gap-10">
          {t.menu.map((item, i) => (
            <a
              key={i}
              href={item.id}
              className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* ⚡ ACTION GROUP */}
        <div className="flex items-center gap-2">
          
          {/* LANGUAGE TOGGLE - Always Visible */}
          <button
            onClick={toggleLang}
            className="
             /* Mobile Styles (Default) */
             bg-blue-600 text-white text-[14px] font-black px-3 py-1.5 rounded-xl border-2 border-blue-600
             /* Desktop Styles (Override at 768px+) */
             md:bg-transparent md:text-blue-600 md:border-blue-100 md:hover:bg-blue-50 md:text-[14px]  
             /* Animations & Shared */
             transition-all active:scale-90 uppercase tracking-wide"
          >
            {t.toggle}
          </button>

          {/* CALL CTA - DESKTOP ONLY */}
          <a
            href="tel:9370663838"
            className="hidden md:flex bg-blue-600 text-white px-5 py-2.5 rounded-xl items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
          >
            <FiPhone className="text-white text-lg" />
            <span className="text-sm font-bold">{t.call}</span>
          </a>

          {/* MOBILE MENU TOGGLE - Shows on Mobile instead of Call */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl p-1 text-gray-800 md:hidden transition-transform active:rotate-12"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* 📱 MOBILE FLOATING MENU */}
      {menuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[-1] md:hidden" 
            onClick={() => setMenuOpen(false)} 
          />
          
          <div className="md:hidden absolute top-20 left-0 right-0 mx-auto w-[92%] max-w-sm rounded-4xl bg-white border border-gray-100 p-6 shadow-2xl z-60 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col space-y-2">
              {t.menu.map((item, i) => (
                <a
                  key={i}
                  href={item.id}
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-4 text-center text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-gray-50 mt-2">
                <a
                  href="tel:9370663838"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-blue-600 text-white font-extrabold shadow-2xl shadow-blue-200 active:scale-95 transition-transform"
                >
                  <FiPhone className="text-xl" /> {t.call}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}