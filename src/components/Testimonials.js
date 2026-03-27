"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {

  const reviews = [
    {
      name: "Mohseen Hawaldar",
      role: "[Student (SSC & HSC)]",
      text:
        "I scored 98 marks in Maths in my SSC exams and 85.56% in HSC. The teaching method here builds strong concepts. I am now pursuing Computer Engineering.",
    },

    {
      name: "Aman Jadhav",
      role: "[Student (HSC)]",
      text:
        "I scored 88% in my 12th HSC exams. The regular tests and personal attention helped me improve a lot. I am now studying Engineering at JSPM College.",
    },

    {
      name: "Mrs. Patil",
      role: "(Parents)",
      text:
        "My child has been studying here since 1st standard and is now in 6th. The teaching is consistent and results have always been very good.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-14">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
          What Students & Parents Say
        </h2>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >

              {/* Name */}
              <div className="mb-2">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {review.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}