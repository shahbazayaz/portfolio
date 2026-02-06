"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Cedarville+Cursive&family=Inter:wght@300;400;900&family=JetBrains+Mono:wght@300&display=swap');
`;

const words = ["Actuary", "Trader", "Data Analyst", "Writer", "Graphic Designer", "Creative Director"];

function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      className={`min-h-[100vh] flex flex-col justify-end px-8 md:px-16 pb-24 pt-40 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a1a12] text-neutral-100 selection:bg-white selection:text-[#0a1a12] overflow-x-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: fontImport }} />
      <div className="fixed inset-0 z-0 bg-[#0a1a12]" />

      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 backdrop-blur-xl bg-[#0a1a12]/80 font-mono">
        <div className="max-w-full flex justify-between items-center px-10 py-8">
          <motion.span 
            className="text-[10px] tracking-[0.4em] uppercase cursor-pointer"
            onClick={() => setPage("home")}
          >
            MUHAMMAD SHAHBAZ MURTAZA
          </motion.span>
          
          <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.3em]">
            <button onClick={() => setPage("about")} className={page === "about" ? "text-white underline underline-offset-8" : "text-neutral-500 hover:text-white"}>About</button>
            <button onClick={() => setPage("technical")} className={page === "technical" ? "text-white underline underline-offset-8" : "text-neutral-500 hover:text-white"}>Experience</button>
            <button onClick={() => setPage("projects")} className={page === "projects" ? "text-white underline underline-offset-8" : "text-neutral-500 hover:text-white"}>Projects</button>
            <a href="https://www.linkedin.com/in/muhammad-shahbaz-murtaza-64493022b/" target="_blank" className="text-neutral-500 hover:text-white"><Linkedin size={16} /></a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          
          {page === "home" && (
            <Section key="home" className="items-start">
              <div className="max-w-6xl w-full">
                <motion.h1 
                  className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85] text-white uppercase"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Welcome to <br /> My <span className="lowercase font-light tracking-normal normal-case text-neutral-300" style={{ fontFamily: "'Cedarville Cursive', cursive" }}>portfolio.</span>
                </motion.h1>

                <div className="flex items-center flex-wrap gap-4 font-mono text-[11px] md:text-sm uppercase tracking-[0.4em] text-white/70 mt-10 mb-20">
                  <span>Statistics Graduate</span> 
                  <span className="text-xl text-white/40">◎</span> 
                  <div className="flex items-center gap-3">
                    <span>Aspiring</span>
                    <div className="relative h-6 inline-flex items-center min-w-[280px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={words[index]}
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -15, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "circOut" }}
                          className="absolute left-0 text-white font-bold text-xs md:text-base tracking-[0.2em] whitespace-nowrap"
                        >
                          {words[index]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 w-full">
                   <p className="text-base text-neutral-400 font-light tracking-wide max-w-sm leading-relaxed">
                    Bridging <span className="text-white">quantitative rigor</span> and <span className="text-white">creativity</span>.
                  </p>

                  <div className="flex flex-wrap gap-6 items-center">
                    <motion.button 
                      whileHover={{ backgroundColor: "#ffffff", color: "#0a1a12" }}
                      onClick={() => setPage("about")}
                      className="px-12 py-4 border border-white/20 text-white rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300"
                    >
                      My Story
                    </motion.button>
                    <a href="/resume.pdf" download="Shahbaz_Murtaza_Resume.pdf">
                      <motion.button 
                        whileHover={{ backgroundColor: "#ffffff", color: "#0a1a12" }}
                        className="px-12 py-4 border border-white/20 text-white rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300"
                      >
                        Download Resume
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {page === "about" && (
            <Section key="about" className="justify-start pb-20">
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                <div className="lg:col-span-7 space-y-10">
                  <div>
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 mb-6">Introduction</h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
                      Hiya! I’m <span className="text-white font-medium">Shahbaz</span>, 23, a <span className="text-white">Statistics</span> graduate from the University of British Columbia. 
                    </p>
                  </div>

                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    I’m currently deepening my understanding of financial markets while evaluating my role as a ticker in the system. With a strong intuition and groundwork in <span className="text-white">statistical theory</span>, quantitative analysis and storytelling, I excel at extracting actionable insights from complex data.
                  </p>

                  <p className="text-neutral-400 leading-relaxed text-lg font-light border-l border-white/10 pl-6">
                    Simultaneously, I’m chasing my <span className="text-white font-medium">ASA designation</span> (studying for EXAM FM) and sharpening my actuarial acumen. In short, gradually building the box which fits my ambition. Beyond technical pursuits, I’m an avid poet, weaving philosophy into every gap I find.
                  </p>

                  <div className="pt-6 grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest text-white/50">
                    <div>
                      <p className="text-white/20 mb-2">Honors</p>
                      <p className="text-white text-[9px]">High Distinction</p>
                    </div>
                    <div>
                      <p className="text-white/20 mb-2">Scholarship</p>
                      <p className="text-white text-[9px]">International Major Entrance Scholar</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-8 pl-4">
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30">Technical Core</h2>
                    <div className="grid grid-cols-2 gap-8 font-mono text-[11px] uppercase tracking-widest">
                      <div className="space-y-3">
                        <p className="text-white/20 text-[9px] mb-4">Quantitative</p>
                        <p>R</p>
                        <p>SQL</p>
                        <p>Python</p>
                        <p>Power BI</p>
                        <p>JavaScript</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-white/20 text-[9px] mb-4">Design</p>
                        <p>Figma</p>
                        <p>Canva</p>
                        <p>Davinci Resolve</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 mb-8">Other Interests</h2>
                    <div className="flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-widest">
                      {["Cooking", "Film", "Artistic Creation", "Fashion", "Scrabble (2020 Intl. Prospect)", "Chess", "Poetry", "Poker"].map((item) => (
                        <span key={item} className="px-4 py-2 border border-white/10 rounded-full text-white/70 hover:border-white/40 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </Section>
          )}

          {page === "technical" && (
            <Section key="technical" className="justify-start pb-20">
              <div className="max-w-4xl w-full">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 mb-16">Professional Path</h2>
                
                <div className="space-y-24">
                  <div className="group relative border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                    <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">June 2025 – Aug 2025</span>
                    <h3 className="text-3xl font-bold mt-2 uppercase tracking-tighter text-white">Risk Management Intern</h3>
                    <p className="text-white/60 mb-6 font-mono text-xs uppercase tracking-wider">Soneri Bank · Risk Management Division</p>
                    <div className="text-neutral-400 leading-relaxed space-y-4 font-light text-base max-w-2xl">
                        <p>Validated insurance credit risk model inputs (PD, LGD) in <span className="text-white">Excel</span>, improving data accuracy by 15% for regulatory compliance.</p>
                        <p>Proposed automation of modeling workflows using <span className="text-white">SQL-based</span> data warehousing and Python pipelines.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      {["SQL", "Python", "Credit Risk", "VBA"].map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="group relative border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                    <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Sept. 2024 – May 2025</span>
                    <h3 className="text-3xl font-bold mt-2 uppercase tracking-tighter text-white">Vice President, External</h3>
                    <p className="text-white/60 mb-6 font-mono text-xs uppercase tracking-wider">UBC Actuarial Science Club</p>
                    <div className="text-neutral-400 leading-relaxed space-y-4 font-light text-base max-w-2xl">
                        <p>Curated interactive social media campaigns resulting in <span className="text-white">40K+ views</span> and supervised recruitment from a pool of 43 applicants.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      {["Leadership", "Partnerships", "Strategic Growth"].map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="group relative border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                    <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Sept. 2025 – Present</span>
                    <h3 className="text-3xl font-bold mt-2 uppercase tracking-tighter text-white">Graphic Designer</h3>
                    <p className="text-white/60 mb-6 font-mono text-xs uppercase tracking-wider">Get Thrifty UBC · Vancouver, BC</p>
                    <div className="text-neutral-400 leading-relaxed space-y-4 font-light text-base max-w-2xl">
                        <p>Designed data-informed visuals by <span className="text-white">analyzing engagement metrics</span>, resulting in a measurable <span className="text-white">50% increase</span> in audience interaction.</p>
                        <p>Optimized visual layouts using <span className="text-white">A/B testing principles</span> and UX-inspired design to enhance readability and user retention.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      {["UX Design", "Data Analysis", "A/B Testing", "Figma"].map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="group relative border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                    <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Sept. 2022 – Dec. 2025</span>
                    <h3 className="text-3xl font-bold mt-2 uppercase tracking-tighter text-white">Auxiliary Sales Attendant</h3>
                    <p className="text-white/60 mb-6 font-mono text-xs uppercase tracking-wider">Tim Hortons · Vancouver, BC</p>
                    <div className="text-neutral-400 leading-relaxed space-y-4 font-light text-base max-w-2xl">
                        <p>Increased customer satisfaction survey scores by <span className="text-white">20%</span> through exceptional service and efficient deliverable prioritization.</p>
                        <p>Managed multiple concurrent tasks under tight time constraints in a fast-paced retail environment.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      {["Efficiency", "Crisis Management", "Operations"].map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="group relative border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                    <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">June 2021 – Dec 2021</span>
                    <h3 className="text-3xl font-bold mt-2 uppercase tracking-tighter text-white">Head of Marketing</h3>
                    <p className="text-white/60 mb-6 font-mono text-xs uppercase tracking-wider">Sharkkfit · Instagram Operations</p>
                    <div className="text-neutral-400 leading-relaxed space-y-4 font-light text-base max-w-2xl">
                        <p>Directed social media strategy and brand positioning, focusing on community growth and aesthetic consistency during early-stage brand development.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      {["Marketing Strategy", "Content Direction", "Branding"].map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {page === "projects" && (
            <Section key="projects" className="justify-start pb-20">
              <div className="max-w-6xl w-full space-y-32">
                
                {/* --- TECHNICAL PROJECTS --- */}
                <div className="space-y-12">
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Technical</h2>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Quantitative / Data</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/5 rounded-xl text-white">
                          <code className="text-xs">.R / .py</code>
                        </div>
                        <span className="text-[10px] font-mono text-white/30">2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Portfolio Risk Analysis Model</h3>
                      <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Developed a simulation-based model to calculate Value at Risk (VaR) and Expected Shortfall for a diversified asset portfolio using Monte Carlo methods.
                      </p>
                      <div className="flex gap-2">
                        {["Statistics", "Monte Carlo", "Financial Math"].map(t => (
                          <span key={t} className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/5 rounded-xl text-white">
                          <code className="text-xs">SQL / BI</code>
                        </div>
                        <span className="text-[10px] font-mono text-white/30">2023</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Health Claims Dashboard</h3>
                      <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Processed large-scale insurance datasets to visualize claim frequency and severity trends, identifying key cost drivers for actuarial review.
                      </p>
                      <div className="flex gap-2">
                        {["Data Viz", "SQL", "Actuarial Science"].map(t => (
                          <span key={t} className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

{/* --- CREATIVE PROJECTS --- */}
                <div className="space-y-12">
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Creative</h2>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Design Portfolio</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Editorial Newsletters - UPDATED WITH CATS IMAGE */}
                    <a 
                      href="https://drive.google.com/drive/u/1/folders/1O6-1vCAKlX5ZFKfJAU_PpxTS31YaC_fU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 bg-[#0a1a12] flex flex-col justify-end transition-all"
                    >
                      <img 
                        src="/newsletter-cats.png" // Ensure this matches your filename
                        alt="Editorial Design"
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Darker gradient at bottom for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/20 to-transparent" />
                      
                      <div className="relative p-8 w-full">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[9px] font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase">Editorial</span>
                          <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Editorial Newsletters</h3>
                        <p className="text-neutral-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Visual direction and layout design for recurring editorial content, focusing on long-form storytelling.
                        </p>
                      </div>
                    </a>

                    {/* Get Thrifty Socials */}
                    <a 
                      href="https://drive.google.com/drive/u/1/folders/18QFYff1PvfZIzznNf0yX8r1oRXOgvzqK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 flex flex-col justify-end transition-all"
                    >
                      <img 
                        src="/upcycling.png" 
                        alt="Get Thrifty Visuals"
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/40 to-transparent" />
                      
                      <div className="relative p-8 w-full">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[9px] font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase"> Graphic Design</span>
                          <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Get Thrifty Socials</h3>
                        <p className="text-neutral-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Campaign assets designed to increase engagement and visual brand identity for UBC's thrift community.
                        </p>
                      </div>
                    </a>

                   {/* UBC ASC - FIXED BRANDING CARD */}
                    <a 
                      href="https://drive.google.com/drive/u/1/folders/1aqwLoufAbgBwvsWSg_Ibt5jdYpK74Gh3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 bg-[#001529] flex flex-col justify-end transition-all"
                    >
                      {/* Image container fixed to match the "Inception" and "Upcycling" style */}
                      <img 
                        src="/asc-flag.png" 
                        alt="ASC Branding"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                      />
                      
                      {/* Gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-transparent to-transparent" />
                      
                      <div className="relative p-8 w-full">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[9px] font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase">Marketing</span>
                          <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">ASC Visual Identity</h3>
                        <p className="text-neutral-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Professional brand assets and social outreach materials designed for the Actuarial Science Club.
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Poetry Section */}
                  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="text-neutral-500 italic font-light text-sm max-w-md">
                      "Philosophy in the gaps—weaving poetry through statistical structures."
                    </p>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Selected Literary Works (2020-Present)</span>
                  </div>
                </div>

              </div>
            </Section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}