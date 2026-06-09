export default function VisionIllustration() {
  return (
    <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="220" cy="220" r="180" fill="#E9D7FE" fillOpacity="0.4" />

      {/* Generic SaaS boxes — the "wrong" tools */}
      <g opacity="0.5">
        <rect x="60" y="80" width="100" height="70" rx="10" fill="#E9D7FE" stroke="#6941C6" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="72" y="94" width="40" height="6" rx="3" fill="#6941C6" fillOpacity="0.5" />
        <rect x="72" y="106" width="76" height="5" rx="2" fill="#6941C6" fillOpacity="0.3" />
        <rect x="72" y="118" width="60" height="5" rx="2" fill="#6941C6" fillOpacity="0.3" />
        <text x="90" y="142" fill="#6941C6" fillOpacity="0.6" fontSize="10" fontFamily="sans-serif">SaaS générique</text>
      </g>

      <g opacity="0.5">
        <rect x="280" y="80" width="100" height="70" rx="10" fill="#E9D7FE" stroke="#6941C6" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="292" y="94" width="40" height="6" rx="3" fill="#6941C6" fillOpacity="0.5" />
        <rect x="292" y="106" width="76" height="5" rx="2" fill="#6941C6" fillOpacity="0.3" />
        <rect x="292" y="118" width="60" height="5" rx="2" fill="#6941C6" fillOpacity="0.3" />
        <text x="300" y="142" fill="#6941C6" fillOpacity="0.6" fontSize="10" fontFamily="sans-serif">SaaS générique</text>
      </g>

      {/* Arrow down — broken */}
      <path d="M160 158 L170 178" stroke="#6941C6" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowGray)" />
      <path d="M330 158 L320 178" stroke="#6941C6" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 3" />

      {/* Custom tool — the hero */}
      <rect x="120" y="185" width="200" height="140" rx="16" fill="white" filter="url(#shadowVision)" />
      <rect x="120" y="185" width="200" height="38" rx="16" fill="#0C1A66" />
      <rect x="120" y="207" width="200" height="16" fill="#0C1A66" />
      <circle cx="142" cy="204" r="5" fill="white" fillOpacity="0.3" />
      <circle cx="158" cy="204" r="5" fill="white" fillOpacity="0.3" />
      <rect x="178" y="199" width="80" height="10" rx="5" fill="white" fillOpacity="0.15" />

      {/* App content */}
      <rect x="134" y="234" width="80" height="7" rx="3" fill="#0C1A66" fillOpacity="0.7" />
      <rect x="134" y="248" width="172" height="5" rx="2" fill="#0C1A66" fillOpacity="0.2" />
      <rect x="134" y="260" width="140" height="5" rx="2" fill="#0C1A66" fillOpacity="0.2" />

      {/* CTA button inside app */}
      <rect x="134" y="278" width="88" height="28" rx="8" fill="#23CD8E" />
      <rect x="150" y="287" width="56" height="10" rx="2" fill="white" fillOpacity="0.9" />

      {/* Check badge */}
      <circle cx="320" cy="185" r="22" fill="#23CD8E" filter="url(#shadowCheck)" />
      <path d="M309 185 L316 192 L331 177" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* "Sur-mesure" label */}
      <rect x="148" y="336" width="144" height="30" rx="15" fill="#0C1A66" />
      <text x="220" y="356" fill="white" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Outil sur-mesure ✦</text>

      {/* Connecting arrows */}
      <path d="M110 185 C100 170 110 160 160 158" stroke="#23CD8E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M330 185 C340 170 330 160 320 158" stroke="#23CD8E" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Decorative dots */}
      <circle cx="60" cy="320" r="5" fill="#23CD8E" fillOpacity="0.4" />
      <circle cx="76" cy="320" r="5" fill="#23CD8E" fillOpacity="0.4" />
      <circle cx="92" cy="320" r="5" fill="#23CD8E" fillOpacity="0.4" />
      <circle cx="380" cy="140" r="5" fill="#6941C6" fillOpacity="0.3" />
      <circle cx="396" cy="140" r="5" fill="#6941C6" fillOpacity="0.3" />

      <defs>
        <filter id="shadowVision" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#0C1A66" floodOpacity="0.15" />
        </filter>
        <filter id="shadowCheck" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#23CD8E" floodOpacity="0.4" />
        </filter>
      </defs>
    </svg>
  );
}
