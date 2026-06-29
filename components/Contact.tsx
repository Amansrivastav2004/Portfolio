"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-[6px] text-cyan-400"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-6xl font-black"
          >
            Let's
            <span className="text-cyan-400"> Connect</span>
          </motion.h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Mail />
              </div>

              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  your@email.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Phone />
              </div>

              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">

              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <MapPin />
              </div>

              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">
                  India
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-5 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-5 rounded-xl bg-slate-900 border border-white/10 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 mb-6 rounded-xl bg-slate-900 border border-white/10 outline-none resize-none"
            />

            <button
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition"
            >
              <Send size={20} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}