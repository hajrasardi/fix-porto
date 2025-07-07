"use client";

import Image from "next/image";
import { listProyek } from "@/app/data";
import type { Proyek } from "@/app/data";

const ProjectsSection = () => {
  return (
    <section className="proyek mt-32 py-10" id="proyek">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Project
      </h1>
      <p
        className="text-base text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here are some projects I have worked on.
      </p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map((proyek: Proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={proyek.dad}
            data-aos-once="true"
          >
            <Image
              src={proyek.gambar}
              alt={proyek.nama}
              width={500}
              height={300}
              className="w-full rounded-md"
            />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-500"
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
