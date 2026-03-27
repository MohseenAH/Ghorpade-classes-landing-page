"use client";

import { FaExclamationCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

export default function ProblemSection({ lang }) {
  const content = {
    marathi: {
      heading: "तुमच्या मुलाच्या अभ्यासाबद्दल चिंता आहे का?",

      problems: [
        "खूप अभ्यास करूनही मार्क्स वाढत नाहीत?",
        "शाळेत वैयक्तिक लक्ष मिळत नाही?",
        "गणित व सायन्स समजायला कठीण जात आहे?",
        "मोबाईलमुळे अभ्यासात लक्ष लागत नाही?",
        "परीक्षेच्या वेळी आत्मविश्वास कमी होतो?",
      ],

      consequence:
        "योग्य वेळी योग्य मार्गदर्शन मिळाले नाही तर मुलाचा आत्मविश्वास आणि भविष्यातील निकाल दोन्ही धोक्यात येऊ शकतात.",

      teacherTitle: "आपल्या मुलाला कोण शिकवणार?",

      teacher: [
        "अनुभवी शिक्षकांकडून थेट मार्गदर्शन",
        "गणित व सायन्स विषयात विशेष लक्ष",
        "प्रत्येक विद्यार्थ्यावर वैयक्तिक लक्ष",
        "नियमित टेस्ट व प्रगती ट्रॅकिंग",
      ],

      cta: "आता WhatsApp करा (जागा मर्यादित)",
      sub: "आज संपर्क केल्यास डेमो बॅच मिळेल",
    },

    english: {
      heading: "Worried About Your Child’s Studies?",

      problems: [
        "Studying hard but marks are not improving?",
        "No personal attention in school classes?",
        "Finding Maths & Science difficult?",
        "Losing focus due to mobile distractions?",
        "Low confidence during exams?",
      ],

      consequence:
        "Without proper guidance at the right time, your child’s confidence and future results can be at risk.",

      teacherTitle: "Who Will Teach Your Child?",

      teacher: [
        "Direct guidance by an experienced teacher",
        "Strong focus on Maths & Science",
        "Personal attention for every student",
        "Regular tests and progress tracking",
      ],

      cta: "Chat on WhatsApp Now (Limited Seats)",
      sub: "Contact today to get a demo batch",
    },
  };

  const data = content[lang];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold mb-8">
          {data.heading}
        </h2>

        {/* Problems */}
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {data.problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaExclamationCircle className="text-red-500 mt-1 shrink-0" />
              <p className="text-sm sm:text-base">{problem}</p>
            </div>
          ))}
        </div>
        </div>
        

        {/* Consequence */}
        <div className="bg-red-100 border border-red-300 p-4 rounded-lg mb-10">
          <p className="text-sm sm:text-base font-semibold text-red-700">
            {data.consequence}
          </p>
        </div>

        {/* 🔥 Teacher Authority Block */}
        <div className="bg-gray-100 p-5 rounded-xl mb-10 text-left">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FaUserTie className="text-green-600" />
            {data.teacherTitle}
          </h3>

          <ul className="space-y-2 text-sm">
            {data.teacher.map((item, i) => (
              <li key={i} className="flex gap-2">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🚀 Strong CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-green-600 transition shadow-md"
        >
          <FaWhatsapp />
          {data.cta}
        </a>

        <p className="text-xs mt-3 text-gray-500">
          {data.sub}
        </p>

      </div>
    </section>
  );
}