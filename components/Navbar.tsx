"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/40
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400"
        >
          Aman.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-cyan-400 transition duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="
            hidden
            md:block
            bg-cyan-500
            text-black
            px-5
            py-2
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          "
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">

          <ul className="flex flex-col p-6 gap-6 text-white">

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#education" onClick={() => setOpen(false)}>
                Education
              </a>
            </li>

            <li>
              <a href="#certificates" onClick={() => setOpen(false)}>
                Certificates
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </motion.nav>
  );
}