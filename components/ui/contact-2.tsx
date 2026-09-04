"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Get in Touch",
  description = "Have questions about our programs or want to collaborate? Reach out to the AIVidha team.",
  phone = "+91 98765 43210",
  email = "hello@aividha.com",
  web = { label: "aividha.com", url: "https://aividha.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex max-w-sm flex-col justify-between gap-10"
          >
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-5xl font-bold lg:text-7xl tracking-tighter text-foreground">
                {title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-bold lg:text-left text-[#007AFF]">
                Contact Details
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-foreground">Phone: </span>
                  <span className="text-muted-foreground">{phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-foreground">Email: </span>
                  <a href={`mailto:${email}`} className="text-muted-foreground hover:text-[#007AFF] transition-colors underline underline-offset-4 decoration-blue-500/30">
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-foreground">Web: </span>
                  <a href={web.url} target="_blank" className="text-muted-foreground hover:text-[#007AFF] transition-colors underline underline-offset-4 decoration-blue-500/30">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-[2.5rem] border border-blue-500/10 bg-card/80 backdrop-blur-xl p-10 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstname" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</Label>
                <Input type="text" id="firstname" placeholder="John" className="rounded-xl border-blue-500/10 bg-muted/30 text-foreground focus:ring-[#007AFF]" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastname" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Doe" className="rounded-xl border-blue-500/10 bg-muted/30 text-foreground focus:ring-[#007AFF]" />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input type="email" id="email" placeholder="john@example.com" className="rounded-xl border-blue-500/10 bg-muted/30 text-foreground focus:ring-[#007AFF]" />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</Label>
              <Input type="text" id="subject" placeholder="Course Inquiry" className="rounded-xl border-blue-500/10 bg-muted/30 text-foreground focus:ring-[#007AFF]" />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</Label>
              <Textarea placeholder="How can we help you build?" id="message" className="rounded-xl min-h-[150px] border-blue-500/10 bg-muted/30 text-foreground focus:ring-[#007AFF]" />
            </div>
            <Button className="w-full py-7 rounded-2xl text-lg font-bold bg-[#007AFF] hover:bg-[#0066FF] text-white transition-all transform hover:-translate-y-1 shadow-lg">
              Send Message
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2" />
    </section>
  );
};


