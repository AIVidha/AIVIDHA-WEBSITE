"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "1-Month AI Project Bootcamp",
    duration: "4 Weeks",
    icon: <Rocket className="w-8 h-8 text-[#007AFF]" />,
    description: "A fast-paced, hands-on program focused on building practical AI projects. Ideal for beginners and those looking to quickly create a strong portfolio and become job-ready through guided implementation.",
    features: ["4+ Real Projects", "Portfolio Building", "Job Readiness"],
    color: "bg-blue-500/10",
    accent: "blue",
  },
  {
    title: "3-Month AI Foundations Program",
    duration: "12 Weeks",
    icon: <Brain className="w-8 h-8 text-[#007AFF]" />,
    description: "A comprehensive program covering the core fundamentals of artificial intelligence, machine learning, and deep learning. Students learn programming, data handling, and model building, gaining a strong base to work with real-world datasets and systems.",
    features: ["ML Fundamentals", "Deep Learning", "Data Engineering"],
    color: "bg-blue-600/10",
    accent: "blue",
  },
  {
    title: "6-Month AI Specialization Program",
    duration: "24 Weeks",
    icon: <Sparkles className="w-8 h-8 text-[#007AFF]" />,
    description: "An advanced track focused on mastering key AI domains such as natural language processing, computer vision, and generative AI. Learners work on complex systems and projects, developing the ability to design and deploy intelligent applications.",
    features: ["NLP & Computer Vision", "Generative AI", "System Deployment"],
    color: "bg-indigo-600/10",
    accent: "blue",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="relative py-24 px-4 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Our <span className="text-[#007AFF]">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to take you from fundamentals to advanced AI implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/70 backdrop-blur-md rounded-3xl p-8 border border-blue-500/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none",
                "bg-[#007AFF]"
              )} />
              
              <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mb-6`}>
                {course.icon}
              </div>

              <div className={cn(
                "flex items-center gap-2 text-sm font-bold mb-3",
                "text-[#007AFF]"
              )}>
                <Clock className="w-4 h-4" />
                {course.duration}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {course.title}
              </h3>

              <p className="text-muted-foreground mb-8 flex-grow">
                {course.description}
              </p>

              <div className="space-y-3 mb-8">
                {course.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      "bg-[#007AFF]"
                    )} />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className={cn(
                "w-full rounded-xl py-6 text-lg font-bold bg-[#007AFF] hover:bg-[#0066FF] text-white transition-colors shadow-lg"
              )}>
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


