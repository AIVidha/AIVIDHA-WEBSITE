"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-blue-500/10 bg-card/80 backdrop-blur-md shadow-xl max-w-xs w-full transition-all hover:scale-[1.02] duration-300" 
                  key={i}
                >
                  <div className="text-muted-foreground leading-relaxed italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className={cn(
                        "h-11 w-11 rounded-full object-cover border-2 border-[#007AFF]"
                      )}
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="text-sm leading-5 opacity-60 tracking-tight text-muted-foreground">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
