"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Offre", href: "/notre-offre" },
  { label: "Agence", href: "/agence-no-code" },
  { label: "Cas clients", href: "/cas-client" },
  { label: "Livre blanc", href: "/livre-blanc" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-[var(--font-playfair)] font-bold text-xl text-[#0C1A66]">
          Bienfait
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#0C1A66] opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#23CD8E] text-[#0C1A66] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1db87d] transition-colors"
        >
          On s&apos;appelle ?
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-[#0C1A66] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#0C1A66] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#0C1A66]" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#0C1A66]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#23CD8E] text-[#0C1A66] text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            On s&apos;appelle ?
          </Link>
        </div>
      )}
    </header>
  );
}
