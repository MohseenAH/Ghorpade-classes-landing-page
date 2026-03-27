"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Gallery from "@/components/Gallery";
import BoardsSection from "@/components/BoardsSection";

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
      <TrustStrip lang={lang}/>
      <BoardsSection lang={lang}/>
      <ProblemSection lang={lang}/>
      <SolutionSection lang={lang}/>
      <Gallery lang={lang}/>
      <Testimonials lang={lang}/>
      <FinalCTA lang={lang}/>
    </>
  );
}