"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "AI",
    label: "Developer",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 mt-12">

      {stats.map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ scale: 1.08 }}
        >
          <h2 className="text-4xl font-black text-cyan-400">
            {item.number}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.label}
          </p>
        </motion.div>

      ))}

    </div>
  );
}