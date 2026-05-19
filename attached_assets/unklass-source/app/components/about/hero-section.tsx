'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SpanAttention from '@/components/ui/span-attention';

export default function HeroSection() {
  return (
    <section className="relative px-8 pt-10 md:px-8">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="relative text-4xl md:text-6xl leading-snug font-heading font-bold text-foreground">
              Empowering Students Through
              <br />
              <SpanAttention className="font-bold font-heading">
                Personalized Learning
              </SpanAttention>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-normal">
              Learn about our mission, vision, and the dedicated team making a
              difference in online education
            </p>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/assets/hero/3.png"
                alt="About Unklass"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements with same positioning as other components */}
      <Image
        src="/assets/a/circle-l.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute top-0 -right-[22px] z-0"
      />
    </section>
  );
}
