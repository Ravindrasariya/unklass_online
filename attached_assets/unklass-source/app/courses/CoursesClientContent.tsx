'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BrandedSection from '@/components/ui/branded-section';
import SpanAttention from '@/components/ui/span-attention';
import { cn } from '@/lib/utils';

interface Subject {
  title: string;
  description: string[];
  icon: string;
  color: string;
  accent: string;
}

interface Board {
  name: string;
  description: string;
}

type Grade = string;

interface CoursesClientContentProps {
  subjects: Subject[];
  boards: Board[];
  grades: Grade[];
}

export default function CoursesClientContent({
  subjects,
  boards,
  grades,
}: CoursesClientContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
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
                Discover Engaging Courses for
                <br />
                <SpanAttention className="font-bold font-heading">
                  Every Student
                </SpanAttention>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-normal">
                Comprehensive support for students at all educational levels
                across various boards and curricula
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
                  src="/assets/hero/2.png"
                  alt="Students learning"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        <Image
          src="/assets/a/circle-l.webp"
          alt="decorative doodle"
          width={200}
          height={200}
          className="absolute top-0 -right-[22px] z-0"
        />
      </section>

      <BrandedSection
        color="purple"
        dottedLines={false}
        className="relative py-16"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl tracking-wide font-bold text-white mb-4">
              Subjects &{' '}
              <SpanAttention className="font-bold font-heading">
                Specializations
              </SpanAttention>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              These courses are available for all the boards and grades listed
              below
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-center ${subject.color} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div
                  className={cn(
                    'w-24 h-24 mb-4 flex items-center justify-center bg-white',
                    'rounded-[var(--radius-blob-' + ((index % 5) + 1) + ')]'
                  )}
                >
                  <Image
                    src={subject.icon}
                    alt={subject.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {subject.title}
                </h3>
                <ul className="text-gray-700 mb-4 list-disc pl-4 text-left">
                  {subject.description.map((desc, i) => (
                    <li key={i} className="mb-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Image
          src="/assets/a/amoeba-neon.webp"
          alt="decorative doodle"
          width={200}
          height={200}
          className="absolute -bottom-[100px] left-0 scale-75 md:scale-100"
        />
      </BrandedSection>

      <section className="container mx-auto max-w-7xl px-8 pb-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Boards We{' '}
            <SpanAttention className="font-bold font-heading">
              Cover
            </SpanAttention>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We support students studying under various educational boards
            worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {boards.map((board, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4 text-green-600">
                  ✅
                </div>
                <h3 className="text-xl font-bold">{board.name}</h3>
              </div>
              <p className="text-gray-600">{board.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="pb-16 relative">
        <div className="container mx-auto max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Available{' '}
              <SpanAttention className="font-bold font-heading">
                For
              </SpanAttention>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              We provide comprehensive support for students at all educational
              levels
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {grades.map((grade, index) => (
              <motion.div
                key={index}
                className="bg-white border border-green-200 px-6 py-3 rounded-full text-green-700 font-medium hover:bg-green-50 hover:border-green-300 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {grade}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}