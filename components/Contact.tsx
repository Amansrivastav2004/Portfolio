"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <h3 className="text-3xl font-semibold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              I'm always interested in discussing new projects,
              cloud technologies, web development, and exciting
              opportunities.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>srivastavaman274@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Mirzapur, Uttar Pradesh</span>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-lg
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-black/30
                border
                border-white/10
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-black/30
                border
                border-white/10
              "
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-black/30
                border
                border-white/10
              "
            />

            <button
              className="
                bg-cyan-500
                text-black
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}