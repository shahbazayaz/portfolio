"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue} from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

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
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  
  // 1. High-Performance Cursor Tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // 2. Rotation and Parallax Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    const handleMouseMove = (e: MouseEvent) => {
      // Logic for background parallax
      setMouseX((e.clientX / window.innerWidth) - 0.5);
      setMouseY((e.clientY / window.innerHeight) - 0.5);
      // Logic for custom cursor
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
  <div className="relative min-h-screen bg-[#0a1a12] text-neutral-100 selection:bg-white selection:text-[#0a1a12] overflow-x-hidden font-sans cursor-none">
    <style dangerouslySetInnerHTML={{ __html: fontImport }} />
    
    {/* 1. CUSTOM ANALYST CURSOR (Visible globally) */}
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-white/20 rounded-full pointer-events-none z-[999] flex items-center justify-center hidden md:flex"
      style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>

    <div className="fixed inset-0 z-0 bg-[#0a1a12]" />

    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 backdrop-blur-xl bg-[#0a1a12]/80 font-mono">
      <div className="max-w-full flex justify-between items-center px-10 py-8">
        <motion.span 
          className="text-[10px] tracking-[0.4em] uppercase cursor-pointer"
          onClick={() => setPage("home")}
          whileHover={{ opacity: 0.5 }}
        >
          MUHAMMAD SHAHBAZ MURTAZA
        </motion.span>
        
        <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.3em]">
          {["about", "technical", "projects", "contact"].map((item) => (
            <button 
              key={item}
              onClick={() => setPage(item)} 
              className={page === item ? "text-white underline underline-offset-8" : "text-neutral-500 hover:text-white transition-colors"}
            >
              {item === "technical" ? "Experience" : item === "contact" ? "Contact Me" : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <a href="https://www.linkedin.com/in/muhammad-shahbaz-murtaza-64493022b/" target="_blank" className="text-neutral-500 hover:text-white">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </nav>

    <main className="relative z-10">
      <AnimatePresence mode="wait">
        
        {page === "home" && (
          <Section key="home" className="items-start relative overflow-hidden">
            
            {/* 2. DATA STREAM BACKGROUND (Specific to Home) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: "-100%" }}
                  transition={{ 
                    duration: 15 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 2 
                  }}
                  className="absolute font-mono text-[9px] text-white tracking-[0.2em] flex flex-col gap-12"
                  style={{ left: `${15 * i + 10}%` }}
                >
                  <span>CORR: 0.615</span>
                  <span>Σ_R²: 0.8456</span>
                  <span>BETA_EST: 0.8991</span>
                  <span>NULL_HYP: REJECT</span>
                </motion.div>
              ))}
            </div>

            <div className="max-w-6xl w-full relative z-10">
              {/* 3. GLITCH HEADING EFFECT */}
              <motion.h1 
                className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85] text-white uppercase"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1, 0.7, 1], x: [0, -1, 1, 0] }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                  className="block"
                >
                  Welcome to
                </motion.span> 
                <span className="relative">
                  My <span className="lowercase font-light tracking-normal normal-case text-neutral-300" style={{ fontFamily: "'Cedarville Cursive', cursive" }}>portfolio.</span>
                </span>
              </motion.h1>

              <div className="flex items-center flex-wrap gap-4 font-mono text-[11px] md:text-sm uppercase tracking-[0.4em] text-white/70 mt-10 mb-20">
                <span>Statistics Graduate</span> 
                <span className="text-xl text-white/40">◎</span> 
                <div className="flex items-center gap-3">
                  <span className="opacity-40">Aspiring</span>
                  <div className="relative h-6 inline-flex items-center min-w-[280px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[index]}
                        initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
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
                    whileHover={{ backgroundColor: "#ffffff", color: "#0a1a12", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPage("about")}
                    className="px-12 py-4 border border-white/20 text-white rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
                  >
                    My Story
                  </motion.button>
                  <a href="/resume.pdf" download="Shahbaz_Murtaza_Resume.pdf">
                    <motion.button 
                      whileHover={{ backgroundColor: "#ffffff", color: "#0a1a12", scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-4 border border-white/20 text-white rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
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
  <Section key="technical" className="items-start relative py-32">
    <div className="max-w-4xl w-full mx-auto px-6">
      
      {/* 1. MINIMALIST HEADER */}
      <div className="mb-24 border-l-2 border-white pl-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
        >
          Professional <br /> History
        </motion.h2>
        
      </div>

      {/* 2. THE LEDGER FEED */}
      <div className="relative space-y-1">
        {[
          {
            date: "June 2025 – Aug 2025",
            role: "Risk Management Intern",
            company: "Soneri Bank · Risk Division",
            desc: "Validated insurance credit risk model inputs (PD, LGD) in Excel, improving data accuracy by 15% for regulatory compliance.",
            tags: ["SQL", "Python", "Credit Risk"]
          },
          {
            date: "Sept. 2024 – May 2025",
            role: "Vice President, External",
            company: "UBC Actuarial Science Club",
            desc: "Curated interactive social media campaigns resulting in 40K+ views and supervised recruitment from a pool of 43 applicants.",
            tags: ["Leadership", "Partnerships"]
          },
          {
            date: "Sept. 2025 – Present",
            role: "Graphic Designer",
            company: "Get Thrifty UBC",
            desc: "Designed data-informed visuals by analyzing engagement metrics, resulting in a 50% increase in interaction.",
            tags: ["UX Design", "Data Analysis", "Figma"]
          },
          {
            date: "Sept. 2022 – Dec. 2025",
            role: "Auxiliary Sales Attendant",
            company: "Tim Hortons",
            desc: "Increased customer satisfaction survey scores by 20% through efficient deliverable prioritization.",
            tags: ["Operations", "Efficiency"]
          },
          {
            date: "June 2021 – Dec 2021",
            role: "Head of Marketing",
            company: "Sharkkfit",
            desc: "Directed social media strategy and brand positioning, focusing on community growth.",
            tags: ["Strategy", "Branding"]
          }
        ].map((job, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-lg"
          >
            {/* DATE COLUMN */}
            <div className="md:w-1/4 shrink-0">
              <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase sticky top-32">
                {job.date}
              </span>
            </div>

            {/* CONTENT COLUMN */}
            <div className="md:w-3/4">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors uppercase tracking-tight">
                  {job.role}
                </h3>
                <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.2em] mb-4">
                  {job.company}
                </p>
                
                <p className="text-neutral-400 font-light leading-relaxed max-w-2xl mb-6">
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* HOVER ACCENT LINE */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)}

          {page === "projects" && (
            <Section key="projects" className="justify-start pb-20">
              <div className="max-w-6xl w-full space-y-32">
                
               {/* --- TECHNICAL PROJECTS --- */}
<div className="space-y-12">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-baseline gap-4" // This keeps them on the same line
    >
      <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
        Technical
      </h2>
      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
        Quantitative
      </span>
    </motion.div>
    </div>

  {/* INTERACTIVE STACK / LIST */}
  <div className="flex flex-col space-y-4">
    {[
      { title: "Bayesian Volatility Modeling", stack: "R / Stan / Git", desc: "Modeled FAANG stocks using a Bayesian hierarchical AR(1)-GARCH(1,1) framework. Captured sector-level volatility persistence (β ≈ 0.899).", tags: ["Volatility Clustering", "HMC"], link: "https://github.com/shahbazayaz/stat447", type: "code" },
      { title: "Auto Insurance Pricing Model", stack: "Python / GLM", desc: "Developed a two-part actuarial pricing model using French motor claims data, estiamting pure premium.", tags: ["GLM", "Actuarial"], link: "https://github.com/shahbazayaz/auto-insurance-pricing-freMTPL2freq/tree/main", type: "code" },
      { title: "Fitness Relational Database", stack: "SQL / JavaScript/ Git", desc: "Built a normalized SQL database (3NF/BCNF) with a JS-based GUI. Implemented 10+ analytical queries for activity tracking.", tags: ["Normalization", "GUI"], link: "https://github.com/shahbazayaz/Fitness-Relational-Database", type: "db" },
      { title: "Optimizing Diabetes Prediction", stack: "R / Lasso / Git", desc: "Feature-engineered models using Logistic Regression and LASSO. Achieved 77% accuracy verified through AUC-ROC analysis.", tags: ["Lasso", "AUC-ROC"], link: "https://github.com/shahbazayaz/STAT-301", type: "stats" },
      { title: "Osmosis Factorial Design", stack: "ANOVA / Factorial", desc: "Experimental design testing for contrasts and interaction terms. Measured significance in treatment effects for Osmosis.", tags: ["ANOVA", "Design"], link: "/stat404_project.pdf", type: "pdf" },
      { title: "Insurance Dataset Analysis", stack: "R / GLM", desc: "Engineered a Multiple Linear Regression model with interaction terms to predict medical charges.", tags: ["GLM", "Risk"], link: "/stat306_insurance.pdf", type: "pdf" },
      { title: "Star Classification", stack: "R / ML", desc: "Applied machine learning classifiers to astronomical data to categorize stellar bodies based on spectral features.", tags: ["Data Science", "Scipy"], link: "https://github.com/shahbazayaz/dsci-100", type: "code" },
      { title: "Rice Quality Inference", stack: "R / Inference", desc: "Conducted formal hypothesis testing to analyze agricultural data consistency using CLT principles and p-values.", tags: ["Hypothesis", "Inference"], link: "https://github.com/yun-sky/stat-201-project", type: "stats" }
    ].map((project, i) => (
      <motion.a
        key={i}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.4 }}
        whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
        // Reduced transition duration to 0.2s for high responsiveness
        className="group relative grid grid-cols-1 md:grid-cols-12 items-center p-8 rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-200 ease-out overflow-hidden"
      >
        {/* Background Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none" />

        {/* Status Dot only */}
        <div className="hidden md:flex md:col-span-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-green-400 group-hover:shadow-[0_0_12px_rgba(74,222,128,0.8)] transition-all duration-200" />
        </div>

        {/* Project Info */}
        <div className="md:col-span-4 relative z-10">
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] block mb-2 group-hover:text-white/50 transition-colors duration-200">{project.stack}</span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tighter transition-all duration-200">
            {project.title}
          </h3>
        </div>

        {/* Description & Tags */}
        <div className="md:col-span-5 pr-8 relative z-10">
          <p className="text-neutral-500 group-hover:text-neutral-300 text-sm font-light leading-relaxed transition-colors duration-200 line-clamp-2 mb-3">
            {project.desc}
          </p>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            {project.tags.map(tag => (
              <span key={tag} className="text-[8px] font-mono py-0.5 px-2 border border-white/10 text-white/40 rounded-sm uppercase">{tag}</span>
            ))}
          </div>
        </div>

        {/* Action Button Icon Only */}
        <div className="md:col-span-2 flex justify-end relative z-10">
           <div className="p-3 rounded-full border border-white/5 group-hover:border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-200 shadow-xl">
             <ExternalLink size={14} />
           </div>
        </div>
      </motion.a>
    ))}
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

          {page === "contact" && (
  <Section key="contact" className="items-start justify-start relative overflow-hidden pt-32 px-6 md:px-12">
    {/* Background Depth - Blob and Grid restored */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_32px]" />
    </div>

    {/* Removed mx-auto to pin to left */}
    <div className="max-w-5xl w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Get in touch!
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left Side: Info */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-neutral-400 font-light leading-relaxed mb-8 text-base md:text-lg">
                Currently open to <span className="text-white">Quantitative Analyst</span> roles, 
                data analysis projects, or any actuarial opportunities. Reach out to me if interested!
              </p>
              
              <div className="space-y-4">
                <div className="space-y-1">
                   <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">Location</p>
                   <p className="text-sm uppercase tracking-wider text-white">Vancouver, BC</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a href="mailto:your-email@example.com" className="group flex items-center gap-4 transition-all">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={16} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Email Me</span>
              </a>
              <a href="https://linkedin.com/in/shahbazmurtaza" target="_blank" className="group flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Linkedin size={16} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="md:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 ml-2">Name</label>
                <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 ml-2">Email</label>
                <input type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 ml-2">Message</label>
              <textarea rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none" placeholder="Let's build something..." />
            </div>
            
            <motion.button
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-xl border border-white/10 font-mono text-[10px] uppercase tracking-[0.5em] transition-all duration-500 bg-transparent text-white"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  </Section>
)}
        </AnimatePresence>
      </main>
    </div>
  );
}