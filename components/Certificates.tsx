"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Google",
    year: "2025",
  },
  {
    title: "Cloud Computing",
    issuer: "AWS Academy",
    year: "2025",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-32 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-cyan-400">
            Achievements
          </p>

          <h2 className="text-5xl font-black mt-4">
            Certificates
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-8
              hover:border-cyan-500
              transition
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center">

                <Award size={30} />

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="text-gray-400 mt-3">

                {item.issuer}

              </p>

              <p className="text-cyan-400 mt-2">

                {item.year}

              </p>

              <button
                className="
                mt-8
                flex
                items-center
                gap-2
                text-cyan-400
                hover:text-white
                "
              >
                <ExternalLink size={18} />

                View Certificate

              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}