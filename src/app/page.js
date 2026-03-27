"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BoardsSection from "@/components/BoardsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

// Lazy load heavy sections
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  const [lang, setLang] = useState("marathi");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "marathi" ? "english" : "marathi";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <BoardsSection lang={lang} />
      <ProblemSection lang={lang} />
      <SolutionSection lang={lang} />

      {/* Lazy loaded sections */}
      <Gallery lang={lang} />
      <Testimonials lang={lang} />
      <FinalCTA lang={lang} />
    </>
  );
}