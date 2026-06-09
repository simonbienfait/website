import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  primary: "bg-[#23CD8E] text-[#0C1A66] hover:bg-[#1db87d]",
  secondary: "bg-[#0C1A66] text-white hover:bg-[#162580]",
  outline: "border border-[#0C1A66] text-[#0C1A66] hover:bg-[#E9D7FE]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
