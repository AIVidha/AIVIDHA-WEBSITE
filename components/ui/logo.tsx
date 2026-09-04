"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const Logo = ({ className, size = 40, animated = true }: LogoProps) => {
  return (
    <div 
      className={cn("relative flex items-center justify-center overflow-hidden rounded-xl", className)}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: "#001031",
      }}
    >
      <svg
        viewBox="0 0 140 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[85%] h-[85%]"
      >
        <defs>
          {/* Main Brand Gradient */}
          <linearGradient id="logoGradient" x1="0" y1="1" x2="0.4" y2="0">
            <stop offset="0%" stopColor="#007AFF" />
            <stop offset="100%" stopColor="#00D1FF" />
          </linearGradient>
          
          {/* Ribbon Fold Shadow */}
          <linearGradient id="peakFold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="black" stopOpacity="0.4" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.g
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Left leg of A (Gradient) - Flat Top Architecture */}
          <motion.polygon
            points="10,90 28,90 63,20 45,20"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0 } : {}}
            animate={animated ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          />

          {/* Ribbon Fold Shadow at the Peak */}
          <polygon 
            points="45,20 63,20 63,45 45,45" 
            fill="url(#peakFold)" 
            opacity="0.3"
          />

          {/* Right leg of V (White) - Drawn first so Blue overlaps it at the bottom */}
          <motion.polygon
            points="80,90 98,90 133,20 115,20"
            fill="#FFFFFF"
            initial={animated ? { opacity: 0 } : {}}
            animate={animated ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Middle Shared leg (Solid Blue) - Overlaps white leg with a vertical cut at bottom right */}
          <motion.polygon
            points="45,20 63,20 93,80 93,90 80,90"
            fill="#007AFF"
            initial={animated ? { opacity: 0 } : {}}
            animate={animated ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          {/* Perfected Lowercase "i" from image - Centered at X=54 */}
          <g>
            {/* The "i" Dot - Centered horizontally */}
            <motion.circle
              cx="54"
              cy="58"
              r="7"
              fill="#007AFF"
              initial={animated ? { scale: 0 } : {}}
              animate={animated ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 300, delay: 0.8 }}
            />
            
            {/* The "i" Stem - Crisp Rectangle perfectly centered */}
            <motion.rect
              x="47"
              y="70"
              width="14"
              height="20"
              fill="#007AFF"
              initial={animated ? { opacity: 0 } : {}}
              animate={animated ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

export default Logo;







