import Link from "next/link";

const footerLinks = {
  expertise: [
    { label: "Agence Airtable", href: "/agence/airtable" },
    { label: "Agence Xano", href: "/agence/xano" },
    { label: "Agence Make", href: "/agence/make" },
    { label: "Agence WeWeb", href: "/agence/weweb" },
    { label: "Agence Softr", href: "/agence/softr" },
  ],
  nav: [
    { label: "Offre", href: "/notre-offre" },
    { label: "Agence", href: "/agence-no-code" },
    { label: "Cas clients", href: "/cas-client" },
    { label: "Blog", href: "/blog" },
    { label: "Outils", href: "/outils" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
          <div className="md:col-span-2">
            <p className="font-bold text-xl mb-2">Bienfait</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              L&apos;agence no-code des organisations ambitieuses.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              +150 projets no-code accompagnés depuis 3 ans
            </p>
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "X", "Instagram", "YouTube"].map((s) => (
                <span key={s} className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Expertise</p>
            <ul className="space-y-3">
              {footerLinks.expertise.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>© 2021-2025 Bienfait. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="/mentionslegales" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
