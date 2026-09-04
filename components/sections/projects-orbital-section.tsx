"use client";

import { motion } from "framer-motion";
import { FileText, Brain, MessageSquare, Zap, Eye, Search } from "lucide-react";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "ChatDoc AI",
    date: "Deployed",
    content: "Advanced RAG system that processes massive document libraries with precision. Features semantic chunking and source-linked citations.",
    category: "RAG Systems",
    icon: FileText,
    relatedIds: [2, 6],
    status: "completed",
    energy: 98,
  },
  {
    id: 2,
    title: "Knowledge Bot",
    date: "Stable",
    content: "Enterprise-grade knowledge extraction agent. Connects to internal wikis and Slack to provide instant, context-aware answers.",
    category: "Agents",
    icon: Brain,
    relatedIds: [1, 3],
    status: "completed",
    energy: 92,
  },
  {
    id: 3,
    title: "Context Assistant",
    date: "Optimization",
    content: "Long-context chat assistant capable of managing 1M+ token conversations without losing coherence or detail.",
    category: "NLP",
    icon: MessageSquare,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 4,
    title: "Prompt Optimizer",
    date: "Beta",
    content: "Engine for automatic prompt engineering and refinement. Uses multi-shot reasoning to maximize LLM performance on complex tasks.",
    category: "Optimization",
    icon: Zap,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 88,
  },
  {
    id: 5,
    title: "Vision Analytics",
    date: "Experimental",
    content: "Multimodal AI system for real-time video and image analysis. Features object detection, OCR, and scene understanding.",
    category: "Computer Vision",
    icon: Eye,
    relatedIds: [4, 6],
    status: "pending",
    energy: 75,
  },
  {
    id: 6,
    title: "Neural Search",
    date: "Research",
    content: "High-performance vector search engine using custom embeddings for industry-specific semantic retrieval at scale.",
    category: "Search",
    icon: Search,
    relatedIds: [5, 1],
    status: "pending",
    energy: 82,
  },
];

export default function ProjectsOrbitalSection() {
  return (
    <section id="projects" className="py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-blue-500/20 bg-blue-500/10 text-[#007AFF] py-1.5 px-6 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
              AI Project Showcase
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Featured <span className="text-[#007AFF]">AI Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our ecosystem of intelligent systems. Click on a node to expand the system architecture and view connected subsystems.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}


