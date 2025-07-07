"use client";

import Image from "next/image";
import DataImage from "@/app/data";

const AboutSection = () => {
  return (
    <section className="tentang mt-32 py-10" id="about">
      <div
        className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          src={DataImage.HeroImage}
          alt="Hero"
          width={48}
          height={48}
          className="w-12 rounded-md mb-10 sm:hidden"
        />
        <p className="text-base mb-10">
          My name is Hajra and I specialize in web development that utilizes
          HTML, CSS, JS and REACT etc. I am a highly motivated individual and
          eternal optimist dedicated to writing clear, concise, robust code that
          works. Striving to never stop learning and improving. When I'm not
          coding, I am writing blogs, reading, or picking up some new hands-on
          art project like photography.
        </p>
        <div className="flex items-center justify-between">
          <Image
            src={DataImage.HeroImage}
            alt="Hero"
            width={48}
            height={48}
            className="w-12 rounded-md sm:block hidden"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45<span className="text-violet-500">+</span>
              </h1>
              <p>Project Finished</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4<span className="text-violet-500">+</span>
              </h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
