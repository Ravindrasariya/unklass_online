'use client';

import { ReactNode } from 'react';
import { Dotted1, Dotted2 } from '../graphics/dottedLineSVG';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type ColorOption =
  | 'default'
  | 'blue'
  | 'green'
  | 'purple'
  | 'amber'
  | 'rose'
  | 'custom-solid-green'
  | 'old_blue'
  | 'old_green'
  | 'old_purple'
  | 'old_amber'
  | 'old_rose';

type BrandedContainerProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  dottedLines?: boolean;
  color?: ColorOption;
};

export default function BrandedContainer({
  title,
  children,
  className = '',
  dottedLines = false,
  color = 'default',
}: BrandedContainerProps) {
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
    old_purple: 'bg-indigo-500',
    old_amber: 'bg-gradient-to-r from-amber-100 to-yellow-100',
    old_rose: 'bg-gradient-to-r from-rose-100 to-pink-100',
  };

  // // Define border classes based on color
  // const borderClasses = {
  //   default: 'bg-primary-dark',
  //   blue: 'bg-[var(--joyful-teal)]',
  //   green: 'bg-[var(--accent-green)]',
  //   purple: 'bg-[var(--joyful-purple)]',
  //   amber: 'bg-[var(--joyful-coral)]',
  //   rose: 'bg-[var(--joyful-magenta)]',
  //   'custom-solid-green': 'bg-[#2563EB]',
  //   old_blue: 'bg-blue-50',
  //   old_green: 'bg-emerald-50',
  //   old_purple: 'bg-purple-200',
  //   old_amber: 'bg-amber-50',
  //   old_rose: 'bg-rose-50',
  // };

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
  };

  return (
    <div
      className={cn(
        'container mx-auto relative md:px-32 px-8 py-16 h-full overflow-y-hidden overflow-x-hidden',
        className
      )}
    >
      {dottedLines && (
        <>
          <div className="z-10 absolute md:-top-[80px] md:-left-[80px] md:scale-50 md:block hidden">
            <Dotted1 className="w-[100%]" />
          </div>
          <div className="z-10 absolute md:bottom-[30px] md:-right-[20px] md:scale-85 md:block hidden">
            <Dotted2 className="w-[100%]" />
          </div>
        </>
      )}
      <div className={cn('rounded-[2.5rem] p-4 md:p-6')}>
        {/* <div className={cn('rounded-[2.5rem] p-4 md:p-6', borderClasses[color])}> */}
        <section
          className={cn(
            'px-6 py-10 md:px-8 rounded-[2rem]',
            gradientClasses[color]
          )}
        >
          <div className="container mx-auto max-w-6xl">
            {title && (
              <motion.h2
                className={cn(
                  'text-3xl md:text-4xl font-heading font-bold text-center mb-16',
                  titleTextClasses[color]
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h2>
            )}
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
