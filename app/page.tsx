// =====================================================
// CREATIVE AGENCY–STYLE PORTFOLIO
// Stack: Next.js-style React + Tailwind + Framer Motion
// Purpose: Structure + motion + theming (YOU write the copy)
// =====================================================

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/*
====================
HOW TO EDIT
====================
- TEXT: Replace content inside "EDIT COPY HERE"
- COLORS: Change Tailwind colors (neutral-950, neutral-100, etc.)
- FONTS: Add font in globals.css and swap className
- SECTIONS: Each <Section /> can become its own page later
*/

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

function Section({ children }) {
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
        <span className="font-semibold">EDIT NAME</span>
        <div className="flex gap-6 text-sm">
          <button onClick={() => setPage("technical")}>Technical</button>
          <button onClick={() => setPage("design")}>Design</button>
          <button onClick={() => setPage("projects")}>Projects</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">

        {/* ================= HOME / LANDING ================= */}
        {page === "home" && (
          <Section key="home">
            <div className="flex flex-col justify-center items-center text-center">
              <motion.h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                EDIT NAME
              </motion.h1>
              <p className="mt-8 max-w-xl text-neutral-400">
                {/* EDIT COPY HERE */}
                I build analytical systems with a creative point of view.
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
              {/* EDIT COPY HERE */}
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
