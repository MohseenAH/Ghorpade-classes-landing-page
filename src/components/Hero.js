"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

export default function Hero({ lang }) {
  const content = {
    marathi: {
      brand: "घोरपडे कोचिंग क्लासेस",
      line1: "मार्क्सची चिंता थांबवा.",
      line2: "खरे रिझल्ट पाहायला सुरू करा.",
      sub: "१ ली ते १२ वी | सर्व बोर्ड | स्कॉलरशिप तयारी",
      trust: "⭐ 500+ विद्यार्थ्यांचे मार्क्स सुधारले",
      ctaWA: "Free Demo Book करा",
      ctaCall: "आत्ताच कॉल करा",
      msg: "Hi, मला Wadaki (Saswad Road) येथील Ghorpade Classes बद्दल माहिती हवी आहे आणि डेमो क्लास बुक करायचा आहे"
    },
    english: {
      brand: "Ghorpade Coaching Classes",
      line1: "Stop Worrying About Marks.",
      line2: "Start Seeing Real Results.",
      sub: "1st to 12th | All Boards | Scholarship Prep",
      trust: "⭐ 500+ Students Improved Their Results",
      ctaWA: "Book Free Demo Now",
      ctaCall: "Call Now",
      msg: "Hi, I found Ghorpade Classes in Wadaki (Saswad Road Pune) on Google. I want to book a demo class."
    }
  };

  const t = content[lang];

  return (
    <section id="home" className="
      relative w-full 
      py-5
      pb-6 
      px-5 sm:px-6 
      bg-linear-to-b from-blue-50/50 to-white
    ">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {t.brand}
          </span>

          {/* 🔥 CONTROLLED HEADLINE */}
          <h1 className="mt-3 font-black text-slate-900 leading-[1.1] tracking-tight text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] max-w-[320px] sm:max-w-125 md:max-w-130">
          Best Coaching Classes in Wadaki, Saswad Road Pune
          </h1>
          <p className="mt-2 text-blue-600 font-bold text-lg">
            {t.line1} {t.line2}
          </p>

          <p className="mt-2 text-sm md:text-base text-slate-600 font-medium max-w-sm">
            {t.sub}
          </p>

          <p className="mt-1 text-xs text-slate-500 font-semibold">
            {t.trust}
          </p>
          <p className="mt-1 text-xs text-slate-500 font-semibold">
            📍 Wadaki, Saswad Road, Pune (Near Datta Colony)
          </p>

          <div className="mt-5 flex flex-col w-full max-w-65 gap-3">
            <a
              href={`https://wa.me/919370663838?text=${encodeURIComponent(t.msg)}`}
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-2xl font-bold shadow-md active:scale-95 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-lg" />
              {t.ctaWA}
            </a>

            <a
              href="tel:9370663838"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-2xl font-bold shadow-md active:scale-95 transition"
            >
              <FiPhoneCall className="text-base" />
              {t.ctaCall}
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">

          <div className="
            w-full 
            max-w-[320px] sm:max-w-md 
            md:max-w-150
            aspect-4/3   /* 🔥 removes height bloat */
            relative
          ">
            <Image
              src="/HeroGC.webp"
              alt="Students studying at Ghorpade Coaching Classes in Wadaki Pune"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover rounded-3xl shadow-xl ring-4 ring-white"
              priority
            />
            <div className=" rounded-3xl absolute inset-0 bg-black/20"></div>
          </div>
          

        </div>

      </div>
    </section>
  );
}