"use client";

import Image from "next/image";
import DataImage from "@/app/data";

const HeroSection = () => {
  return (
    <section className="hero grid md:grid-cols-2 items-center pt-28 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <Image
            src={DataImage.HeroImage}
            alt="Hero"
            width={40}
            height={40}
            className="w-10 rounded-md"
          />
          <q>Seni adalah ledakan🔥🔥🔥</q>
        </div>
        <h1 className="text-5xl font-bold mb-6">Hi, I am Hajra Sardi</h1>
        <p className="text-base mb-6 opacity-50">
          I specialize in web development that utilizes HTML, CSS, JS and REACT
          etc. I am a highly motivated individual and eternal optimist dedicated
          to writing clear, concise, robust code that works. Striving to never
          stop learning and improving.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="#"
            className="bg-violet-700 p-4 rounded-xl hover:bg-violet-500"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#proyek"
            className="bg-zinc-700 p-4 rounded-xl hover:bg-zinc-500"
          >
            View Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <div>
        <Image
          src={DataImage.HeroImage}
          alt="Hero Image"
          width={500}
          height={500}
          className="md:ml-auto w-full max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
