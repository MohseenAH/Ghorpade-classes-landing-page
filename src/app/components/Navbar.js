import React, { useState } from 'react';

const Navbar = () => {
  const [isMarathi, setIsMarathi] = useState(true);

  // Content for the Navbar
  const navContent = {
    mr: {
      brand: "घोरपडे कोचिंग क्लासेस",
      call: "आताच कॉल करा",
      lang: "English"
    },
    en: {
      brand: "Ghorpade Classes",
      call: "Call Now",
      lang: "मराठी"
    }
  };

  const t = isMarathi ? navContent.mr : navContent.en;

  const toggleLanguage = () => setIsMarathi(!isMarathi);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* 1. BRAND / LOGO */}
        <div className="flex items-center gap-2">
          {/* You can replace this with your actual logo file */}
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
            {t.brand}
          </span>
        </div>

        {/* 2. ACTIONS (Toggle + Call) */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-indigo-600 transition-all duration-300 bg-white"
          >
            <span className="text-xs font-semibold text-slate-500 group-hover:text-indigo-600 uppercase tracking-wider">
              {t.lang}
            </span>
          </button>

          {/* "Call Now" Button - Hidden on very small screens, shown on mobile up */}
          <a
            href="tel:9370663838"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-indigo-200 transition-all active:scale-95"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={2} stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="hidden sm:inline">{t.call}</span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;