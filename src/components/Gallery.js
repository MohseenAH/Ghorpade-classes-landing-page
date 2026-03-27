"use client";

export default function Gallery({ lang }) {

  const content = {
    marathi: {
      heading: "आमच्या क्लासचे वातावरण"
    },
    english: {
      heading: "Our Classroom Environment"
    }
  };

  const data = content[lang];

  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  ];

  return (
    <section className="w-full bg-white py-14">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
          {data.heading}
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
            >

              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt="Classroom learning"
                className="w-full h-60 object-cover hover:scale-105 transition duration-300"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}