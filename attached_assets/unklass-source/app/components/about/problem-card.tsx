'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProblemCardProps {
  title: string;
  description: string;
  solved?: boolean;
  index?: number;
}

export default function ProblemCard({
  title,
  description,
  solved = false,
  index = 0,
}: ProblemCardProps) {
  return (
    <motion.div
      className={`${
        solved ? 'bg-green-200' : 'bg-red-100'
      } rounded-2xl p-6 shadow-sm hover:shadow-md transition-all`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className="flex items-center mb-3">
        <motion.span
          className={`mr-2 text-xl ${
            solved ? 'text-green-600' : 'text-red-600'
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: index * 0.1 + 0.2,
            type: 'spring',
            stiffness: 200,
          }}
        >
          {solved ? '✓' : '❌'}
        </motion.span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
