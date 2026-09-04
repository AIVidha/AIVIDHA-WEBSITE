"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface GlowBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  opacity?: number;
  mode?: "multiply" | "screen" | "normal";
}

export const GlowBackground = ({ 
  children, 
  className, 
  color = "#6366f1", // Default to Indigo as requested
  opacity = 0.4,
  mode = "normal"
}: GlowBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Radial Glow Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, ${color} 0%, transparent 80%)
          `,
          opacity: opacity,
          mixBlendMode: mode,
        }}
      />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export const IndigoGlow = ({ className }: { className?: string }) => (
  <GlowBackground color="#007AFF" mode="normal" opacity={0.3} className={className} />
);

export const SoftYellowGlow = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <GlowBackground color="#FFF991" mode="multiply" className={className}>
    {children}
  </GlowBackground>
);

// Default component as requested in the prompt
export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #6366f1, transparent)
          `,
          opacity: 0.4
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-black mb-4">
          Indigo <span className="text-blue-600">Glow</span>
        </h1>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-500 transition-colors"
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
};

export default Component;
