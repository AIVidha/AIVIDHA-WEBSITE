"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, Brain, MessageSquare, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const BouncyCardsFeatures = () => {
  return (
    <section id="projects-features" className="mx-auto max-w-7xl px-4 py-24 text-foreground bg-transparent">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:px-8">
        <div className="space-y-4">
          <h2 className="max-w-lg text-4xl font-bold md:text-6xl tracking-tight">
            Featured <span className="text-[#007AFF]">AI Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md">
            Hands-on implementations showcasing the power of practical AI development.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-2xl bg-[#007AFF] px-8 py-4 font-bold text-white shadow-xl transition-colors hover:bg-[#0066FF] flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </motion.button>
      </div>

      <div className="mb-6 grid grid-cols-12 gap-6">
        <BounceCard className="col-span-12 md:col-span-4 bg-card/40 backdrop-blur-md border border-blue-500/10">
          <CardHeader 
            icon={<FileText className="w-6 h-6 text-[#007AFF]" />}
            title="ChatDoc"
            subtitle="Chat with PDFs using RAG"
          />
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800" 
              alt="ChatDoc Demo"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 bg-card/40 backdrop-blur-md border border-blue-500/10">
          <CardHeader 
            icon={<Brain className="w-6 h-6 text-[#00D1FF]" />}
            title="AI Knowledge Bot"
            subtitle="Intelligent Q&A over custom datasets"
          />
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" 
              alt="Knowledge Bot Demo"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <BounceCard className="col-span-12 md:col-span-8 bg-card/40 backdrop-blur-md border border-blue-500/10">
          <CardHeader 
            icon={<MessageSquare className="w-6 h-6 text-[#007AFF]" />}
            title="Context-Aware Chat Assistant"
            subtitle="Advanced memory & persona management"
          />
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-700 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1000" 
              alt="Chat Assistant Demo"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4 bg-card/40 backdrop-blur-md border border-blue-500/10">
          <CardHeader 
            icon={<Zap className="w-6 h-6 text-cyan-400" />}
            title="Prompt Optimizer Engine"
            subtitle="Iterative prompt engineering tool"
          />
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" 
              alt="Prompt Optimizer Demo"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: "-0.5deg" }}
      className={cn(
        "group relative min-h-[450px] cursor-pointer overflow-hidden rounded-[2.5rem] p-10 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => {
  return (
    <div className="relative z-10 space-y-4">
      <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shadow-sm border border-blue-500/10">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold tracking-tight mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground font-medium">{subtitle}</p>
      </div>
      <div className="flex gap-4 pt-2 text-white/40">
         <Github className="w-5 h-5 hover:text-white transition-colors" />
         <ExternalLink className="w-5 h-5 hover:text-white transition-colors" />
      </div>
    </div>
  );
};

