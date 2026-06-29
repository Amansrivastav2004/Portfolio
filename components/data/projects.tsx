"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Online Voting System",
    description:
      "Secure online voting platform with voter authentication, election management, candidate management and live vote counting.",
    tech: ["Flutter", "Firebase", "Dart"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-700",
    status: "Completed",
  },
  {
    id: "02",
    title: "Person Recognition System",
    description:
      "AI-powered face recognition system using OpenCV and Machine Learning for real-time identification and attendance management.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    gradient: "from-purple-500 via-pink-500 to-red-600",
    status: "Completed",
  },
  {
    id: "03",
    title: "Weather App",
    description:
      "Modern weather application with live forecasts, API integration and responsive UI built using Next.js.",
    tech: ["Next.js", "Tailwind CSS", "Weather API"],
    gradient: "from-orange-500 via-red-500 to-pink-600",
    status: "Completed",
  },
  {
  title: "AI Stock Market Prediction System",

  description:
    "An AI-powered stock market prediction application that fetches live stock prices, predicts future trends using Machine Learning, displays interactive charts, and allows users to search any stock in real time.",

  tech: [
    "Python",
    "Streamlit",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Plotly",
    "yFinance"
  ],

  image: "/projects/stock.png",

  github: "https://github.com/YOUR_USERNAME/stock-market-prediction",

  live: "https://your-streamlit-app.streamlit.app",

  color: "from-emerald-500 to-green-700",
}
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#030712] text-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl text-cyan-400"
          >
            <Sparkles size={18} />
            Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mt-8 text-5xl md:text-6xl font-black"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-8"
          >
            Here are some of my best projects in Artificial Intelligence,
            Machine Learning, Cloud Computing and Full Stack Development.
          </motion.p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
              group
              overflow-hidden
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-cyan-500/40
              hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
              transition-all
              duration-500
              "
            >

              {/* Top */}

              <div
                className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >

                <span className="absolute left-6 top-6 text-6xl font-black text-white/20">

                  {project.id}

                </span>

                <span className="absolute right-5 top-5 px-3 py-1 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 text-xs">

                  {project.status}

                </span>

                <h3 className="text-3xl font-bold text-center px-6 z-10">

                  {project.title}

                </h3>

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="text-gray-400 leading-8">

                  {project.description}

                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-8">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-400
                      text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Button */}

                <button
                  className="
                  mt-8
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-3
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  py-4
                  rounded-2xl
                  font-bold
                  transition
                  duration-300
                  group-hover:scale-105
                  "
                >

                  <ExternalLink size={20} />

                  View Details

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}