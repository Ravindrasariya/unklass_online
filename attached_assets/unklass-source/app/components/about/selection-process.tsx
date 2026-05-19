'use client';

import React from 'react';
import BrandedSection from '@/components/ui/branded-section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SpanAttention from '@/components/ui/span-attention';
import Image from 'next/image';

export default function SelectionProcess() {
  const steps = [
    {
      title: 'Application',
      description:
        'Teachers submit comprehensive experience information, education background, and expertise with different boards.',
      icon: '📝',
    },
    {
      title: 'Screening',
      description:
        'Candidates complete thorough skill assessments to demonstrate expertise in their teaching areas.',
      icon: '🔍',
    },
    {
      title: 'Demo Class',
      description:
        'Applicants teach a demo session, showcasing their interactive teaching methods and adaptability to different student types.',
      icon: '👨‍🏫',
    },
    {
      title: 'Final Onboarding',
      description:
        'Based on student feedback and our evaluation, teachers receive final training on Unklass platform standards.',
      icon: '🎓',
    },
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <BrandedSection
      color="transparent"
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
          <h2 className="text-4xl md:text-5xl tracking-wide font-bold text-black mb-4">
            Our Teacher Selection{' '}
            <SpanAttention className="font-bold font-heading">
              Process
            </SpanAttention>
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            How we ensure your kids receive the best from Unklass
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-16 top-24 h-full w-1 bg-primary ml-0.5 z-0 hidden md:block"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              )}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-10 relative z-10">
                <motion.div
                  className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-primary text-white text-4xl shadow-lg transform transition-transform hover:scale-105"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.span
                      className="text-3xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.2,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      viewport={{ once: true }}
                    >
                      {step.icon}
                    </motion.span>
                    <span className="font-bold text-lg mt-1">{index + 1}</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1 bg-white rounded-xl p-8 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow"
                  whileHover={{ x: 5 }}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    {step.title}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />
                    </motion.div>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BrandedSection>
  );
}
