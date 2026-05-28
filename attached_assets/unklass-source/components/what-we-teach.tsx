"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandedSection from "@/components/ui/branded-section";
import SpanAttention from "@/components/ui/span-attention";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredSubjects = [
  {
    title: "Mathematics",
    icon: "/assets/icons/math.svg",
    color: "bg-emerald-100",
  },
  {
    title: "Science",
    icon: "/assets/icons/science.png",
    color: "bg-amber-100",
  },
  {
    title: "English",
    icon: "/assets/icons/english.svg",
    color: "bg-blue-100",
  },
  {
    title: "Coding",
    icon: "/assets/icons/code.svg",
    color: "bg-purple-100",
  },
];

export default function WhatWeTeach() {
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
      className="relative overflow-hidden"
    >
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-white mb-4">
          What We{' '}
          <SpanAttention className="font-bold font-heading">
            Teach
          </SpanAttention>
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Explore a glimpse of our core subjects, designed for comprehensive
          learning and skill development from foundational to advanced levels.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featuredSubjects.map((subject, index) => (
          <Link href="/courses" key={subject.title}>
            <motion.div
              className={cn(
                'flex flex-col items-center text-center rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8',
                subject.color
              )}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div
                className={cn(
                  'w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center bg-white',
                  'rounded-[var(--radius-blob-' + ((index % 5) + 1) + ')]'
                )}
              >
                <Image
                  src={subject.icon}
                  alt={`${subject.title} icon`}
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {subject.title}
              </h3>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 md:mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12 md:mb-4 mt-12 flex justify-center relative z-10">
          <Link href="/courses">
            <Button
              size="lg"
              variant="outline"
              className="font-bold bg-transparent text-white hover:bg-accent font-heading"
            >
              Discover More!
            </Button>
          </Link>
        </div>
      </motion.div>
    </BrandedSection>
  );
}
