export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background card - main app window */}
      <rect x="60" y="40" width="340" height="240" rx="16" fill="#E9D7FE" />
      <rect x="60" y="40" width="340" height="44" rx="16" fill="#6941C6" />
      <rect x="60" y="68" width="340" height="16" fill="#6941C6" />

      {/* Traffic lights */}
      <circle cx="88" cy="62" r="6" fill="#E9D7FE" fillOpacity="0.5" />
      <circle cx="108" cy="62" r="6" fill="#E9D7FE" fillOpacity="0.5" />
      <circle cx="128" cy="62" r="6" fill="#E9D7FE" fillOpacity="0.5" />

      {/* Sidebar */}
      <rect x="76" y="100" width="72" height="164" rx="8" fill="white" fillOpacity="0.6" />
      <rect x="88" y="116" width="48" height="8" rx="4" fill="#6941C6" fillOpacity="0.4" />
      <rect x="88" y="132" width="40" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="146" width="44" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="160" width="36" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="174" width="42" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="188" width="38" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="202" width="44" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="88" y="228" width="48" height="20" rx="6" fill="#23CD8E" />

      {/* Main content area */}
      <rect x="164" y="100" width="220" height="76" rx="8" fill="white" fillOpacity="0.7" />
      <rect x="176" y="114" width="80" height="8" rx="4" fill="#0C1A66" fillOpacity="0.7" />
      <rect x="176" y="130" width="120" height="6" rx="3" fill="#0C1A66" fillOpacity="0.3" />
      <rect x="176" y="144" width="100" height="6" rx="3" fill="#0C1A66" fillOpacity="0.3" />
      <rect x="300" y="114" width="72" height="28" rx="6" fill="#23CD8E" />
      <rect x="312" y="123" width="48" height="10" rx="2" fill="white" fillOpacity="0.8" />

      {/* Stats cards row */}
      <rect x="164" y="188" width="66" height="52" rx="8" fill="white" fillOpacity="0.7" />
      <rect x="174" y="198" width="30" height="6" rx="3" fill="#0C1A66" fillOpacity="0.4" />
      <rect x="174" y="210" width="46" height="10" rx="3" fill="#6941C6" />

      <rect x="239" y="188" width="66" height="52" rx="8" fill="white" fillOpacity="0.7" />
      <rect x="249" y="198" width="30" height="6" rx="3" fill="#0C1A66" fillOpacity="0.4" />
      <rect x="249" y="210" width="46" height="10" rx="3" fill="#23CD8E" />

      <rect x="314" y="188" width="66" height="52" rx="8" fill="white" fillOpacity="0.7" />
      <rect x="324" y="198" width="30" height="6" rx="3" fill="#0C1A66" fillOpacity="0.4" />
      <rect x="324" y="210" width="46" height="10" rx="3" fill="#0C1A66" fillOpacity="0.5" />

      {/* Floating card bottom-left */}
      <rect x="20" y="220" width="120" height="80" rx="12" fill="white" filter="url(#shadow1)" />
      <circle cx="44" cy="244" r="12" fill="#D2ECE1" />
      <path d="M38 244 L42 248 L50 240" stroke="#23CD8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="238" width="64" height="8" rx="4" fill="#0C1A66" fillOpacity="0.7" />
      <rect x="62" y="252" width="48" height="6" rx="3" fill="#0C1A66" fillOpacity="0.3" />
      <rect x="32" y="270" width="88" height="18" rx="6" fill="#23CD8E" />
      <rect x="52" y="275" width="48" height="8" rx="2" fill="white" fillOpacity="0.8" />

      {/* Floating card bottom-right */}
      <rect x="360" y="200" width="130" height="90" rx="12" fill="white" filter="url(#shadow2)" />
      <rect x="374" y="216" width="60" height="7" rx="3" fill="#0C1A66" fillOpacity="0.6" />
      <rect x="374" y="230" width="102" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="374" y="243" width="88" height="6" rx="3" fill="#0C1A66" fillOpacity="0.2" />
      {/* Mini bar chart */}
      <rect x="374" y="260" width="10" height="18" rx="3" fill="#E9D7FE" />
      <rect x="390" y="253" width="10" height="25" rx="3" fill="#6941C6" />
      <rect x="406" y="258" width="10" height="20" rx="3" fill="#E9D7FE" />
      <rect x="422" y="248" width="10" height="30" rx="3" fill="#6941C6" />
      <rect x="438" y="255" width="10" height="23" rx="3" fill="#23CD8E" />

      {/* Connector dots */}
      <circle cx="164" cy="152" r="4" fill="#6941C6" fillOpacity="0.4" />
      <circle cx="20" cy="152" r="3" fill="#23CD8E" fillOpacity="0.5" />

      {/* Decorative dots grid */}
      <circle cx="470" cy="60" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="486" cy="60" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="502" cy="60" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="470" cy="76" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="486" cy="76" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="502" cy="76" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="470" cy="92" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="486" cy="92" r="3" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="502" cy="92" r="3" fill="#6941C6" fillOpacity="0.3" />

      {/* Bottom decorative line */}
      <rect x="60" y="300" width="340" height="2" rx="1" fill="#6941C6" fillOpacity="0.1" />

      <defs>
        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0C1A66" floodOpacity="0.12" />
        </filter>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0C1A66" floodOpacity="0.12" />
        </filter>
      </defs>
    </svg>
  );
}
