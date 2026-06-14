"use client";

import { motion } from "framer-motion";

const certificates = [
  "Cloud Computing",
  "Python Programming",
  "Cyber Security",
  "Web Development",
  "Database Management",
  "Artificial Intelligence",
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                backdrop-blur-lg
                hover:border-cyan-500
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {certificate}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}