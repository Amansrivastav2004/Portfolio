"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

const icons = [
  {
    icon: <FaReact size={32} />,
    x: -170,
    y: -100,
    delay: 0,
  },
  {
    icon: <FaPython size={32} />,
    x: 170,
    y: -80,
    delay: 0.5,
  },
  {
    icon: <FaHtml5 size={32} />,
    x: -180,
    y: 110,
    delay: 1,
  },
  {
    icon: <FaCss3Alt size={32} />,
    x: 180,
    y: 120,
    delay: 1.5,
  },
  {
    icon: <FaJs size={32} />,
    x: 0,
    y: -180,
    delay: 2,
  },
  {
    icon: <FaDatabase size={32} />,
    x: 0,
    y: 180,
    delay: 2.5,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay,
          }}
          className="absolute text-cyan-400"
          style={{
            left: `calc(50% + ${item.x}px)`,
            top: `calc(50% + ${item.y}px)`,
          }}
        >
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
            {item.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
}