"use client";

import { motion } from "framer-motion";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "MySQL",
  "Next.js",
  "Tailwind CSS",
  "Cloud Computing",
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {techs.map((tech, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10
                text-center
                backdrop-blur-lg
              "
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {tech}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}