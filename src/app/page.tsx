import Button from "@/components/ui/Button";

const clients = [
  "Nike", "Accor", "Optic 2000", "ANAP", "Viva Technology",
  "Vacheron Constantin", "BNP Paribas", "Dassault", "AXA", "Michelin",
];

const services = [
  {
    title: "Audit de vos processus et de vos SI",
    description:
      "Nous analysons votre stack et vos workflows pour identifier les frictions et les opportunités d'automatisation.",
  },
  {
    title: "Création de vos logiciels sur-mesure",
    description:
      "Nous concevons et développons des outils no-code adaptés à vos besoins spécifiques, sans compromis.",
  },
  {
    title: "Maintenance et évolution de votre SI",
    description:
      "Nous assurons la pérennité de vos outils et les faisons évoluer avec votre activité.",
  },
];

const useCases = [
  {
    title: "ERP, CRM et ATS",
    description:
      "Centralisez vos données clients, RH et opérationnelles dans un outil unique adapté à vos processus.",
  },
  {
    title: "Portail client",
    description:
      "Offrez à vos clients un espace dédié pour suivre leurs projets, documents et échanges.",
  },
  {
    title: "Génération de documents et e-signature",
    description:
      "Automatisez la création de devis, contrats et rapports, et signez-les en ligne en quelques clics.",
  },
  {
    title: "Automatisation",
    description:
      "Éliminez les tâches répétitives grâce à des workflows automatisés entre vos outils.",
  },
  {
    title: "Facturation & Paiement",
    description:
      "Gérez vos factures, relances et encaissements depuis un seul endroit connecté à votre comptabilité.",
  },
  {
    title: "Application métier",
    description:
      "Construisez l'outil dont votre équipe a vraiment besoin, avec exactement les fonctionnalités qu'il faut.",
  },
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
  "Leexi", "Google Search", "Google Doc", "Memo Bank", "Yousign", "Brevo",
  "HubSpot", "Mollie", "Claap", "Google Maps", "Klaviyo", "Stripe",
  "CraftMyPDF", "Docusign", "Twilio", "Hunter", "Qonto", "Pennylane",
  "Google Drive", "Sellsy", "Pabau", "PDF-API", "Tella", "CoreSignal",
];

const articles = [
  {
    title: "Ce que l'IA change vraiment pour les PME",
    time: "6 min",
    category: "Tech",
  },
  {
    title: "Portail client HubSpot : quelle approche choisir ?",
    time: "6 min",
    category: "Outils",
  },
  {
    title: "n8n vs Make : lequel choisir ?",
    time: "12 min",
    category: "Comparatif",
  },
];

const faqs = [
  {
    q: "Comment financer mon projet no-code ?",
    a: "Vos projets peuvent être éligibles au Crédit Impôt Innovation (CII) et à d'autres dispositifs de financement selon votre situation.",
  },
  {
    q: "Qui assure la maintenance après livraison ?",
    a: "Nous proposons des contrats de maintenance pour assurer l'évolution et la stabilité de vos outils dans le temps.",
  },
  {
    q: "Mes données sont-elles sécurisées (RGPD) ?",
    a: "Oui, tous nos projets sont construits dans le respect du RGPD. Nous sélectionnons des outils conformes et mettons en place les bonnes pratiques.",
  },
  {
    q: "Quels types d'outils pouvez-vous créer ?",
    a: "CRM, ERP, portails clients, applications métier, outils de reporting, générateurs de documents… à peu près tout ce que votre équipe utilise au quotidien.",
  },
  {
    q: "Quelles automatisations sont possibles ?",
    a: "Synchronisation de données, envoi d'emails et notifications, génération de documents, intégrations API, workflows multi-étapes.",
  },
  {
    q: "Quelle est la durée et le tarif d'un projet ?",
    a: "Un projet type dure entre 4 et 12 semaines selon la complexité. Nos tarifs sont sur-mesure et discutés lors de l'appel de découverte.",
  },
];

const tickerText = "Bienfait : « Atteindre l'excellence opérationnelle grâce aux outils no-code »";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0C1A66] leading-tight mb-6 tracking-tight">
            L&apos;agence no-code des organisations ambitieuses
          </h1>
          <p className="text-lg md:text-xl text-[#0C1A66]/60 max-w-2xl mx-auto mb-10">
            Notre agence no-code <strong className="text-[#0C1A66]">vous</strong> accompagne dans la création d&apos;<strong className="text-[#0C1A66]">outils sur mesure</strong> pour améliorer l&apos;<strong className="text-[#0C1A66]">efficacité opérationnelle</strong> de vos équipes.
          </p>
          <Button href="/contact" size="lg" className="bg-[#0C1A66] text-white hover:bg-[#162580] rounded-full">
            Réserver un appel de découverte
          </Button>
          <p className="text-sm text-[#0C1A66]/40 mt-6">
            +150 projets no-code accompagnés depuis 3 ans
          </p>
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-y border-gray-100 py-8 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-3">
          {clients.map((c) => (
            <span key={c} className="text-sm font-semibold text-[#0C1A66]/30 uppercase tracking-wider">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Vision — 2 col */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0C1A66]/40 mb-4">Notre agence no-code</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1A66] mb-6 leading-tight">
              Vous aussi vous rangez des carrés dans les ronds ?
            </h2>
            <p className="text-[#0C1A66]/60 leading-relaxed mb-4">
              Vos outils ne correspondent jamais parfaitement à vos processus. Vous passez votre temps à adapter votre façon de travailler à des logiciels génériques qui ne vous ressemblent pas.
            </p>
            <p className="text-[#0C1A66]/60 leading-relaxed mb-8">
              Notre agence no-code crée des solutions sur mesure qui s&apos;adaptent à votre façon de travailler — pas l&apos;inverse. On vous libère du temps pour vous concentrer sur ce qui compte vraiment.
            </p>
            <Button href="/notre-offre" variant="outline">
              Découvrir notre offre
            </Button>
          </div>
          {/* Illustration placeholder */}
          <div className="bg-[#f8f7ff] rounded-3xl aspect-square flex items-center justify-center">
            <div className="text-center text-[#0C1A66]/30">
              <div className="text-6xl mb-3">🧩</div>
              <p className="text-sm">Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8f7ff] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-[#0C1A66] mb-3 text-lg">{s.title}</h3>
                <p className="text-[#0C1A66]/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0C1A66]/40 mb-3 text-center">Concrètement</p>
          <h2 className="text-3xl font-bold text-[#0C1A66] mb-4 text-center">
            Ce que nous pouvons faire ensemble.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-10">
            {useCases.map((u) => (
              <div key={u.title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#0C1A66] transition-colors">
                <h3 className="font-semibold text-[#0C1A66] mb-2">{u.title}</h3>
                <p className="text-[#0C1A66]/60 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button href="/cas-client" variant="outline">
              Découvrir nos cas clients
            </Button>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-[#E9D7FE]/40 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0C1A66]/40 mb-2">No-code</p>
              <h2 className="text-2xl font-bold text-[#0C1A66]">
                Notre sélection d&apos;outils no-code et low-code
              </h2>
            </div>
            <Button href="/outils" variant="outline" size="sm" className="hidden md:inline-flex">
              Toute la boîte à outils
            </Button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tools.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-[#0C1A66]">{t.name}</p>
                {t.badge === "partner" && <span className="text-xs text-[#6941C6] mt-1 block">★ partenaire</span>}
                {t.badge === "certified" && <span className="text-xs text-[#23CD8E] mt-1 block">★ certifié</span>}
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-6 text-xs text-[#0C1A66]/60">
            <span><span className="text-[#6941C6]">★</span> Outils partenaires</span>
            <span><span className="text-[#23CD8E]">★</span> Outils favoris et certifiés</span>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0C1A66]/40 mb-2">Intégrations</p>
              <h2 className="text-2xl font-bold text-[#0C1A66]">
                Intégrations API que nous maîtrisons
              </h2>
            </div>
            <Button href="/integrations" variant="outline" size="sm" className="hidden md:inline-flex">
              Toutes nos intégrations
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {integrations.map((i) => (
              <span
                key={i}
                className="border border-gray-200 rounded-full px-4 py-2 text-sm text-[#0C1A66]/60 hover:border-[#0C1A66] hover:text-[#0C1A66] transition-colors cursor-default"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[#f8f7ff] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0C1A66]/40 mb-2">Blog</p>
              <h2 className="text-2xl font-bold text-[#0C1A66]">
                Nos connaissances de l&apos;univers no-code
              </h2>
            </div>
            <Button href="/blog" variant="outline" size="sm" className="hidden md:inline-flex">
              Découvrir nos articles
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#E9D7FE]/30 aspect-video" />
                <div className="p-6">
                  <span className="text-xs font-medium text-[#6941C6] bg-[#E9D7FE] px-2 py-1 rounded-full">
                    {a.category}
                  </span>
                  <h3 className="font-semibold text-[#0C1A66] mt-3 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-xs text-[#0C1A66]/40">{a.time} de lecture</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker banner */}
      <div className="bg-[#23CD8E] py-4 overflow-hidden">
        <div className="flex gap-16 animate-none whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-sm font-semibold text-[#0C1A66] shrink-0">
              {tickerText} &nbsp;&nbsp;—
            </span>
          ))}
        </div>
      </div>

      {/* CTA section with image */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1A66] mb-4 leading-tight">
              Prêt à passer au no-code ?
            </h2>
            <p className="text-[#0C1A66]/60 mb-8 leading-relaxed">
              Rejoignez les 150 organisations qui ont déjà fait confiance à Bienfait pour transformer leur façon de travailler.
            </p>
            <Button href="/contact" size="lg" className="bg-[#0C1A66] text-white hover:bg-[#162580] rounded-full">
              Réserver un appel de découverte
            </Button>
          </div>
          <div className="bg-[#E9D7FE]/30 rounded-3xl aspect-video" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f7ff] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C1A66] mb-12 text-center">
            Vos questions.
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-2xl px-6 py-5 group">
                <summary className="font-semibold text-[#0C1A66] cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-[#0C1A66]/40 group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
                </summary>
                <p className="text-[#0C1A66]/60 text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
