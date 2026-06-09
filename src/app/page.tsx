"use client";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";
import HeroIllustration from "@/components/ui/illustrations/HeroIllustration";
import VisionIllustration from "@/components/ui/illustrations/VisionIllustration";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────── */

const clients = [
  "Nike", "Accor", "Optic 2000", "ANAP", "Viva Technology",
  "Vacheron Constantin", "BNP Paribas", "Dassault", "AXA", "Michelin",
  "Renault", "Société Générale",
];

const stats = [
  { value: 150, suffix: "+", label: "projets livrés" },
  { value: 3, suffix: " ans", label: "d'expérience" },
  { value: 98, suffix: "%", label: "de satisfaction client" },
  { value: 12, suffix: "", label: "outils maîtrisés" },
];

const services = [
  {
    title: "Audit & Conseil",
    description:
      "On cartographie vos flux, vos outils existants et vos points de friction pour identifier quoi construire en premier.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Développement sur-mesure",
    description:
      "On conçoit et développe des applications internes adaptées à vos besoins — pas à ceux d'un marché générique.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Intégration & Maintenance",
    description:
      "On connecte vos outils entre eux et on assure leur évolution dans le temps.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const useCases = [
  { title: "ERP, CRM et ATS", description: "Centralisez vos données clients, RH et opérationnelles dans un outil unique adapté à vos processus." },
  { title: "Portail client", description: "Offrez à vos clients un espace dédié pour suivre leurs projets, documents et échanges." },
  { title: "Génération de documents", description: "Automatisez la création de devis, contrats et rapports, et signez-les en ligne en quelques clics." },
  { title: "Automatisation", description: "Éliminez les tâches répétitives grâce à des workflows automatisés entre vos outils." },
  { title: "Facturation & Paiement", description: "Gérez vos factures, relances et encaissements depuis un seul endroit connecté à votre comptabilité." },
  { title: "Application métier", description: "Construisez l'outil dont votre équipe a vraiment besoin, avec exactement les fonctionnalités qu'il faut." },
];

const tools = [
  { name: "Airtable", badge: "partner" },
  { name: "Bubble", badge: "certified" },
  { name: "Figma", badge: null },
  { name: "Fillout", badge: null },
  { name: "Glide", badge: "certified" },
  { name: "Make", badge: "partner" },
  { name: "n8n", badge: "certified" },
  { name: "Notion", badge: null },
  { name: "Softr", badge: "partner" },
  { name: "Stacker", badge: null },
  { name: "WeWeb", badge: "partner" },
  { name: "Xano", badge: "certified" },
];

const integrations = [
  "Leexi", "Google Doc", "Memo Bank", "Yousign", "Brevo", "HubSpot",
  "Mollie", "Claap", "Google Maps", "Klaviyo", "Stripe", "CraftMyPDF",
  "Docusign", "Twilio", "Hunter", "Qonto", "Pennylane", "Google Drive",
  "Sellsy", "Pabau", "PDF-API", "Tella",
];

const articles = [
  { title: "Ce que l'IA change vraiment pour les PME", time: "6 min", category: "Tech", color: "from-[#E9D7FE] to-[#D2ECE1]" },
  { title: "Portail client HubSpot : quelle approche choisir ?", time: "6 min", category: "Outils", color: "from-[#D2ECE1] to-[#E9D7FE]" },
  { title: "Automatisation vs développement : lequel choisir ?", time: "12 min", category: "Méthode", color: "from-[#E9D7FE] to-[#c7d8ff]" },
];

const faqs = [
  { q: "Comment financer mon projet ?", a: "Vos projets peuvent être éligibles au Crédit Impôt Innovation (CII) et à d'autres dispositifs de financement selon votre situation." },
  { q: "Qui assure la maintenance après livraison ?", a: "Nous proposons des contrats de maintenance pour assurer l'évolution et la stabilité de vos outils dans le temps." },
  { q: "Mes données sont-elles sécurisées (RGPD) ?", a: "Oui, tous nos projets sont construits dans le respect du RGPD. Nous sélectionnons des outils conformes et mettons en place les bonnes pratiques." },
  { q: "Quels types d'outils pouvez-vous créer ?", a: "CRM, ERP, portails clients, applications métier, outils de reporting, générateurs de documents… à peu près tout ce que votre équipe utilise au quotidien." },
  { q: "Quelles intégrations sont possibles ?", a: "Synchronisation de données, notifications, génération de documents, intégrations API, workflows multi-étapes — le champ est très large." },
  { q: "Quelle est la durée et le tarif d'un projet ?", a: "Un projet type dure entre 4 et 12 semaines selon la complexité. Nos tarifs sont sur-mesure et discutés lors de l'appel de découverte." },
];

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden px-4 pt-16">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E9D7FE]/40 blur-[100px] -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D2ECE1]/50 blur-[80px] translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#E9D7FE] text-[#6941C6] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#23CD8E] animate-pulse" />
                +150 projets livrés depuis 3 ans
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-[64px] font-bold text-[#0C1A66] leading-[1.1] tracking-tight mb-6"
            >
              L&apos;équipe tech<br />
              <span className="text-[#6941C6]">des PME</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[#0C1A66]/60 mb-10 leading-relaxed max-w-md"
            >
              Nous construisons et intégrons les <strong className="text-[#0C1A66] font-semibold">outils internes</strong> qui font vraiment tourner votre business — sur-mesure, sans compromis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button href="/contact" size="lg" className="bg-[#0C1A66] text-white hover:bg-[#162580] rounded-full shadow-lg shadow-[#0C1A66]/20 hover:shadow-[#0C1A66]/30 transition-all hover:-translate-y-0.5">
                Réserver un appel →
              </Button>
              <Button href="/notre-offre" variant="outline" size="lg">
                Voir notre offre
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-[#0C1A66]/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#0C1A66]/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Clients marquee ── */}
      <section className="bg-[#0C1A66] py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/30 mb-6 px-4">
          Ils nous font confiance
        </p>
        <Marquee speed={35}>
          {clients.map((c) => (
            <span key={c} className="text-sm font-semibold text-white/40 uppercase tracking-wider mx-10 shrink-0">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0C1A66] border-t border-white/5 pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-white/40 font-medium">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-4">Notre approche</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A66] mb-6 leading-tight">
              Vos outils ne sont pas faits pour vous.
            </h2>
            <p className="text-[#0C1A66]/60 leading-relaxed mb-4 text-lg">
              Les SaaS génériques ne couvrent jamais exactement vos processus. Vous finissez par adapter votre façon de travailler à des logiciels pensés pour tout le monde — donc pour personne.
            </p>
            <p className="text-[#0C1A66]/60 leading-relaxed mb-10">
              On fait l&apos;inverse : on construit les outils qui collent à votre réalité opérationnelle, et on les intègre dans votre stack existante.
            </p>
            <Button href="/notre-offre" variant="outline">
              Découvrir notre offre →
            </Button>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <VisionIllustration />
          </FadeIn>
        </div>
      </section>

      {/* ── Services — dark bg ── */}
      <section className="bg-[#0C1A66] py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#23CD8E] mb-3">Ce qu&apos;on fait</p>
            <h2 className="text-4xl font-bold text-white mb-16 max-w-lg leading-tight">
              Trois façons de travailler ensemble.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.22 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E9D7FE]/10 flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Concrètement</p>
                <h2 className="text-4xl font-bold text-[#0C1A66] leading-tight">
                  Ce que nous pouvons<br />faire ensemble.
                </h2>
              </div>
              <Button href="/cas-client" variant="outline" className="shrink-0">
                Voir nos réalisations →
              </Button>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((u, i) => (
              <FadeIn key={u.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "#6941C6" }}
                  transition={{ duration: 0.18 }}
                  className="border border-gray-200 rounded-2xl p-7 h-full cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E9D7FE] mb-4 flex items-center justify-center group-hover:bg-[#6941C6] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#6941C6] group-hover:bg-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#0C1A66] mb-2">{u.title}</h3>
                  <p className="text-[#0C1A66]/55 text-sm leading-relaxed">{u.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="bg-[#f6f4ff] py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Stack technique</p>
                <h2 className="text-4xl font-bold text-[#0C1A66]">
                  Les outils que<br />nous maîtrisons
                </h2>
              </div>
              <Button href="/outils" variant="outline" className="shrink-0">
                Toute notre stack →
              </Button>
            </div>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tools.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(105,65,198,0.15)" }}
                  transition={{ duration: 0.18 }}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-transparent hover:border-[#E9D7FE] transition-colors"
                >
                  <p className="text-sm font-semibold text-[#0C1A66]">{t.name}</p>
                  {t.badge === "partner" && <p className="text-[10px] text-[#6941C6] mt-1">★ partenaire</p>}
                  {t.badge === "certified" && <p className="text-[10px] text-[#23CD8E] mt-1">★ certifié</p>}
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="flex gap-6 mt-8 text-xs text-[#0C1A66]/50">
              <span><span className="text-[#6941C6]">★</span> Outils partenaires</span>
              <span><span className="text-[#23CD8E]">★</span> Outils certifiés</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Intégrations</p>
                <h2 className="text-4xl font-bold text-[#0C1A66]">
                  Les intégrations<br />que nous livrons
                </h2>
              </div>
              <Button href="/integrations" variant="outline" className="shrink-0">
                Toutes nos intégrations →
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {integrations.map((integ) => (
                <motion.span
                  key={integ}
                  whileHover={{ scale: 1.05, backgroundColor: "#0C1A66", color: "#fff", borderColor: "#0C1A66" }}
                  transition={{ duration: 0.15 }}
                  className="border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-[#0C1A66]/60 cursor-default"
                >
                  {integ}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="bg-[#f6f4ff] py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Ressources</p>
                <h2 className="text-4xl font-bold text-[#0C1A66]">
                  Nos ressources pour<br />les équipes tech des PME
                </h2>
              </div>
              <Button href="/blog" variant="outline" className="shrink-0">
                Tous les articles →
              </Button>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.1}>
                <motion.a
                  href="/blog"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm block group"
                >
                  <div className={`bg-gradient-to-br ${a.color} aspect-[16/9]`} />
                  <div className="p-7">
                    <span className="text-[11px] font-semibold text-[#6941C6] bg-[#E9D7FE] px-3 py-1 rounded-full">
                      {a.category}
                    </span>
                    <h3 className="font-semibold text-[#0C1A66] mt-4 mb-3 leading-snug text-lg group-hover:text-[#6941C6] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-xs text-[#0C1A66]/40 font-medium">{a.time} de lecture</p>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="bg-[#23CD8E] py-4 overflow-hidden">
        <Marquee speed={28}>
          <span className="text-sm font-bold text-[#0C1A66]/80 shrink-0 px-10">
            L&apos;équipe tech des PME ✦
          </span>
          <span className="text-sm font-bold text-[#0C1A66]/80 shrink-0 px-10">
            Nous construisons vos outils internes ✦
          </span>
          <span className="text-sm font-bold text-[#0C1A66]/80 shrink-0 px-10">
            Sur-mesure, sans compromis ✦
          </span>
          <span className="text-sm font-bold text-[#0C1A66]/80 shrink-0 px-10">
            +150 projets livrés ✦
          </span>
        </Marquee>
      </div>

      {/* ── CTA final — dark ── */}
      <section className="bg-[#0C1A66] py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6941C6]/20 blur-[80px] -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#23CD8E]/10 blur-[80px] translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#23CD8E] mb-4">Passons à l&apos;action</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à équiper<br />votre équipe ?
            </h2>
            <p className="text-white/50 mb-12 text-lg leading-relaxed">
              Rejoignez les 150 PME qui ont déjà fait confiance à Bienfait pour construire leurs outils internes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-[#23CD8E] text-[#0C1A66] hover:bg-[#1db87d] rounded-full font-bold shadow-lg shadow-[#23CD8E]/20 hover:-translate-y-0.5 transition-all">
                Réserver un appel de découverte
              </Button>
              <Button href="/cas-client" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-all">
                Voir nos réalisations
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3 text-center">FAQ</p>
            <h2 className="text-4xl font-bold text-[#0C1A66] mb-16 text-center">
              Vos questions.
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.06}>
                <details className="bg-gray-50 rounded-2xl px-7 py-5 group open:bg-white open:shadow-md open:border open:border-gray-100 transition-all">
                  <summary className="font-semibold text-[#0C1A66] cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-[#6941C6] group-open:rotate-45 transition-transform duration-200 text-2xl shrink-0 font-light">+</span>
                  </summary>
                  <p className="text-[#0C1A66]/60 text-sm leading-relaxed mt-4 pr-8">{f.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
