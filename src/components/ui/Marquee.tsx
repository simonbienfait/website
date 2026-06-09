import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({ children, speed = 30, className = "", reverse = false }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <style>{`
        @keyframes marquee-fwd { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-rev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .marquee-track { display: flex; width: max-content; }
        .marquee-fwd { animation: marquee-fwd ${speed}s linear infinite; }
        .marquee-rev { animation: marquee-rev ${speed}s linear infinite; }
      `}</style>
      <div className={`marquee-track ${reverse ? "marquee-rev" : "marquee-fwd"}`}>
        {children}
        {children}
      </div>
    </div>
  );
}
