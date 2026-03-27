"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Call */}
      <a
        href="tel:+919370663838"
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919370663838"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={22} />
      </a>

    </div>
  );
}