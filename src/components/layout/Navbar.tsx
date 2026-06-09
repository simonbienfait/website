"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Offre", href: "/notre-offre" },
  { label: "Agence", href: "/agence-no-code" },
  { label: "Cas clients", href: "/cas-client" },
  { label: "Livre blanc", href: "/livre-blanc" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_20px_rgba(12,26,102,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-[var(--font-playfair)] font-bold text-xl text-[#0C1A66]">
          Bienfait
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#0C1A66]/70 hover:text-[#0C1A66] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#23CD8E] text-[#0C1A66] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1db87d] transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          On s&apos;appelle ?
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <motion.div animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-[#0C1A66] mb-1.5" />
          <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-[#0C1A66] mb-1.5" />
          <motion.div animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-[#0C1A66]" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 overflow-hidden"
          >
            <div className="py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#0C1A66] font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#23CD8E] text-[#0C1A66] text-sm font-semibold px-5 py-3 rounded-full text-center"
                onClick={() => setOpen(false)}
              >
                On s&apos;appelle ?
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
