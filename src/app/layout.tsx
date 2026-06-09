import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienfait — L'agence no-code des organisations ambitieuses",
  description:
    "Notre agence no-code vous accompagne dans la création d'outils sur mesure. +150 projets no-code accompagnés depuis 3 ans.",
  openGraph: {
    title: "Bienfait — L'agence no-code des organisations ambitieuses",
    description: "Notre agence no-code vous accompagne dans la création d'outils sur mesure.",
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
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
