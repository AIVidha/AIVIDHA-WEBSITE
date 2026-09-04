"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export const BackgroundDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex items-center justify-center"> 
      {/* Light Sky Blue Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #93c5fd, transparent)
          `,
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Background Demo</h1>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-500 transition-colors"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
};

export default BackgroundDemo;
