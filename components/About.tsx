"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cloud, Code2, Brain } from "lucide-react";

const highlights = [
  {
    title: "MCA Student",
    icon: <GraduationCap size={40} />,
  },
  {
    title: "Cloud Computing",
    icon: <Cloud size={40} />,
  },
  {
    title: "Full Stack Development",
    icon: <Code2 size={40} />,
  },
  {
    title: "Artificial Intelligence",
    icon: <Brain size={40} />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-gray-400 text-lg leading-8">
            I'm Aman Srivastav, an MCA student passionate about
            Cloud Computing, Web Development, Artificial Intelligence,
            and building real-world software solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-500
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                transition-all
              "
            >

              <div className="text-cyan-400 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}