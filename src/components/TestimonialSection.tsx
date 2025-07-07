"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    image: "/img/testimonials/avatar1.jpg",
    testimonial:
      "Working with Hajra was a fantastic experience. The professionalism and attention to detail were top-notch!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/img/testimonials/avatar2.jpg",
    testimonial:
      "Hajra always delivers great results on time. Very talented and highly recommended!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Project Manager",
    image: "/img/testimonials/avatar3.jpg",
    testimonial:
      "From planning to execution, Hajra's commitment to quality and communication is outstanding.",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="py-20 px-4 sm:px-10 bg-zinc-900 mt-32"
      id="testimonials"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-base text-center text-zinc-400 mb-10">
        Here's what people say about working with me.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              "{item.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
