"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 mb-4"
          >
            👋 Welcome To My Portfolio
          </motion.p>

          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-6xl font-bold"
          >
            Aman Srivastav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl mt-5 text-gray-400"
          >
            MCA Student | Developer / AI Enthusiast
          </motion.h2>

          <p className="mt-6 text-gray-400 leading-8">
            Passionate about Cloud Computing,
            AI, Web Development,
            and building scalable applications.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-semibold"
            >
              View Projects
            </button>

            <button
              className="border border-cyan-500 px-6 py-3 rounded-xl"
            >
              Resume
            </button>

          </div>
          <div className="flex gap-10 mt-12">

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      10+
    </h3>
    <p className="text-gray-400">
      Projects
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      MCA
    </h3>
    <p className="text-gray-400">
      Student
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">
      5+
    </h3>
    <p className="text-gray-400">
      Technologies
    </p>
  </div>

</div>

        </div>

        <motion.div
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
          className="flex justify-center"
        >

          <img
            src="/profile.png.jpeg"
            alt="profile"
            className="w-80 h-80 rounded-full border-4 border-cyan-500 object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}