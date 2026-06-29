"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
      }}
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      text-cyan-400
      "
    >
      <ChevronDown size={40} />
    </motion.div>
  );
}