'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HowItWorks1Icon from './icons/how-it-works-1';
import SpanAttention from './ui/span-attention';

const howItWorksSteps = [
  {
    id: 1,
    title: 'Book a Free Trial',
    description: 'Experience an interactive session with Unklass',
    icon: HowItWorks1Icon,
    alt: 'Calendar with checkmark',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/40',
    imagePrompt:
      'Digital illustration of a modern calendar with a checkmark, using flat design with soft shadows, on a light green background. Clean, professional educational style.',
  },
  {
    id: 2,
    title: 'Assessment & Custom Plan',
    description: 'Understand strengths & improvement areas',
    icon: '/assets/icons/how-it-works-2.svg',
    alt: 'Assessment document with chart',
    bgColor: 'bg-blue-100 dark:bg-blue-900/40', 
    imagePrompt:
      'Digital illustration of an assessment document with analytics charts and graphs, using flat design with soft shadows, on a light blue background. Clean, professional educational style.',
  },
  {
    id: 3,
    title: 'Live Interactive Classes',
    description: 'Engaging, concept-driven sessions',
    icon: '/assets/icons/how-it-works-3.svg',
    alt: 'Virtual classroom',
    bgColor: 'bg-purple-100 dark:bg-purple-900/40', 
    imagePrompt:
      'Digital illustration of a virtual classroom with students and teacher interacting through screens, using flat design with soft shadows, on a light purple background. Clean, professional educational style.',
  },
  {
    id: 4,
    title: 'Progress Tracking & Feedback',
    description: 'Regular updates for parents',
    icon: '/assets/icons/how-it-works-4.svg',
    alt: 'Progress chart with growth',
    bgColor: 'bg-amber-100 dark:bg-amber-900/40', 
    imagePrompt:
      'Digital illustration of an upward trending progress chart with achievements and milestones, using flat design with soft shadows, on a light amber background. Clean, professional educational style.',
  },
];

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative bg-white dark:bg-background py-16 md:py-24">
      <Image
        src="/assets/a/amoeba-neon.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute -bottom-[100px] md:left-0 left-[-80px] scale-75 md:scale-100 z-0 opacity-70 dark:opacity-50"
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl tracking-wide font-bold text-gray-900 dark:text-gray-100 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Proven Approach to Effective{' '}
          <SpanAttention className="font-bold font-heading">
            Learning
          </SpanAttention>
        </motion.h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="mb-4 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-lg shadow-md border border-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-primary-foreground">
                  {step.id}
                </div>

                <motion.div
                  className={`mb-6 rounded-xl p-5 ${step.bgColor} w-48 h-48 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{
                    scale: hoveredStep === step.id ? 1.05 : 1,
                    y: hoveredStep === step.id ? -5 : 0,
                  }}
                >
                  <div className="flex items-center justify-center">
                    {typeof step.icon === 'string' ? (
                      <Image
                        src={step.icon}
                        alt={step.alt}
                        width={150} 
                        height={150} 
                        className="object-contain"
                      />
                    ) : (
                      <step.icon className="w-[120px] h-[120px] md:w-[150px] md:h-[150px]" />
                    )}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}