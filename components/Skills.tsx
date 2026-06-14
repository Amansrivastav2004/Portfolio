"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Cpu,
  Globe,
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    icon: <Globe size={40} />,
    description: "HTML, CSS, JavaScript, React, Next.js",
  },
  {
    title: "Python",
    icon: <Code2 size={40} />,
    description: "Flask, Automation, AI Projects",
  },
  {
    title: "Database",
    icon: <Database size={40} />,
    description: "MySQL, Database Design",
  },
 
  {
    title: "JAVA",
    icon: <Code2 size={40} />,
    description: "Academic Projects, OOP Concepts",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                hover:border-cyan-500
                hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
                transition-all
              "
            >

              <div className="text-cyan-400 mb-5">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-400">
                {skill.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}