"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Terminal, Linkedin, User, ArrowUpRight } from "lucide-react";

// Section Transition Logic
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 py-24"
    >
      {children}
    </motion.section>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("home");

  return (
    // Updated Background Color to #18392B
    <div className="relative min-h-screen bg-[#18392B] text-neutral-100 selection:bg-white selection:text-[#18392B]">
      
      {/* BACKGROUND DECORATION - Subtler grid for the dark green theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-[#18392B]/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <motion.span 
            className="font-bold text-sm tracking-widest uppercase cursor-pointer"
            onClick={() => setPage("home")}
          >
            MUHAMMAD SHAHBAZ MURTAZA
          </motion.span>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
              <button onClick={() => setPage("about")} className={`transition-colors ${page === "about" ? "text-white" : "text-neutral-400 hover:text-white"}`}>About</button>
              <button onClick={() => setPage("technical")} className={`transition-colors ${page === "technical" ? "text-white" : "text-neutral-400 hover:text-white"}`}>Technical</button>
              <button onClick={() => setPage("projects")} className={`transition-colors ${page === "projects" ? "text-white" : "text-neutral-400 hover:text-white"}`}>Projects</button>
            </div>
            
            {/* LinkedIn Redirect */}
            <a 
              href="https://www.linkedin.com/in/muhammad-shahbaz-murtaza-64493022b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* HOME / LANDING */}
          {page === "home" && (
            <Section key="home">
              <div className="max-w-4xl">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8"
                >
                  Based in Karachi &bull; 2026
                </motion.p>
                <motion.h1 
                  className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-[0.9]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Systems <br />
                  <span className="italic font-serif font-light text-neutral-300">& Aesthetics.</span>
                </motion.h1>
                <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12">
                  <p className="text-lg text-neutral-300 max-w-md leading-relaxed">
                    I design analytical frameworks with a creative soul. Specializing in Bayesian systems and editorial-style design.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-fit rounded-none bg-white text-[#18392B] hover:bg-neutral-200 px-10 border-none"
                    onClick={() => setPage("about")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Section>
          )}

          {/* ABOUT SECTION */}
          {page === "about" && (
            <Section key="about">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-5xl font-bold mb-8">About Me</h2>
                  <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
                    <p>
                      [INSERT DESCRIPTION HERE: You can tell me about your background, your actuarial interests, and your design passion.]
                    </p>
                    <p>
                      I believe the most powerful systems are the ones that are as beautiful as they are functional.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                  <h3 className="text-sm font-mono uppercase tracking-widest mb-6 text-blue-400">Interests</h3>
                  <ul className="space-y-4">
                    {["Actuarial Science", "Bayesian Statistics", "Graphic Design", "Poetry", "System Architecture"].map((interest) => (
                      <li key={interest} className="flex items-center gap-3 border-b border-white/5 pb-2">
                        <ArrowUpRight size={14} className="text-neutral-500" />
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* ... Other sections (Technical, Projects) remain same ... */}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} MUHAMMAD SHAHBAZ MURTAZA</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/muhammad-shahbaz-murtaza-64493022b/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:your-email@example.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}