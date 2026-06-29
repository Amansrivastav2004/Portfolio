"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Cloud, Trophy } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Master of Computer Applications (MCA) with a focus on Software Development, AI, and Cloud Computing.",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description:
      "Building Machine Learning, Computer Vision, and Data Science projects using Python, OpenCV, and modern AI tools.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Learning cloud technologies, scalable application deployment, and modern DevOps practices.",
  },
  {
    icon: Trophy,
    title: "Goal",
    description:
      "To become an AI Engineer / Data Scientist and build innovative solutions that solve real-world problems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-[6px] text-cyan-400"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-6xl font-black"
          >
            Know
            <span className="text-cyan-400"> Me Better</span>
          </motion.h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm Aman Srivastav 👋
            </h3>

            <p className="text-gray-400 leading-9 text-lg">
              I am currently pursuing my
              <span className="text-cyan-400 font-semibold">
                {" "}Master of Computer Applications (MCA)
              </span>.
              My passion lies in Artificial Intelligence, Data Science,
              Cloud Computing, and Full Stack Development.
            </p>

            <p className="mt-6 text-gray-400 leading-9 text-lg">
              I enjoy building intelligent applications, solving
              real-world problems, and continuously learning modern
              technologies that help create impactful digital solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                AI Enthusiast
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Data Science
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Cloud Computing
              </span>

              <span className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Full Stack Developer
              </span>

            </div>

          </motion.div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -6,
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
                    hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
                    transition-all
                  "
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}