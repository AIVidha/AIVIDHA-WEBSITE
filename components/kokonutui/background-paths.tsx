"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IndigoGlow } from "@/components/ui/background-components"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function FloatingPaths({ position }: { position: number }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Palette matched to the provided logo (Vibrant Blue + White/Dark)
  const colors = [
    "#007AFF", // Logo Bright Blue
    "#0055FF", // Logo Deep Blue
    mounted && theme === "dark" ? "#00D1FF" : "#FFFFFF", // Cyan in dark, White in light
    "#00A3FF", // Logo Light Blue
    "#0066FF", // Logo Mid Blue
    mounted && theme === "dark" ? "#007AFF" : "#E0F2FF", // Soft Blue-White
  ]

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: colors[i % colors.length],
    width: 0.8 + i * 0.04,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={path.color === "#FFFFFF" || path.color === "#00D1FF" ? 0.2 : 0.4 + (path.id % 6) * 0.1}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths({
  title = "AIVidha",
  tagline = "Learn. Build. Apply.",
}: {
  title?: string
  tagline?: string
}) {
  const words = title.split(" ")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <IndigoGlow />
        <div className="absolute inset-0 bg-background/30" />
      </div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2 md:mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-2xl md:text-3xl font-bold mb-10 tracking-wide
                       text-muted-foreground px-4"
          >
            {tagline}
          </motion.p>

          <div
            className="inline-block group relative bg-blue-600/20 
                        p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold backdrop-blur-md 
                            bg-card/90 hover:bg-card 
                            text-foreground transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-blue-500/20
                            hover:shadow-md hover:shadow-blue-500/20"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">Get Started</span>
              <span
                className="ml-3 text-[#007AFF] opacity-90 group-hover:opacity-100 group-hover:translate-x-1.5 
                                 transition-all duration-300 font-bold"
              >
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}





