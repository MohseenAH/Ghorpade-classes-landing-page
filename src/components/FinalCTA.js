"use client";

import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function FinalCTA({ lang }) {

  const content = {
    marathi: {
      heading: "आजच तुमच्या मुलाच्या अभ्यासाची सुरुवात करा",

      sub: "मर्यादित जागा उपलब्ध — आजच संपर्क करा",

      whatsapp: "WhatsApp करा",
      call: "कॉल करा",

      addressTitle: "पत्ता",

      address:
        "वृंदावन पार्क, दत्तानगर, वडकी रोड, वडकी, ता. हवेली, जि. पुणे",

      timing: "सकाळ व सायंकाळ बॅच उपलब्ध",

      note: "७ दिवस मोफत डेमो क्लास उपलब्ध",
    },

    english: {
      heading: "Start Improving Your Child’s Studies Today",

      sub: "Limited seats available — Contact now",

      whatsapp: "Chat on WhatsApp",
      call: "Call Now",

      addressTitle: "Address",

      address:
        "Vrundavan Park, Datta Nagar, Wadki Road, Wadki, Tal. Haveli, Pune, Maharashtra",

      timing: "Morning & evening batches available",

      note: "7 days free demo classes available",
    },
  };

  const data = content[lang];

  return (
    <>

      {/* Final CTA Section */}
      <section className="w-full bg-blue-500 text-white py-14">

        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {data.heading}
          </h2>

          {/* Sub */}
          <p className="mb-8 text-sm sm:text-base text-blue-100">
            {data.sub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919370663838"
              className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              {data.whatsapp}
            </a>

            {/* Call */}
            <a
              href="tel:+919370663838"
              className="bg-blue-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition"
            >
              <FaPhoneAlt />
              {data.call}
            </a>

          </div>

          {/* Info Card */}
          <div className="bg-blue-700 p-6 rounded-xl text-left max-w-md mx-auto shadow-md">

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="mt-1 text-blue-200" />

              <div>
                <p className="font-semibold">{data.addressTitle}</p>

                <p className="text-sm text-blue-100">
                  {data.address}
                </p>
              </div>
            </div>

            {/* Timing */}
            <p className="text-sm mb-2 text-blue-100">
              ⏰ {data.timing}
            </p>

            {/* Demo */}
            <p className="text-sm font-medium text-white">
              🎯 {data.note}
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">

        <div className="max-w-5xl mx-auto px-4 text-center text-sm">

          <p className="mb-2">
            © {new Date().getFullYear()} Ghorpade Classes
          </p>

          <p className="flex items-center justify-center gap-2">

            Built by Ghorpade Madam's Student <a
              href="https://mohseenalihawaldar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-amber-500"
              >
              Mohseen Hawaldar
              </a>

            <a
              href="https://in.linkedin.com/in/mohseenalihawaldar"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </p>

        </div>

      </footer>

    </>
  );
}