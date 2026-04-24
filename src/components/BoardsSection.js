"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function BoardsSection({ lang }) {

  const content = {
    marathi: {
      heading: "आम्ही शिकवणारे बोर्ड व वर्ग",

      boards: [
        "SSC Board",
        "HSC Board",
        "CBSE Board",
        "ICSE Board"
      ],

      classes: [
        "५ वी ते १० वी सर्व विषय",
        "११ वी – १२ वी (Science / Commerce / Arts)",
        "Scholarship / NMMS तयारी"
      ]
    },

    english: {
      heading: "Boards & Classes We Teach",

      boards: [
        "SSC Board",
        "HSC Board",
        "CBSE Board",
        "ICSE Board"
      ],

      classes: [
        "All subjects from 5th to 10th",
        "11th & 12th (Science / Commerce / Arts)",
        "Scholarship / NMMS Preparation"
      ]
    }
  };

  const data = content[lang];

  return (
    <section id="courses" className="w-full bg-gray-50 py-14">

      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
          {data.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Boards */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">
              Boards
            </h3>

            <ul className="space-y-2">
              {data.boards.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">
              Classes
            </h3>

            <ul className="space-y-2">
              {data.classes.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}