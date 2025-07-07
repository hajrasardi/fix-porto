"use client";

import Image from "next/image";
import DataImage, { listTools, listProyek } from "./data";
import type { Tool, Proyek } from "./data";

function Home() {
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
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
            I specialize in web development that utilizes HTML, CSS, JS and
            REACT etc...
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
      </div>

      {/* About Section */}
      <div className="tentang mt-32 py-10" id="tentang">
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
            My name is Hajra and I specialize in web development...
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

        {/* Tools Section */}
        <div className="tools mt-32">
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
        </div>
      </div>

      {/* Project Section */}
      <div className="proyek mt-32 py-10" id="proyek">
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
      </div>

      {/* Contact Section */}
      <div className="kontak mt-32 px-4 sm:px-10" id="kontak">
        <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>
        <p className="text-base text-center text-zinc-400 mb-10">
          Feel free to reach out to me
        </p>

        <form
          action="https://formsubmit.co/hajra.sardi466@gmail.com"
          method="POST"
          className="bg-zinc-800 rounded-xl p-6 sm:p-10 max-w-2xl mx-auto w-full shadow-md"
          autoComplete="off"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="nama" className="font-semibold block mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Enter your name"
                className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-semibold block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="pesan" className="font-semibold block mb-2">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows={6}
                placeholder="Type your message..."
                className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold py-3 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Home;
