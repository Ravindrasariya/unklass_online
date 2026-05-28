'use client';

import { ReactNode } from 'react';
import { Dotted1, Dotted2 } from '../graphics/dottedLineSVG';
import { cn } from '@/lib/utils';

// Define gradient classes based on color
  const gradientClasses = {
    default: 'bg-primary-light',
    blue: 'bg-gradient-to-r from-[var(--joyful-soft-blue)] to-[var(--joyful-teal)]',
    green:
      'bg-gradient-to-r from-[var(--joyful-light-green)] to-[var(--accent-green)]',
    purple:
      'bg-gradient-to-r from-[var(--primary-light)] to-[var(--joyful-purple)]',
    amber:
      'bg-gradient-to-r from-[var(--joyful-yellow)] to-[var(--joyful-coral)]',
    rose: 'bg-gradient-to-r from-[var(--joyful-magenta)] to-[var(--joyful-coral)]',
    'custom-solid-green': 'bg-[#4A773C]',
    old_blue: 'bg-gradient-to-r from-blue-50 to-cyan-50',
    old_green: 'bg-gradient-to-r from-emerald-50 to-lime-50',
    old_purple: 'bg-gradient-to-r from-purple-100 to-indigo-100',
    old_amber: 'bg-gradient-to-r from-amber-100 to-yellow-100',
    old_rose: 'bg-gradient-to-r from-rose-100 to-pink-100',
    accent: 'bg-[var(--accent)]',
    vision: 'bg-[#7BA8D8]',
    transparent: 'bg-transparent'
  };

  // Define title text classes based on color
  const titleTextClasses = {
    default: 'text-primary',
    blue: 'text-primary',
    green: 'text-primary',
    purple: 'text-white',
    amber: 'text-primary',
    rose: 'text-primary',
    'custom-solid-green': 'text-white',
    old_blue: 'text-primary',
    old_green: 'text-primary',
    old_purple: 'text-black',
    old_amber: 'text-primary',
    old_rose: 'text-primary',
    vision: 'text-white',
    transparent: 'text-black'
  };


type ColorOption = keyof typeof gradientClasses;

type BrandedSectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  dottedLines?: boolean;
  color?: ColorOption;
  disableDottedTopLeft?: boolean;
  disableDottedBottomRight?: boolean;
};

export default function BrandedSection({
  title,
  children,
  className = '',
  dottedLines = true,
  disableDottedTopLeft = false,
  disableDottedBottomRight = false,
  color = 'default',
}: BrandedSectionProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-y-visible overflow-x-clip',
        className
      )}
    >
      {dottedLines && (
        <>
          {!disableDottedTopLeft && (
            <div className="z-10 absolute -top-16 -left-2 md:-top-8 md:-left-5">
              <Dotted1 className="w-[50%] scale-75 md:scale-100" />
            </div>
          )}
          {!disableDottedBottomRight && (
            <div className="z-10 absolute -bottom-14 -right-20 md:-bottom-4 md:right-0">
              <Dotted2 className="w-[100%] scale-75 md:scale-100" />
            </div>
          )}
        </>
      )}
      <section className={cn('w-full py-10', gradientClasses[color])}>
        <div className="container mx-auto">
          {title && (
            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold text-center mb-16',
                titleTextClasses[color as keyof typeof titleTextClasses]
              )}
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    </div>
  );
}
