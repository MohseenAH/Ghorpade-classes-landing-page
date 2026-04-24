"use client";

import { FaCheckCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SolutionSection({ lang }) {
  const content = {
    marathi: {
      heading: "आम्ही विद्यार्थ्यांना कसे सुधारतो",

      steps: [
        {
          title: "संकल्पना स्पष्ट करणे",
          desc: "प्रत्येक विषय सोप्या पद्धतीने समजावून सांगितला जातो.",
        },
        {
          title: "नियमित चाचण्या",
          desc: "साप्ताहिक टेस्टद्वारे प्रगती तपासली जाते.",
        },
        {
          title: "वैयक्तिक लक्ष",
          desc: "प्रत्येक विद्यार्थ्यावर स्वतंत्र लक्ष दिले जाते.",
        },
        {
          title: "प्रगती ट्रॅकिंग",
          desc: "कमजोरी ओळखून सुधारणा केली जाते.",
        },
      ],

      outcome:
        "यामुळे विद्यार्थ्यांचा आत्मविश्वास वाढतो आणि परीक्षेत चांगले गुण मिळतात.",

      teacherTitle: "आपल्या मुलाला कोण शिकवणार?",
      teacherName: "वैशाली घोरपडे मॅडम",

      teacherInfo: [
        "५+ वर्षांचा अध्यापन अनुभव",
        "गणित व सायन्स विषयात विशेष लक्ष",
        "प्रत्येक विद्यार्थ्यावर वैयक्तिक लक्ष",
      ],

      location: "वडकी, पुणे",
      cta: "आता WhatsApp वर संपर्क करा",
    },

    english: {
      heading: "How We Help Students Improve",

      steps: [
        {
          title: "Concept Clarity",
          desc: "Every topic is explained in a simple and easy way.",
        },
        {
          title: "Regular Tests",
          desc: "Weekly tests to track performance and improvement.",
        },
        {
          title: "Personal Attention",
          desc: "Individual focus on every student.",
        },
        {
          title: "Progress Tracking",
          desc: "Weak areas are identified and improved.",
        },
      ],

      outcome:
        "This helps students gain confidence and score better in exams.",

      teacherTitle: "Who Will Teach Your Child?",
      teacherName: "Vaishali Ghorpade Madam",

      teacherInfo: [
        "5+ Years Teaching Experience",
        "Special focus on Maths & Science",
        "Personal attention to every student",
      ],

      location: "Wadki, Pune",
      cta: "Chat on WhatsApp Now",
    },
  };

  const data = content[lang];

  return (
    <section className="w-full bg-gray-50 py-14">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold mb-10">
          {data.heading}
        </h2>

        {/* Teaching Process Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-left mb-10">
          <ul className="space-y-4">
            {data.steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-10">
          <p className="text-green-700 font-medium">
            {data.outcome}
          </p>
        </div>

        {/* Teacher Card With Image */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-10">

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">

            {/* Teacher Image */}
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              alt="Teacher"
              className="w-32 h-32 rounded-xl object-cover shadow-md"
            />

            {/* Teacher Info */}
            <div className="text-left">

              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FaUserTie className="text-blue-600" />
                {data.teacherTitle}
              </h3>

              <p className="font-bold text-lg mb-3">
                {data.teacherName}
              </p>

              <ul className="space-y-2 text-sm mb-4">
                {data.teacherInfo.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="flex items-center gap-2 text-sm text-gray-700">
                <FaMapMarkerAlt className="text-red-500" />
                {data.location}
              </p>

            </div>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/919370663838"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-green-600 transition shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          {data.cta}
        </a>

      </div>
    </section>
  );
}