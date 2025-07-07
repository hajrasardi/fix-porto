"use client";

import Image from "next/image";
import { listTools } from "@/app/data";
import type { Tool } from "@/app/data";

const SkillsSection = () => {
  return (
    <section className="tools mt-32" id="tools">
      <h1 className="text-4xl font-bold mb-4">My Skills</h1>
      <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50">
        Here are some tools I commonly use...
      </p>
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map((tool: Tool) => (
          <div
            key={tool.id}
            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={tool.dad}
            data-aos-once="true"
          >
            <Image
              src={tool.gambar}
              alt={tool.nama}
              width={56}
              height={56}
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
            />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
