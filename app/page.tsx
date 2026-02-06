"use client";

// 1. Added ReactNode to the imports for TypeScript support
import React, { useState, ReactNode } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

// 2. Added a type definition for the Section props
interface SectionProps {
  children: ReactNode;
}

// 3. Applied the type to the Section component
function Section({ children }: SectionProps) {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen px-8 py-24"
    >
      {children}
    </motion.section>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-neutral-950 text-neutral-100 transition-colors duration-500">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur bg-neutral-950/60">
        <span className="font-semibold uppercase tracking-widest">Shahbaz Ayaz</span>
        <div className="flex gap-6 text-sm">
          <button onClick={() => setPage("home")} className={page === "home" ? "text-white" : "text-neutral-500"}>Home</button>
          <button onClick={() => setPage("technical")} className={page === "technical" ? "text-white" : "text-neutral-500"}>Technical</button>
          <button onClick={() => setPage("design")} className={page === "design" ? "text-white" : "text-neutral-500"}>Design</button>
          <button onClick={() => setPage("projects")} className={page === "projects" ? "text-white" : "text-neutral-500"}>Projects</button>
          <button onClick={() => setPage("contact")} className={page === "contact" ? "text-white" : "text-neutral-500"}>Contact</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {/* ================= HOME / LANDING ================= */}
        {page === "home" && (
          <Section key="home">
            <div className="flex flex-col justify-center items-center text-center">
              <motion.h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                SHAHBAZ
              </motion.h1>
              <p className="mt-8 max-w-xl text-neutral-400">
                I build analytical systems with a creative point of view. 
                Bridging the gap between data science and aesthetic design.
              </p>
              <div className="mt-12 flex gap-4">
                <Button onClick={() => setPage("projects")}>View Work</Button>
                <Button variant="outline" onClick={() => setPage("contact")}>Contact</Button>
              </div>
            </div>
          </Section>
        )}

        {/* ================= TECHNICAL ================= */}
        {page === "technical" && (
          <Section key="technical">
            <h2 className="text-5xl font-semibold mb-12">Technical Experience</h2>
            <div className="grid gap-8 max-w-5xl">
              <Card><CardContent className="p-6">Risk & Actuarial — Bank internship · Exam P · ASC</CardContent></Card>
              <Card><CardContent className="p-6">Statistics & ML — Bayesian, LASSO, ANOVA, classification</CardContent></Card>
              <Card><CardContent className="p-6">Systems — Java, SQL, data pipelines</CardContent></Card>
            </div>
          </Section>
        )}

        {/* ================= DESIGN ================= */}
        {page === "design" && (
          <Section key="design">
            <h2 className="text-5xl font-semibold mb-12">Design Experience</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card><CardContent className="p-6">Graphic Design — Get Thrifty</CardContent></Card>
              <Card><CardContent className="p-6">Marketing & Social — ASC · Sharkkfit</CardContent></Card>
              <Card><CardContent className="p-6">Writing — Poetry · Editorial thinking</CardContent></Card>
            </div>
          </Section>
        )}

        {/* ================= PROJECTS ================= */}
        {page === "projects" && (
          <Section key="projects">
            <h2 className="text-5xl font-semibold mb-12">Projects</h2>
            <div className="space-y-8 max-w-5xl">
              <Card><CardContent className="p-6">Bayesian Modeling · STAT 447</CardContent></Card>
              <Card><CardContent className="p-6">Diabetes Prediction · LASSO</CardContent></Card>
              <Card><CardContent className="p-6">Java Systems · SQL Databases</CardContent></Card>
              <Card><CardContent className="p-6">Creative Writing · Poetry · Newsletters</CardContent></Card>
            </div>
          </Section>
        )}

        {/* ================= CONTACT ================= */}
        {page === "contact" && (
          <Section key="contact">
            <h2 className="text-5xl font-semibold mb-6">Contact</h2>
            <p className="max-w-lg text-neutral-400 mb-8">
              Open to collaboration, conversation, and interesting problems.
            </p>
            <Button>Email Me</Button>
          </Section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="text-center text-neutral-500 py-10">
        © {new Date().getFullYear()} · Designed & built intentionally
      </footer>
    </div>
  );
}
