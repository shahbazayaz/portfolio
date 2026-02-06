"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Terminal, Palette, Code2, Cpu } from "lucide-react"; // Note: You may need to run 'npm install lucide-react'

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
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-neutral-950/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg tracking-tighter cursor-pointer"
            onClick={() => setPage("home")}
          >
            S. AYAZ
          </motion.span>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
            {["technical", "design", "projects", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => setPage(item)}
                className={`transition-colors hover:text-white ${page === item ? "text-white" : "text-neutral-500"}`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile nav indicator could go here */}
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* HOME */}
          {page === "home" && (
            <Section key="home">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-4"
                >
                  <Terminal size={16} /> <span>Available for work 2026</span>
                </motion.div>
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Analytical Systems, <span className="text-neutral-500 italic font-serif">Creative Soul.</span>
                </motion.h1>
                <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed">
                  I bridge the gap between heavy data science and high-end design. 
                  Currently focusing on Bayesian modeling and editorial-style web interfaces.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-neutral-200" onClick={() => setPage("projects")}>
                    Browse Portfolio <ChevronRight className="ml-2" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5" onClick={() => setPage("contact")}>
                    Get in touch
                  </Button>
                </div>
              </div>
            </Section>
          )}

          {/* ADD OTHER SECTIONS (Technical, Design, Projects) SIMILARLY... */}
          {/* For now, I've updated the styles; keep your current card logic below */}

          {page === "technical" && (
            <Section key="technical">
               <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-5xl font-bold mb-6">Technical Stack</h2>
                    <p className="text-neutral-400 mb-8">Quantitative foundations meet modern software engineering.</p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      { title: "Risk & Actuarial", icon: <Cpu />, desc: "Bank internship · Exam P · ASC" },
                      { title: "Statistics & ML", icon: <Code2 />, desc: "Bayesian, LASSO, ANOVA, classification" },
                      { title: "Data Systems", icon: <Terminal />, desc: "Java, SQL, data pipelines" }
                    ].map((skill, i) => (
                      <Card key={i} className="bg-white/5 border-white/10 overflow-hidden group hover:border-blue-500/50 transition-colors">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-white/5 text-blue-400">{skill.icon}</div>
                          <div>
                            <h3 className="font-semibold text-lg">{skill.title}</h3>
                            <p className="text-sm text-neutral-500">{skill.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
               </div>
            </Section>
          )}

        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Shahbaz Ayaz. Built with Next.js & Framer Motion.</p>
          <div className="flex gap-8 font-mono uppercase tracking-tighter">
            <a href="#" className="hover:text-white">Github</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}