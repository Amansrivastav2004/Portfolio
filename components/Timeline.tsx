"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    year: "2025 - Present",
    desc: "Specializing in Software Development, Cloud Computing, and Modern Technologies.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    year: "Completed 2025",
    desc: "Studied Programming, Database Management Systems, Networking, and Software Engineering.",
  },
  {
    title: "Intermediate",
    year: "Completed 2022",
    desc: "Higher Secondary Education.",
  },
  {
    title: "High School",
    year: "Completed 2020",
    desc: "Secondary Education.",
  },
];

export default function Timeline() {
  return (
    <section
      id="education"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Education Journey
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500 ml-6">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-12 ml-10 relative"
            >

              <div
                className="
                  absolute
                  -left-[49px]
                  w-6
                  h-6
                  rounded-full
                  bg-cyan-500
                "
              />

              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  backdrop-blur-lg
                "
              >

                <p className="text-cyan-400 mb-2">
                  {item.year}
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}