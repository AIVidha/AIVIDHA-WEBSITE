"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Scan,
  Database,
  BrainCircuit,
  BarChart3,
  SlidersHorizontal,
  HeartPulse,
  Send
} from "lucide-react";
import NavHeader from "@/components/ui/nav-header";
import FooterSection from "@/components/ui/footer";
import { IndigoGlow } from "@/components/ui/background-components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Scan className="w-5 h-5 text-[#007AFF]" />,
    title: "Medical Image Annotation",
    description: "AI-assisted tools for creating and refining segmentation masks and building high-quality medical imaging datasets.",
  },
  {
    icon: <Database className="w-5 h-5 text-[#007AFF]" />,
    title: "Dataset Management",
    description: "Organize imaging studies, annotations, metadata, dataset versions, and patient-level splits.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-[#007AFF]" />,
    title: "Medical AI Model Hub",
    description: "Experiment with segmentation and classification models using established medical-AI frameworks and pretrained models.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#007AFF]" />,
    title: "Model Benchmarking",
    description: "Compare models across accuracy, Dice, IoU, parameters, FLOPs, model size, latency, and other deployment metrics.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5 text-[#007AFF]" />,
    title: "AI Model Optimization",
    description: "Find efficient models using multi-objective optimization, Pareto analysis, and configurable deployment requirements.",
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-[#007AFF]" />,
    title: "Cardiac Imaging Profiling",
    description: "Convert cardiac MRI AI outputs into quantitative anatomical and functional profiles for research and analysis.",
  },
  {
    icon: <Send className="w-5 h-5 text-[#007AFF]" />,
    title: "AI Deployment",
    description: "Package validated research models for API, local, edge, or institutional deployment across clinical environments.",
  },
];

const workflowSteps = [
  "Medical Images",
  "Annotation",
  "Dataset",
  "AI Models",
  "Benchmark",
  "Optimize",
  "Quantitative Profile",
  "Deploy",
];

const institutionalFeatures = [
  "On-premise deployment",
  "Institutional data governance",
  "Multi-user research workflows",
  "Dataset and model versioning",
  "Experiment tracking",
  "AI model benchmarking",
  "Secure model deployment",
  "Institution-specific AI applications",
];

export default function MedAIStudioPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      {/* Background Glow */}
      <IndigoGlow className="fixed inset-0 z-0" />

      {/* Navigation Header */}
      <div className="fixed top-10 left-0 right-0 z-50">
        <NavHeader />
      </div>

      <div className="relative z-10 pt-36 md:pt-44 pb-24 px-4 container mx-auto max-w-5xl">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-[#007AFF] transition-colors py-2 px-3 rounded-xl hover:bg-blue-500/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs md:text-sm font-semibold text-[#007AFF] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Overview</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground mb-4">
            MedAI <span className="text-[#007AFF]">Studio</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold text-foreground/90 mb-3">
            Building the infrastructure for Medical Imaging AI
          </p>

          <p className="text-base sm:text-lg font-bold text-[#007AFF] uppercase tracking-wider mb-8">
            Build. Annotate. Benchmark. Optimize. Deploy.
          </p>

          <div className="space-y-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              MedAI Studio is a web-based platform designed to help researchers, healthcare institutions, and medical-AI teams develop and evaluate AI models for medical imaging — all in one workflow.
            </p>
            <p>
              From creating high-quality annotated datasets to benchmarking models and optimizing them for real-world deployment, MedAI Studio brings the medical-AI development lifecycle into a single platform.
            </p>
          </div>
        </motion.section>

        {/* First Focus: Cardiac MRI & Redesigned Glowing Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 sm:p-12 rounded-[2.5rem] border border-blue-500/20 bg-card/60 backdrop-blur-2xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our first focus: <span className="text-[#007AFF]">Cardiac MRI</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              We are initially developing MedAI Studio around Cardiac MRI, combining AI-assisted annotation, cardiac segmentation, quantitative imaging analysis, model benchmarking, and efficient model selection.
            </p>

            {/* Workflow Pipeline */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
                  The Workflow Pipeline
                </p>
                <span className="text-xs text-muted-foreground">8 Integrated Stages</span>
              </div>

              {/* 4x2 Responsive Glowing Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-blue-500/15 bg-background/50 dark:bg-[#070b14]/60 backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/[0.08] hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] hover:-translate-y-1 cursor-default overflow-hidden flex flex-col justify-between min-h-[92px]"
                  >
                    {/* Inner Hover Glow Accent */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#007AFF]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#007AFF] px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 group-hover:bg-[#007AFF] group-hover:text-white transition-colors duration-300">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {idx < workflowSteps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-[#007AFF] group-hover:translate-x-0.5 transition-all duration-300" />
                      )}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-[#007AFF] transition-colors duration-300 leading-tight">
                        {step}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* What We're Building (With Full-Width Last Card for AI Deployment) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              What we&apos;re <span className="text-[#007AFF]">building</span>
            </h2>
            <div className="h-1 w-16 bg-[#007AFF] rounded-full mx-auto md:mx-0 mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {features.map((feature, idx) => {
              const isLast = idx === features.length - 1;
              return (
                <div 
                  key={idx}
                  className={cn(
                    "group relative p-6 sm:p-8 rounded-[2rem] border border-blue-500/15 bg-card/60 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(0,122,255,0.22)] hover:-translate-y-1 overflow-hidden",
                    isLast && "md:col-span-2"
                  )}
                >
                  {/* Hover ambient gradient */}
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className={cn("relative z-10", isLast && "md:flex md:items-center md:gap-8")}>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 md:mb-0 group-hover:bg-[#007AFF] group-hover:border-[#007AFF] transition-all duration-300 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,122,255,0.35)]">
                      {React.cloneElement(feature.icon, {
                        className: "w-5 h-5 text-[#007AFF] group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                    <div className={cn(isLast && "flex-1")}>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#007AFF] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        {isLast && (
                          <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-[#007AFF] border border-blue-500/30">
                            Production Ready
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* For Institutions (Smoother boxes with hover glow) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 sm:p-12 rounded-[2.5rem] border border-blue-500/20 bg-card/60 backdrop-blur-2xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-[#007AFF] border border-blue-500/20 mb-4">
              For Institutions
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              From Medical Imaging Research to Deployable AI
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              MedAI Studio is being designed with research institutes, medical colleges, hospitals, government organizations, and healthcare-AI teams in mind.
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
              The Long-Term Platform Will Support:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {institutionalFeatures.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-background/50 dark:bg-[#070b14]/60 border border-blue-500/15 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07] hover:shadow-[0_0_25px_rgba(0,122,255,0.22)] hover:translate-x-1 cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#007AFF] group-hover:border-[#007AFF] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,122,255,0.4)]">
                    <CheckCircle2 className="w-4 h-4 text-[#007AFF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center p-8 sm:p-14 rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Our <span className="text-[#007AFF]">vision</span>
          </h2>

          <blockquote className="text-xl sm:text-3xl font-bold text-[#007AFF] max-w-3xl mx-auto leading-relaxed mb-6">
            &ldquo;Make building Medical AI as accessible and systematic as building AI for any other domain.&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Starting with Cardiac MRI, MedAI Studio is designed to expand across MRI, CT, X-ray, ultrasound, and other medical-imaging modalities.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button className="rounded-full px-8 py-6 text-base font-bold bg-[#007AFF] hover:bg-[#0066FF] text-white shadow-lg shadow-blue-500/25">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.section>

      </div>

      <FooterSection />
    </main>
  );
}
