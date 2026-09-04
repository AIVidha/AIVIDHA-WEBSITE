"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "AIVidha transformed my career. The 3-month foundations program gave me exactly what I needed to land my first AI engineer role.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "AI Engineer at TechCorp",
  },
  {
    text: "The project-based approach is unmatched. I built a RAG system from scratch in just 4 weeks. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Full Stack Developer",
  },
  {
    text: "Clear, structured, and practical. No fluff, just real-world AI implementation. The best investment I've made this year.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Computer Science Student",
  },
  {
    text: "From zero to building complex NLP systems. The specialization track is intense but incredibly rewarding.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Data Scientist",
  },
  {
    text: "The mentorship at AIVidha is world-class. They don't just teach you to code; they teach you how to think in AI.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Product Manager",
  },
  {
    text: "Finally an AI program that focuses on building, not just theoretical concepts. The portfolio I built is what got me hired.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Junior AI Researcher",
  },
  {
    text: "The community is amazing. Learning with like-minded builders made the complex topics much easier to grasp.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Backend Developer",
  },
  {
    text: "I was skeptical about a 1-month bootcamp, but the progress I made is staggering. Truly an 'apply' focused academy.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Freelance AI Consultant",
  },
  {
    text: "AIVidha bridges the gap between YouTube tutorials and professional production-ready AI systems.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Software Architect",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-blue-500/20 bg-blue-500/10 text-[#007AFF] py-1.5 px-6 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
              Community Reviews
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            What our <span className="text-[#007AFF]">builders</span> say
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of professionals and students who have transformed their careers through AIVidha's practical programs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}


