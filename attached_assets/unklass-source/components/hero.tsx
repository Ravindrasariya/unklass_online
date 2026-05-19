'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BookFreeTrial from './book-free-trial';
import PopHeart from './graphics/popHeart';
import { useState, useEffect } from 'react';

// Hero section content in a JSON object for easy management
const heroContent = {
  headline: 'Personalized Online Learning for Every Student',
  subheadline:
    'Live 1-on-1 and group classes in Math, Science, English, Coding & Languages. Expert tutors, flexible schedules, and customized learning paths.',
};

export default function Hero() {
  const images = [
    '/assets/hero/1.png',
    '/assets/hero/2.png',
    '/assets/hero/3.png',
    '/assets/hero/4.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 8000); // change image every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-8 pt-10 md:px-8">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* content */}
            <h1 className="relative text-4xl md:text-6xl leading-snug font-heading font-semibold text-foreground">
              <PopHeart
                className="absolute -top-2 md:-left-8 left-0"
                color="var(--accent)"
              />
              Personalized Online Learning for Every Student
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-normal">
              {heroContent.subheadline}
            </p>
            <div className="mt-4">
              <BookFreeTrial className="w-full md:w-auto" />
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Hero ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dotted Line SVG - Matched to reference image */}
      {/* <div
        className="absolute -bottom-15 md:-bottom-10 z-10 -left-10 md:-left-96 right-0 w-full md:w-auto sm:w-full"
        style={{ height: '150px' }}
      >
        <DottedLineWithRocket />
      </div> */}
    </section>
  );
}
