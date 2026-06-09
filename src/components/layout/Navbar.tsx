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
        <Link href="/" className="font-bold text-xl text-gray-900">
          Bienfait
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#6749cf] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#4a30a8] transition-colors"
        >
          On s&apos;appelle ?
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#6749cf] text-white text-sm font-medium px-4 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            On s&apos;appelle ?
          </Link>
        </div>
      )}
    </header>
  );
}
