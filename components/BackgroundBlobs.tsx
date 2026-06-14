"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/30
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/30
          blur-[120px]
        "
      />

    </div>
  );
}