export default function CTAIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="480" height="300" rx="20" fill="#0C1A66" />

      {/* Grid lines */}
      {[60, 120, 180, 240, 300, 360, 420].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      ))}

      {/* Big stat */}
      <text x="52" y="100" fill="white" fontSize="64" fontFamily="sans-serif" fontWeight="800" opacity="0.95">150+</text>
      <text x="52" y="128" fill="white" fontSize="14" fontFamily="sans-serif" opacity="0.5">projets livrés</text>

      {/* Bar chart */}
      <rect x="52" y="158" width="24" height="60" rx="6" fill="#E9D7FE" fillOpacity="0.3" />
      <rect x="84" y="140" width="24" height="78" rx="6" fill="#6941C6" />
      <rect x="116" y="150" width="24" height="68" rx="6" fill="#E9D7FE" fillOpacity="0.3" />
      <rect x="148" y="130" width="24" height="88" rx="6" fill="#6941C6" />
      <rect x="180" y="145" width="24" height="73" rx="6" fill="#E9D7FE" fillOpacity="0.3" />
      <rect x="212" y="120" width="24" height="98" rx="6" fill="#23CD8E" />

      {/* Divider */}
      <line x1="268" y1="40" x2="268" y2="260" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

      {/* Right side — team / process */}
      <rect x="292" y="40" width="156" height="96" rx="12" fill="white" fillOpacity="0.06" />
      <rect x="308" y="56" width="60" height="8" rx="4" fill="white" fillOpacity="0.6" />
      <rect x="308" y="72" width="124" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="308" y="85" width="100" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="308" y="98" width="88" height="6" rx="3" fill="white" fillOpacity="0.25" />

      {/* Avatars */}
      <circle cx="318" cy="120" r="12" fill="#6941C6" />
      <circle cx="340" cy="120" r="12" fill="#23CD8E" />
      <circle cx="362" cy="120" r="12" fill="#E9D7FE" fillOpacity="0.5" />
      <text x="314" y="124" fill="white" fontSize="9" fontFamily="sans-serif">S</text>
      <text x="336" y="124" fill="white" fontSize="9" fontFamily="sans-serif">M</text>
      <text x="358" y="124" fill="white" fontSize="9" fontFamily="sans-serif">A</text>

      {/* Progress bars */}
      <rect x="292" y="154" width="156" height="52" rx="12" fill="white" fillOpacity="0.06" />
      <rect x="308" y="166" width="60" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="308" y="180" width="124" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="308" y="180" width="96" height="6" rx="3" fill="#23CD8E" fillOpacity="0.7" />

      {/* CTA button */}
      <rect x="292" y="220" width="156" height="40" rx="10" fill="#23CD8E" />
      <text x="370" y="244" fill="#0C1A66" fontSize="12" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">Démarrer un projet →</text>

      {/* Corner dots */}
      <circle cx="440" cy="36" r="4" fill="#23CD8E" fillOpacity="0.5" />
      <circle cx="456" cy="36" r="4" fill="#23CD8E" fillOpacity="0.3" />
      <circle cx="440" cy="52" r="4" fill="#23CD8E" fillOpacity="0.2" />
    </svg>
  );
}
