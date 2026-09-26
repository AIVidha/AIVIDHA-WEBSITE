"use client"

import BackgroundPaths from "../components/kokonutui/background-paths"
import NavHeader from "@/components/ui/nav-header"
import AboutSection from "@/components/sections/about-section"
import ProductsSection from "@/components/sections/products-section"
import CoursesSection from "@/components/sections/courses-section"
import ProjectsOrbitalSection from "@/components/sections/projects-orbital-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { Contact2 } from "@/components/ui/contact-2"
import FooterSection from "@/components/ui/footer"
import { IndigoGlow } from "@/components/ui/background-components"

export default function SyntheticV0PageForDeployment() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      {/* Global Brand Blue Glow - Fixed Background */}
      <IndigoGlow className="fixed inset-0 z-0" />

      <div className="fixed top-10 left-0 right-0 z-50">
        <NavHeader />
      </div>
      
      <div className="flex flex-col relative z-10">
        <BackgroundPaths />
        
        <div className="bg-transparent">
          <AboutSection />
          <ProductsSection />
          <CoursesSection />
          <ProjectsOrbitalSection />
          <TestimonialsSection />
          <Contact2 />
        </div>
        
        <FooterSection />
      </div>
    </main>
  )
}