"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

import AuroraBackground from "./AuroraBackground";
import FloatingParticles from "./FloatingParticles";
import FloatingIcons from "./FloatingIcons";
import AnimatedGrid from "./AnimatedGrid";
import MouseGlow from "./MouseGlow";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] text-white min-h-screen flex items-center"
    >
      {/* Background Effects */}
      <AuroraBackground />
      <FloatingParticles />
      <AnimatedGrid />
      <MouseGlow />
      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

                     <p className="text-cyan-400 font-semibold tracking-widest uppercase">
              👋 Welcome To My Portfolio
            </p>

            <h1 className="mt-6 text-6xl lg:text-7xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aman
              </span>

              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Srivastav
              </span>
            </h1>

            <h2 className="mt-8 text-2xl lg:text-3xl font-semibold text-gray-300">
              <Typewriter
                words={[
                  "AI Enthusiast",
                  "Full Stack Developer",
                  "Cloud Computing Learner",
                  "MCA Student",
                  "Machine Learning Explorer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-9 max-w-2xl">
              Passionate about Artificial Intelligence, Machine Learning,
              Cloud Computing and Full Stack Development. I enjoy creating
              modern, scalable and user-friendly applications that solve
              real-world problems while continuously learning new technologies.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  px-7
                  py-4
                  font-semibold
                  text-black
                  hover:scale-105
                  transition
                "
              >
                View Projects
                <ArrowRight size={20} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-500
                  px-7
                  py-4
                  font-semibold
                  hover:bg-cyan-500
                  hover:text-black
                  transition
                "
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-700
                  px-7
                  py-4
                  hover:border-cyan-500
                  transition
                "
              >
                <Mail size={18} />
                Email
              </a>

            </div>

            <HeroStats />

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

<div className="relative">

  {/* Outer Glow */}

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.5, 0.9, 0.5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      absolute
      -inset-8
      rounded-full
      bg-cyan-500/20
      blur-3xl
    "
  />

  {/* Rotating Ring */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-0
      rounded-full
      border-2
      border-dashed
      border-cyan-400/30
      scale-110
    "
  />

  {/* Profile Image */}

  <motion.img
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    src="/profile.png.jpeg"
    alt="Aman Srivastav"
    className="
      relative
      z-10
      w-80
      h-80
      lg:w-[430px]
      lg:h-[430px]
      rounded-full
      object-cover
      border-4
      border-cyan-500
      shadow-[0_0_70px_rgba(34,211,238,.35)]
    "
  />

  {/* Floating Badge */}

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      absolute
      -right-6
      top-10
      rounded-2xl
      bg-white/10
      backdrop-blur-xl
      border
      border-cyan-500/30
      px-5
      py-3
    "
  >
    🚀 AI Developer
  </motion.div>

  {/* Second Badge */}

  <motion.div
    animate={{
      y: [0, 12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      absolute
      -left-6
      bottom-10
      rounded-2xl
      bg-white/10
      backdrop-blur-xl
      border
      border-cyan-500/30
      px-5
      py-3
    "
  >
    ☁️ Cloud Computing
  </motion.div>

</div>

</motion.div>
              {/* End Right Side */}

        </div>

        {/* Scroll Indicator */}

        <ScrollIndicator />

      </div>

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-40
          bg-gradient-to-t
          from-[#030712]
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}