"use client";

import { FaCheck, FaWhatsapp } from "react-icons/fa";

export default function TrustStrip({ lang }) {
  const content = {
    marathi: {
      heading: "५००+ विद्यार्थी व पालकांचा विश्वास",

      stats: [
        "५००+ विद्यार्थ्यांचे गुण सुधारले",
        "गणितात ९८ पर्यंत गुण",
        "५+ वर्षांचा अध्यापन अनुभव",
        "साप्ताहिक चाचण्या व प्रगती ट्रॅकिंग",
      ],

      features: [
        "५ वी ते १२ वी सर्व विषय",
        "मर्यादित बॅच — वैयक्तिक लक्ष",
        "स्पर्धा व प्रवेश परीक्षा तयारी",
        "नियमित चाचण्या व प्रगती विश्लेषण",
      ],

      timingTitle: "बॅच वेळा (मर्यादित जागा)",

      timings: [
        "सकाळ: ८:०० – १०:००",
        "सायंकाळ: ४:०० – ६:००",
        "सायंकाळ: ६:०० – ८:००",
      ],

      extra: [
        "सर्व वर्ग एकाच अनुभवी शिक्षकांकडून",
        "प्रत्येक बॅचमध्ये मर्यादित विद्यार्थी",
        "नियमित व निश्चित वेळापत्रक",
      ],

      demoTitle: "७ दिवस मोफत डेमो क्लास",

      demoPoints: [
        "कोणत्याही बॅचमध्ये सहभागी व्हा",
        "शिकवण्याची पद्धत अनुभवून पहा",
        "नोंदणीसाठी WhatsApp करा",
      ],

      urgency: "मर्यादित जागा उपलब्ध",

      cta: "आता WhatsApp करा",
    },

    english: {
      heading: "Trusted by 500+ Students & Parents",

      stats: [
        "500+ Students Improved",
        "Students scored up to 98 in Maths",
        "5+ Years Teaching Experience",
        "Weekly Tests & Progress Tracking",
      ],

      features: [
        "All subjects from 5th to 12th",
        "Limited batches for personal attention",
        "Competitive & entrance exam preparation",
        "Weekly tests + performance tracking",
      ],

      timingTitle: "Batch Timings (Limited Seats)",

      timings: [
        "Morning: 8:00 – 10:00",
        "Evening: 4:00 – 6:00",
        "Evening: 6:00 – 8:00",
      ],

      extra: [
        "All classes by the same experienced teacher",
        "Limited students per batch",
        "Fixed schedule for consistent learning",
      ],

      demoTitle: "7 Days Free Demo Classes",

      demoPoints: [
        "Join any batch",
        "Experience the teaching method",
        "Contact on WhatsApp to enroll",
      ],

      urgency: "Limited seats available",

      cta: "Chat on WhatsApp",
    },
  };

  const data = content[lang];

  return (
    <section className="w-full bg-gray-100 py-14">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold mb-10">
          {data.heading}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm text-sm font-semibold"
            >
              {stat}
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="bg-blue-50 border border-green-200 p-6 rounded-xl shadow-sm max-w-md mx-auto mb-10">
          <h3 className="font-bold text-lg mb-2">{data.demoTitle}</h3>

          <p className="text-sm text-blue-700 mb-4 font-medium">
            {data.urgency}
          </p>

          <ul className="text-left text-sm mb-5 space-y-2">
            {data.demoPoints.map((point, i) => (
              <li key={i} className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919370663838"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            {data.cta}
          </a>
        </div>

        {/* Features */}
        <div className="mb-10 text-left">
          <h3 className="font-semibold mb-4">
            {lang === "marathi" ? "अभ्यास सुविधा" : "Academic Features"}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.features.map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheck className="text-blue-500 mt-1 shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timings */}
        <div className="bg-blue-600 text-white p-6 rounded-xl mb-10">
          <h3 className="font-semibold mb-4">{data.timingTitle}</h3>

          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            {data.timings.map((time, i) => (
              <span
                key={i}
                className="bg-white text-blue-700 px-4 py-2 rounded-full"
              >
                {time}
              </span>
            ))}
          </div>
        </div>

        {/* Extra */}
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {data.extra.map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-blue-500 mt-1 shrink-0" />
              <p>{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}