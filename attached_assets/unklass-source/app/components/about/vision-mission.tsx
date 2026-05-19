'use client';

import React from 'react';
import BrandedSection from '@/components/ui/branded-section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisionMission() {
  return (
    <BrandedSection
      color="old_rose"
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
            Our Vision & Mission
          </h2>
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto">
            The guiding principles that drive everything we do at Unklass
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We want to transform the way students learn by combining
              technology, creativity, and personalization to make high-quality
              education accessible to every student, anywhere in the world.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-md flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission at Unklass is to redefine learning by providing
              flexible, engaging, and personalized education for every student,
              regardless of background or location. We empower learners with
              expert guidance, interactive tools, and real-time insights.
            </p>
          </motion.div>
        </div>
      </div>

      <Image
        src="/assets/a/amoeba-neon.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute -bottom-[100px] left-0 scale-75 md:scale-100"
      />
    </BrandedSection>
  );
}