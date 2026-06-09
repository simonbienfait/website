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
  primary: "bg-[#6749cf] text-white hover:bg-[#4a30a8]",
  secondary: "bg-[#f97316] text-white hover:bg-orange-600",
  outline: "border border-[#6749cf] text-[#6749cf] hover:bg-[#ede9ff]",
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
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
