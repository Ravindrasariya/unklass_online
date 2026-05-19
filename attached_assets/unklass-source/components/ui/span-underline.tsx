import { cn } from '@/lib/utils';
import React from 'react';

type SpanUnderlineProps = {
  children: React.ReactNode;
  /** Stroke color for the underline SVG */
  color?: string;
  /** Additional class names for positioning adjustments */
  className?: string;
};

export default function SpanUnderline({
  children,
  color = '#FFD550',
  className = '',
}: SpanUnderlineProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <span className="absolute left-0 right-0 -bottom-5 md:-bottom-3">
        <svg
          width="381"
          height="42"
          viewBox="0 0 381 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M5.59521 5.14404C88.8231 8.34512 172.053 11.9221 255.33 13.6147C282.555 14.168 310.038 14.8377 337.247 12.9171C348.619 12.1144 364.996 11.9977 375.115 6.93783"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M21 30.2829C65.5917 27.1352 111.335 30.6409 155.933 31.6781C206.451 32.8529 256.978 34.9804 307.508 35.5646C314.098 35.6408 354.065 40.4114 358.232 32.0767"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}
