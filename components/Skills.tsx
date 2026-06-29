"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BrainCircuit,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Python",
      "Firebase",
      "MySQL",
      "Node.js",
      "REST API",
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "OpenCV",
      "YOLO",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VS Code",
    ],
    color: "from-orange-500 to-red-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-80 h-80 bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 uppercase tracking-[6px]"
          >
            Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-6xl font-black"
          >
            My
            <span className="text-cyan-400"> Tech Stack</span>
          </motion.h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Technologies and tools that I use to build AI applications,
            modern web apps, and cloud-based solutions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.4 }}
                className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                hover:border-cyan-500
                hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
                transition-all
                "
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill, i) => (

                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      text-sm
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}