"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";

/* ─── Data ─────────────────────────────────────────── */

const clients = [
  "Nike", "Accor", "Optic 2000", "ANAP", "Viva Technology",
  "Vacheron Constantin", "BNP Paribas", "Dassault", "AXA", "Michelin",
  "Renault", "Société Générale",
];

const deliverables = [
  {
    number: "01",
    title: "Un CRM calqué sur votre process de vente",
    description: "Pas un CRM générique qu'on reconfigure. Un outil pensé pour vos étapes, vos équipes, vos objections.",
    outcome: "+34% de taux de closing pour l'un de nos clients PME.",
    tag: "CRM sur-mesure",
  },
  {
    number: "02",
    title: "Un portail client qui porte votre image",
    description: "Vos clients accèdent à leurs projets, documents et échanges depuis un espace à votre couleur — pas un lien Notion partagé.",
    outcome: "Réduction de 60% des allers-retours email.",
    tag: "Portail client",
  },
  {
    number: "03",
    title: "Un SI interne qui tourne seul",
    description: "Factures, contrats, relances, synchronisations. Les tâches répétitives sont automatisées. Votre équipe fait autre chose.",
    outcome: "8h économisées par semaine en moyenne.",
    tag: "Automatisation",
  },
];

const steps = [
  {
    n: "01",
    title: "On comprend votre métier",
    duration: "2 semaines",
    description: "Audit des processus, cartographie de la stack, identification des frictions. On ne code rien avant d'avoir compris.",
  },
  {
    n: "02",
    title: "On construit, vous validez",
    duration: "4 à 8 semaines",
    description: "Livraisons itératives, démos bi-hebdomadaires. Vous testez sur des données réelles avant la mise en production.",
  },
  {
    n: "03",
    title: "On reste là pour la suite",
    duration: "Continu",
    description: "Maintenance, évolutions, nouvelles intégrations. On s'inscrit dans la durée, pas dans une prestation one-shot.",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "projets livrés" },
  { value: 3, suffix: " ans", label: "d'expérience" },
  { value: 98, suffix: "%", label: "satisfaction client" },
  { value: 40, suffix: "h", label: "économisées en moyenne par mois" },
];

const stackLayers = [
  {
    label: "Interface",
    color: "#E9D7FE",
    textColor: "#6941C6",
    tools: ["WeWeb", "Bubble", "Glide", "Softr"],
  },
  {
    label: "Logique métier",
    color: "#D2ECE1",
    textColor: "#16a34a",
    tools: ["Make", "n8n", "Zapier", "Fillout"],
  },
  {
    label: "Base de données",
    color: "#c7d8ff",
    textColor: "#0C1A66",
    tools: ["Airtable", "Xano", "Notion", "Supabase"],
  },
  {
    label: "Intégrations",
    color: "#fde8d8",
    textColor: "#c2410c",
    tools: ["Stripe", "HubSpot", "Yousign", "Brevo"],
  },
];

const chaosTools = [
  { name: "Slack",     x: 12,  y: 8  },
  { name: "Notion",    x: 62,  y: 5  },
  { name: "HubSpot",   x: 82,  y: 22 },
  { name: "Excel",     x: 5,   y: 40 },
  { name: "Trello",    x: 45,  y: 35 },
  { name: "Gmail",     x: 78,  y: 55 },
  { name: "Airtable",  x: 20,  y: 65 },
  { name: "Drive",     x: 58,  y: 72 },
  { name: "Zapier",    x: 88,  y: 78 },
  { name: "Figma",     x: 35,  y: 85 },
];

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const titleWords = ["Votre", "prochain", "outil interne", "est en retard."];

  return (
    <>
      {/* ══════════════════════════════════════
          1. OUVERTURE — Manifeste
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden px-6 md:px-16 pt-16">

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "180px" }} />

        {/* Accent blob */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[#E9D7FE]/60 blur-[120px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-6xl w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#23CD8E] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0C1A66]/50">
              L&apos;équipe tech des PME
            </span>
          </motion.div>

          {/* Headline staggered */}
          <div className="mb-10">
            {titleWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <span className={`block font-bold leading-[1.05] tracking-tight text-[clamp(52px,8vw,100px)] ${i === 3 ? "text-[#6941C6]" : "text-[#0C1A66]"}`}>
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Body + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <p className="text-[#0C1A66]/55 text-lg leading-relaxed max-w-sm">
              Nous intégrons et construisons les outils internes des PME — sur-mesure, sans compromis, sans retard.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#0C1A66] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#162580] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0C1A66]/20">
                Démarrer un projet
              </Link>
              <Link href="/notre-offre"
                className="inline-flex items-center gap-2 text-[#0C1A66] text-sm font-medium px-5 py-3.5 rounded-full border border-[#0C1A66]/20 hover:border-[#0C1A66]/50 transition-colors">
                Notre offre →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Clients strip at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-[#0C1A66]/08 py-5"
        >
          <Marquee speed={40} className="opacity-40">
            {clients.map((c) => (
              <span key={c} className="text-xs font-semibold uppercase tracking-widest text-[#0C1A66] mx-10 shrink-0">{c}</span>
            ))}
          </Marquee>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. LE PROBLÈME — Split visuel
      ══════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        {/* Left — chaos visual */}
        <div className="bg-[#f6f4ff] relative overflow-hidden flex items-center justify-center p-12 min-h-[400px]">
          <FadeIn>
            <div className="relative w-full max-w-sm aspect-square">
              {chaosTools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: "backOut" }}
                  style={{ left: `${t.x}%`, top: `${t.y}%` }}
                  className="absolute"
                >
                  <div className="bg-white border border-[#0C1A66]/10 rounded-xl px-3 py-1.5 text-xs font-semibold text-[#0C1A66]/60 shadow-sm whitespace-nowrap">
                    {t.name}
                  </div>
                </motion.div>
              ))}
              {/* Dashed connection lines via SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M15 10 Q50 50 85 25" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                <path d="M65 7 Q30 45 10 43" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                <path d="M85 25 Q60 60 22 68" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                <path d="M47 37 Q70 65 90 80" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                <path d="M10 43 Q35 70 62 75" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                <path d="M22 68 Q55 60 90 80" stroke="#6941C6" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
              </svg>
            </div>
            <p className="text-center text-xs font-medium text-[#0C1A66]/30 mt-6 uppercase tracking-widest">Votre stack actuelle</p>
          </FadeIn>
        </div>

        {/* Right — statement */}
        <div className="bg-[#0C1A66] flex items-center p-12 md:p-16">
          <FadeIn direction="right">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#23CD8E] mb-6">Le problème</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Vous utilisez 8 outils qui ne se parlent pas.<br />
              <span className="text-[#23CD8E]">On en fait un.</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg mb-10">
              Chaque SaaS générique est conçu pour le marché. Pas pour votre process de facturation spécifique, pas pour votre cycle de vente à 7 étapes, pas pour votre équipe de 12 personnes.
            </p>
            <Link href="/notre-offre"
              className="inline-flex items-center gap-2 text-[#23CD8E] text-sm font-semibold border border-[#23CD8E]/40 px-6 py-3 rounded-full hover:bg-[#23CD8E]/10 transition-colors">
              Comment on résout ça →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. CE QU'ON CONSTRUIT — Cards
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Ce qu&apos;on livre</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A66] leading-tight">
                Des outils réels,<br />des résultats mesurés.
              </h2>
            </div>
            <Link href="/cas-client" className="text-sm font-semibold text-[#0C1A66]/50 hover:text-[#0C1A66] transition-colors shrink-0">
              Voir toutes nos réalisations →
            </Link>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto space-y-4">
          {deliverables.map((d, i) => (
            <FadeIn key={d.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-center border border-gray-100 rounded-3xl p-8 md:p-10 hover:border-[#6941C6]/30 hover:bg-[#f6f4ff]/50 transition-all cursor-default"
              >
                <span className="text-5xl font-bold text-[#0C1A66]/10 group-hover:text-[#6941C6]/20 transition-colors font-mono">
                  {d.number}
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6941C6] bg-[#E9D7FE] px-3 py-1 rounded-full mb-3 inline-block">
                    {d.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0C1A66] mb-2">{d.title}</h3>
                  <p className="text-[#0C1A66]/55 leading-relaxed max-w-xl">{d.description}</p>
                </div>
                <div className="bg-[#D2ECE1] rounded-2xl px-6 py-4 text-center shrink-0 max-w-[180px]">
                  <p className="text-xs text-[#0C1A66]/50 font-medium mb-1">Résultat type</p>
                  <p className="text-sm font-bold text-[#0C1A66] leading-snug">{d.outcome}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. COMMENT ON TRAVAILLE
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-16 bg-[#0C1A66] relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6941C6]/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#23CD8E] mb-3">La méthode</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 leading-tight">
              Comment on travaille.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[28px] left-[calc(16.6%+16px)] right-[calc(16.6%+16px)] h-px bg-white/10" />

            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.12}>
                <div className="relative">
                  {/* Number circle */}
                  <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center mb-8 bg-white/5">
                    <span className="text-lg font-bold text-white/40 font-mono">{s.n}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#23CD8E]" />
                    <span className="text-xs font-medium text-white/60">{s.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CAS CLIENT FEATURED
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-16 max-w-6xl mx-auto">Exemple de réalisation</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-6xl mx-auto bg-[#0C1A66] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Text */}
              <div className="p-12 md:p-16 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#23CD8E]/70 bg-[#23CD8E]/10 px-3 py-1 rounded-full mb-8 inline-block">
                    CRM sur-mesure
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                    Un CRM pensé pour une équipe commerciale de 15 personnes.
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-10">
                    Le CRM existant était trop complexe pour l&apos;équipe, trop simple pour les managers. On en a construit un sur-mesure en 6 semaines.
                  </p>
                </div>
                <Link href="/cas-client"
                  className="inline-flex items-center gap-2 text-[#23CD8E] text-sm font-semibold border border-[#23CD8E]/30 px-6 py-3 rounded-full hover:bg-[#23CD8E]/10 transition-colors w-fit">
                  Lire le cas client →
                </Link>
              </div>
              {/* Stats */}
              <div className="bg-[#E9D7FE]/10 border-l border-white/5 p-12 md:p-16 flex flex-col justify-center gap-10">
                {[
                  { n: "+34%", label: "de taux de closing" },
                  { n: "6 sem.", label: "de délai de livraison" },
                  { n: "15", label: "utilisateurs au quotidien" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl md:text-5xl font-bold text-white">{stat.n}</p>
                    <p className="text-white/40 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ══════════════════════════════════════
          6. STACK — Couches techniques
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-16 bg-[#f6f4ff]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-3">Stack technique</p>
                <h2 className="text-4xl font-bold text-[#0C1A66] leading-tight">
                  Une architecture<br />en couches.
                </h2>
              </div>
              <p className="text-[#0C1A66]/50 max-w-xs text-sm leading-relaxed">
                Chaque couche est choisie selon votre contexte. On n&apos;a pas de stack imposée — on choisit le meilleur outil pour chaque problème.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {stackLayers.map((layer, i) => (
              <FadeIn key={layer.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 border border-transparent hover:border-[#E9D7FE] transition-all"
                >
                  <div className="shrink-0 flex items-center gap-3 sm:w-40">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: layer.textColor }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: layer.textColor }}>
                      {layer.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-sm font-medium px-4 py-1.5 rounded-full border"
                        style={{ backgroundColor: layer.color + "66", color: layer.textColor, borderColor: layer.color }}
                      >
                        {tool}
                      </span>
                    ))}
                    <span className="text-sm font-medium text-[#0C1A66]/30 px-4 py-1.5">+ selon votre contexte</span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. TICKER
      ══════════════════════════════════════ */}
      <div className="bg-[#23CD8E] py-4 overflow-hidden">
        <Marquee speed={28}>
          {["L'équipe tech des PME", "Outils internes sur-mesure", "+150 projets livrés", "Sans compromis", "Démarrons maintenant"].map((t) => (
            <span key={t} className="text-sm font-bold text-[#0C1A66]/70 shrink-0 px-10">
              {t} ✦
            </span>
          ))}
        </Marquee>
      </div>

      {/* ══════════════════════════════════════
          8. STATS
      ══════════════════════════════════════ */}
      <section className="bg-[#0C1A66] py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div>
                <p className="text-4xl md:text-6xl font-bold text-white mb-2 leading-none">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-white/35 font-medium leading-snug">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. CTA FINAL
      ══════════════════════════════════════ */}
      <section className="py-40 px-6 md:px-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#E9D7FE]/50 blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6941C6] mb-6">Passons à l&apos;action</p>
            <h2 className="text-5xl md:text-[80px] font-bold text-[#0C1A66] leading-[1.05] tracking-tight mb-6">
              Votre concurrent,<br />
              <span className="text-[#6941C6]">lui, n&apos;attend pas.</span>
            </h2>
            <p className="text-[#0C1A66]/50 text-xl leading-relaxed mb-14 max-w-xl mx-auto">
              Prenez 30 minutes pour nous parler de votre projet. On vous dit honnêtement si on peut vous aider — et comment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0C1A66] text-white text-base font-bold px-10 py-4 rounded-full hover:bg-[#162580] transition-all hover:-translate-y-1 shadow-xl shadow-[#0C1A66]/20">
                Réserver un appel de découverte
              </Link>
              <Link href="/cas-client"
                className="inline-flex items-center justify-center gap-2 text-[#0C1A66] text-base font-semibold px-8 py-4 rounded-full border border-[#0C1A66]/20 hover:border-[#0C1A66]/50 transition-colors">
                Voir nos réalisations →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
