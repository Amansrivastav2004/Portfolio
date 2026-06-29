"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Stock Market Prediction",
    description:
      "AI-powered stock market prediction system with live stock prices, machine learning forecasting, interactive charts, and search functionality for any stock.",
    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Plotly",
      "yFinance",
    ],
    color: "from-emerald-500 to-green-700",
  },

  {
    title: "Online Voting System",
    description:
      "Secure online voting platform with voter authentication, election management, candidate management and real-time result tracking.",
    tech: ["Flutter", "Google Firebase", "Dart"],
    color: "from-cyan-500 to-blue-700",
  },

  {
    title: "Person Recognition System",
    description:
      "AI-powered face recognition system using OpenCV and Machine Learning for person identification and attendance management.",
    tech: [
      "Python",
      "OpenCV",
      "Machine Learning",
      "SQLite",
    ],
    color: "from-purple-500 to-pink-700",
  },

  {
    title: "Weather App",
    description:
      "Modern weather application with live forecasts, location tracking and beautiful responsive UI design.",
    tech: ["Next.js", "Tailwind CSS", "Weather API"],
    color: "from-orange-500 to-red-600",
  },

  {
    title: "Autonomous Science Officer",
    description:
      "AI-based geological object detection system using YOLO for autonomous planetary exploration and terrain analysis.",
    tech: [
      "Python",
      "YOLO",
      "OpenCV",
      "Artificial Intelligence",
    ],
    color: "from-indigo-500 to-violet-700",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{ duration: 0.4 }}
              className="
                rounded-3xl
                overflow-hidden
                bg-white/5
                border
                border-white/10
                backdrop-blur-lg
                hover:border-cyan-500
                hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                transition-all
              "
            >

              {/* Header */}
              <div
                className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <h3 className="text-2xl font-bold text-center px-4">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/20
                        text-cyan-400
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <div className="mt-8">

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      bg-cyan-500
                      text-black
                      px-5
                      py-3
                      rounded-xl
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    <ExternalLink size={18} />
                    Project Details
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}