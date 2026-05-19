'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Array of features with icons and descriptions
const featuresData = [
  {
    id: 1,
    title: 'Expert & Verified Tutors',
    description:
      'Our teachers undergo rigorous selection, training, and performance evaluation to ensure high-quality learning.',
    icon: '/assets/icons/feature-person-stars.svg',
    alt: 'Person with stars icon',
    iconColor: 'var(--primary-dark)', // Blue
  },
  {
    id: 2,
    title: 'Engaging & Gamified Learning',
    description:
      'Interactive quizzes, real-world problem-solving, and AI-powered insights make learning fun and effective.',
    icon: '/assets/icons/feature-game-controller.svg',
    alt: 'Game controller icon',
    iconColor: 'var(--secondary)', // Orange
  },
  {
    id: 3,
    title: 'Performance Tracking & Insights',
    description:
      'Parents receive regular progress reports, test analysis, and feedback to track improvement.',
    icon: '/assets/icons/feature-light-bulb-gear.svg',
    alt: 'Light bulb with gear icon',
    iconColor: 'var(--accent-green)', // Green
  },
  {
    id: 4,
    title: '24/7 Support & Guidance',
    description:
      'Dedicated parent-teacher connect, WhatsApp support, and student mentorship.',
    icon: '/assets/icons/feature-heart-hands.svg',
    alt: 'Heart hands icon',
    iconColor: 'var(--accent)', // Teal/Cyan
  },
];

export default function Features() {
  return (
    <section className="px-8">
      <div className="container mx-auto max-w-7xl">
        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Unklass?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expert teaching with technology to create an effective
            learning experience
          </p>
        </motion.div> */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="mb-6 relative w-[90px] h-[90px] flex items-center justify-center"
                style={{ color: feature.iconColor }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={65}
                  height={65}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground dark:text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/80 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
