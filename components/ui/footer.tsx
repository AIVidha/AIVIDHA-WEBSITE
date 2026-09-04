"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Logo } from '@/components/ui/logo'

const links = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Courses',
        href: '#courses',
    },
    {
        title: 'Projects',
        href: '#projects',
    },
    {
        title: 'Reviews',
        href: '#testimonials',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-background py-16 border-t border-blue-500/10">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <Link
                        href="/"
                        aria-label="go home"
                        className="flex items-center gap-3 mb-8"
                    >
                        <Logo size={40} />
                        <span className="text-2xl font-black tracking-tighter text-foreground">
                            AIVIDHA
                        </span>
                    </Link>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-[#007AFF] font-bold transition-colors duration-200"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center gap-6 mb-10">
                        <Link href="#" className="text-muted-foreground hover:text-[#007AFF] transition-colors">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-[#007AFF] transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-[#007AFF] transition-colors">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-[#007AFF] transition-colors">
                            <Youtube className="w-6 h-6" />
                        </Link>
                    </div>

                    <span className="text-muted-foreground text-sm text-center">
                        © {new Date().getFullYear()} AIvidha Academy. Built for the future of AI.
                    </span>
                </motion.div>
            </div>
        </footer>
    )
}
