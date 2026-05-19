'use client';

import React from 'react';

interface StoryCardProps {
  title: string;
  description: string;
}

export default function StoryCard({ title, description }: StoryCardProps) {
  return (
    <div className="bg-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
