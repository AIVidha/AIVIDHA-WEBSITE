"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 md:gap-4 w-[95%] max-w-fit">
      <Logo size={40} className="drop-shadow-[0_0_15px_rgba(0,122,255,0.4)] flex-shrink-0" />
      
      {/* Desktop Menu */}
      <ul
        className="hidden md:flex relative w-fit rounded-full border border-blue-500/20 bg-background/40 backdrop-blur-md p-1 shadow-2xl"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {links.map((link) => (
          <Tab key={link.name} setPosition={setPosition} href={link.href}>
            {link.name}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>

      <div className="flex items-center gap-2">
        <ModeToggle />
        
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full border border-blue-500/20 bg-background/40 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-bold text-foreground hover:text-[#007AFF] transition-colors p-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-foreground md:px-5 md:py-3 md:text-base font-bold transition-colors hover:text-blue-500"
    >
      <a href={href} className="w-full h-full block">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-blue-600/10 md:h-12 border border-blue-500/20"
    />
  );
};

export default NavHeader;

