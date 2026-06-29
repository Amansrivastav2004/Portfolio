"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2025 - Present",
    title: "Master of Computer Applications (MCA)",
    description:
      "Pursuing MCA with specialization in AI, Data Science, Cloud Computing and Full Stack Development.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Started AI & Data Science Journey",
    description:
      "Learned Python, Machine Learning, OpenCV, and built real-world AI projects.",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Bachelor's Degree Completed",
    description:
      "Completed BCA and started building web applications and software projects.",
    icon: GraduationCap,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">
            Journey
          </p>

          <h2 className="text-5xl font-black mt-4">
            My Timeline
          </h2>
        </div>

        <div className="relative border-l-2 border-cyan-500 ml-5">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 ml-10 relative"
              >
                <div className="absolute -left-[54px] w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Icon size={22} />
                </div>

                <p className="text-cyan-400 font-bold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}