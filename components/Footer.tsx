"use client";

import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}

          <div>

            <h2 className="text-2xl font-bold">
              Aman <span className="text-cyan-400">Srivastav</span>
            </h2>

            <p className="text-gray-400 mt-2">
              MCA Student • AI Enthusiast • Full Stack Developer
            </p>

          </div>

          {/* Center */}

          <div className="text-center text-gray-400">

            © {new Date().getFullYear()} Aman Srivastav

            <div className="flex items-center justify-center gap-2 mt-2">
              Made with
              <Heart
                size={18}
                className="text-red-500 fill-red-500"
              />
              using Next.js & Tailwind CSS
            </div>

          </div>

          {/* Right */}

          <motion.a
            href="#home"
            whileHover={{
              y: -5,
              scale: 1.1,
            }}
            className="
            w-12
            h-12
            rounded-full
            bg-cyan-500
            flex
            items-center
            justify-center
            text-black
            "
          >
            <ArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}