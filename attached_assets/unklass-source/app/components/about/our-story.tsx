'use client';

import React from 'react';
import StoryCard from './story-card';
import BrandedSection from '@/components/ui/branded-section';

export default function OurStory() {
  const storyCards = [
    {
      title: 'Journey of Starting',
      description:
        "Personalized attention tailored to each student's unique learning style, pace, and needs.",
    },
    {
      title: 'Journey of Starting',
      description:
        'Interactive approaches that make complex concepts simple with real-world experiences.',
    },
    {
      title: 'Journey of Starting',
      description:
        'Clear teaching methods that ensure consistent improvement in student performance.',
    },
    {
      title: 'Journey of Starting',
      description:
        "Personalized attention tailored to each student's unique learning style, pace, and needs.",
    },
    {
      title: 'Journey of Starting',
      description:
        'Interactive approaches that make complex concepts simple with real-world experiences.',
    },
    {
      title: 'Journey of Starting',
      description:
        'Clear teaching methods that ensure consistent improvement in student performance.',
    },
  ];

  return (
    <BrandedSection title="Our Story" color="default" dottedLines={true}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {storyCards.map((card, index) => (
          <StoryCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </BrandedSection>
  );
}
