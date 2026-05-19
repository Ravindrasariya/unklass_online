import { cn } from '@/lib/utils';
import React from 'react';

type SpanAttentionProps = {
  children: React.ReactNode;
  /** Stroke color for the attention SVG */
  color?: string;
  /** Additional class names for positioning adjustments */
  className?: string;
};

export default function SpanAttention({
  children,
  color = 'var(--accent)',
  className = '',
}: SpanAttentionProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <span className="absolute -top-3 -right-5">
        <svg
          width="30"
          height="30"
          viewBox="0 0 98 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-12"
        >
          <path
            d="M5.24512 54.3013C6.65451 38.6414 7.65855 22.8662 9.53826 7.25023C9.60337 6.7093 9.75171 6.04613 9.92854 5.51562"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M28.4039 72.1414C43.0007 64.0338 57.5401 55.8382 72.0066 47.5047"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M31 100C49.1159 102.184 67.231 104.56 85.4014 106.266C87.8274 106.494 89.9298 106.635 92.2748 106.635"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}
