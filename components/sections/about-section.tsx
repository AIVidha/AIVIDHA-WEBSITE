"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-transparent">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              Our <span className="text-[#007AFF]">Vision</span>
            </h2>
            <div className="h-1.5 w-16 md:w-24 bg-[#007AFF] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-blue-500/10 bg-card/40 backdrop-blur-xl p-8 md:p-12 flex items-center justify-center">
                <Logo 
                  size={mounted && typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 300} 
                  className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8 text-xl text-muted-foreground leading-relaxed"
              >
                <p>
                  <span className="font-bold text-[#007AFF]">AIVidha Academy</span> is built on a simple idea — learning AI should be practical, structured, and accessible to anyone willing to build.
                </p>
                <p>
                  In a world where artificial intelligence is rapidly shaping industries, most people are overwhelmed by scattered resources, theoretical content, and unclear learning paths. AIVidha exists to bridge that gap by providing a clear, guided journey from fundamentals to real-world application.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8 text-lg text-muted-foreground leading-relaxed bg-card/60 backdrop-blur-md p-10 rounded-[3rem] shadow-lg border border-blue-500/10"
              >
                <p>
                  We focus on hands-on learning. Every concept is paired with implementation, every module leads to a project, and every program is designed to help learners build systems they can showcase with confidence.
                </p>
                <p className="italic font-bold text-xl text-[#007AFF] border-l-8 border-[#007AFF] pl-6 py-2">
                  "We believe that the best way to understand AI is not by just studying it, but by creating with it."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
}


