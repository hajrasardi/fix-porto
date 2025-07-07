"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // Scroll Down
      } else {
        setShowNavbar(true); // Scroll Up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tools", label: "My Skills" },
    { href: "#project", label: "Project" },
    { href: "#testimonials", label: "Testimonial" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md"
    >
      <div className="navbar py-5 px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          HajraPorto
        </h1>

        {/* Hamburger Icon */}
        <button
          className="text-white text-3xl cursor-pointer md:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white sm:text-lg text-base font-medium transition-all duration-300 hover:text-violet-500 hover:underline hover:scale-105"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.ul
            className="flex flex-col items-center bg-black py-6 px-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((item) => (
              <li key={item.href} className="mb-4">
                <a
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="text-white text-lg font-medium transition-all duration-300 hover:text-violet-500 hover:underline hover:scale-105"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
