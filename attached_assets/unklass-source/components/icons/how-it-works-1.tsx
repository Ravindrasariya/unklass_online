import React from 'react';

interface HowItWorks1IconProps {
  className?: string;
}

export default function HowItWorks1Icon({ className }: HowItWorks1IconProps) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Calendar base */}
      <rect
        x="20"
        y="24"
        width="80"
        height="80"
        rx="8"
        fill="var(--color-card)"
        stroke="var(--color-primary)"
        strokeWidth="4"
      />

      {/* Calendar header */}
      <rect
        x="20"
        y="24"
        width="80"
        height="20"
        rx="8"
        fill="var(--color-primary)"
      />

      {/* Calendar grid lines */}
      <line
        x1="20"
        y1="64"
        x2="100"
        y2="64"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="84"
        x2="100"
        y2="84"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="44"
        x2="40"
        y2="104"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <line
        x1="60"
        y1="44"
        x2="60"
        y2="104"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="44"
        x2="80"
        y2="104"
        stroke="var(--color-border)"
        strokeWidth="2"
      />

      {/* Calendar tabs */}
      <rect
        x="72"
        y="72"
        width="16"
        height="16"
        rx="2"
        fill="var(--accent-green)"
      />

      {/* Checkmark */}
      <path
        d="M74 80L78 84L86 76"
        stroke="var(--color-primary-foreground)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
