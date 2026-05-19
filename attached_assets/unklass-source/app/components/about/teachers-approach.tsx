'use client';

import React from 'react';
import ApproachCard from './approach-card';
import BrandedSection from '@/components/ui/branded-section';
import { motion } from 'framer-motion';
import SpanAttention from '@/components/ui/span-attention';
import Image from 'next/image';

export default function TeachersApproach() {
  const approaches = [
    {
      title: 'Personalized Learning Plans',
      description:
        'Each student receives a customized curriculum based on their specific needs, learning style, and goals.',
    },
    {
      title: 'Interactive Learning',
      description:
        'Creative strategies are embedded throughout lessons, using games and activities to make learning exciting.',
    },
    {
      title: 'Assessments & Progress Reports',
      description:
        'Regular check-ins to track progress - clear reports help parents see how their child is improving.',
    },
  ];

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
    <BrandedSection
      color="purple"
      dottedLines={false}
      className="relative py-16"
    >
      <div className="container mx-auto max-w-7xl relative z-10 px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl tracking-wide font-bold text-white mb-4">
            Our Teachers&apos;{' '}
            <SpanAttention className="font-bold font-heading">
              Approach
            </SpanAttention>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            How our educators create engaging and effective learning experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <ApproachCard
                title={approach.title}
                description={approach.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Image
        src="/assets/a/amoeba-neon.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute -bottom-[100px] right-0 scale-75 md:scale-100"
      />
    </BrandedSection>
  );
}
