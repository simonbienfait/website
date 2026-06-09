import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bienfait — L'équipe tech des PME",
  description:
    "Nous construisons et intégrons les outils internes des PME. Sur-mesure, sans compromis. +150 projets livrés depuis 3 ans.",
  openGraph: {
    title: "Bienfait — L'équipe tech des PME",
    description: "Nous construisons et intégrons les outils internes des PME.",
    url: "https://bienfait.co",
    siteName: "Bienfait",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${workSans.variable} ${playfair.variable}`}>
      <body className="font-[var(--font-work-sans)]">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
