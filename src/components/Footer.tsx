"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold">HajraPorto</h1>

      {/* Navigation Links */}
      <div className="flex gap-7">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#project">Project</Link>
      </div>

      {/* Social Icons (gunakan Remix Icon di index.html atau _app.tsx) */}
      <div className="flex gap-3">
        <a href="#" aria-label="GitHub">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#" aria-label="Reddit">
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
