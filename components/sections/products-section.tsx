"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-20 px-4 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-[#007AFF] mb-4 tracking-wide uppercase backdrop-blur-md">
            Our Products
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Proprietary <span className="text-[#007AFF]">AI Platforms</span>
          </h2>
        </motion.div>

        {/* Featured Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <Link 
            href="/products/medai-studio" 
            className="group block relative rounded-[2.5rem] md:rounded-[3rem] border border-blue-500/20 bg-card/60 dark:bg-[#070b14]/80 backdrop-blur-2xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(0,122,255,0.2)] hover:-translate-y-1 cursor-pointer"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#007AFF]/25 via-cyan-500/15 to-indigo-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Clean & Classy Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                {/* Category Pill */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-[#007AFF] border border-blue-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                    Cardiac MRI Focus
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight transition-colors duration-300 group-hover:text-[#007AFF]">
                  MedAI Studio
                </h3>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl font-semibold text-[#007AFF] mt-2 mb-3">
                  The Medical Imaging AI Development Platform
                </p>

                {/* Motto */}
                <p className="text-xs sm:text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6">
                  Build · Annotate · Benchmark · Optimize · Deploy
                </p>

                {/* Concise 1-sentence value proposition */}
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-normal mb-8 max-w-xl">
                  A unified platform empowering researchers and healthcare institutions to build, evaluate, and deploy medical imaging AI — starting with quantitative Cardiac MRI workflows.
                </p>

                {/* Classy Action Pill Button */}
                <div>
                  <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#007AFF] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 group-hover:bg-[#0066FF] group-hover:shadow-blue-500/40 transition-all duration-300">
                    <span>Explore MedAI Studio</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>

              {/* Right Column: Aesthetic Cardiac MRI & Waveform Art */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center">
                  
                  {/* Subtle ambient light core */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#007AFF]/20 to-cyan-500/20 blur-2xl group-hover:scale-110 transition-transform duration-700" />

                  {/* Concentric MRI Resonator Rings */}
                  <div className="absolute w-64 h-64 rounded-full border border-blue-500/15" />
                  <div className="absolute w-52 h-52 rounded-full border border-blue-400/20 border-dashed animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-40 h-40 rounded-full border border-cyan-500/25" />
                  
                  {/* Glassmorphic Central Pod */}
                  <div className="relative z-10 w-44 h-44 rounded-3xl border border-white/20 dark:border-blue-500/30 bg-background/40 dark:bg-card/40 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-4 overflow-hidden">
                    
                    {/* Subtle Radial Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

                    {/* Classy Cardiac Silhouette & Pulse Wave */}
                    <svg
                      viewBox="0 0 100 70"
                      className="w-28 h-20 text-[#007AFF] drop-shadow-[0_0_12px_rgba(0,122,255,0.5)] transition-transform duration-500 group-hover:scale-105"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Stylized Anatomical Heart Contour */}
                      <path
                        d="M 50 22 C 45 10, 28 10, 26 26 C 24 38, 38 48, 50 60 C 62 48, 76 38, 74 26 C 72 10, 55 10, 50 22 Z"
                        className="opacity-20 fill-[#007AFF]/10 stroke-[#007AFF]"
                        strokeWidth="1.5"
                      />
                      
                      {/* Cardiac ECG Rhythm Line traversing the center */}
                      <path
                        d="M 12 36 L 32 36 L 37 28 L 42 45 L 48 18 L 54 52 L 59 34 L 64 39 L 68 36 L 88 36"
                        className="stroke-[#007AFF]"
                        strokeWidth="2.5"
                      />
                    </svg>

                    {/* Minimalist Status Tag */}
                    <div className="mt-2 text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                      Cardiac MRI
                    </div>

                  </div>

                  {/* Corner Accent Crosshairs */}
                  <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-blue-500/40" />
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-blue-500/40" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-blue-500/40" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-blue-500/40" />

                </div>
              </div>

            </div>

          </Link>
        </motion.div>

      </div>
    </section>
  );
}
