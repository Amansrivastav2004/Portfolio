"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999]">

      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-24 h-24 rounded-full border-4 border-cyan-500 border-t-transparent mx-auto"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-3xl font-bold"
        >
          Aman <span className="text-cyan-400">Srivastav</span>
        </motion.h1>

        <p className="text-gray-400 mt-2">
          Loading Portfolio...
        </p>

      </div>

    </div>
  );
}