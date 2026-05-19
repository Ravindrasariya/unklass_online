import { Metadata } from 'next';
import { BaseLayout } from '@/components/base-layout';
import CTASection from '@/components/cta-section';
import CoursesClientContent from './CoursesClientContent';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Discover engaging courses for every student. Comprehensive support for students at all educational levels across various boards and curricula including Mathematics, Science, English, Languages, Coding, and Social Science.',
  keywords: ['courses', 'online learning', 'mathematics', 'science', 'coding', 'CBSE', 'ICSE', 'IB', 'IGCSE'],
};

const subjectsData = [
  {
    title: 'Mathematics',
    description: [
      'Build strong foundations through concept clarity',
      'Learn with real-life examples and visual methods',
      'Master problem-solving and critical thinking skills',
    ],
    icon: '/assets/icons/math.svg',
    color: 'bg-emerald-100',
    accent: 'border-emerald-500',
  },
  {
    title: 'Science',
    description: [
      'Explore core concepts through experiments and simulations',
      'Develop curiosity with inquiry-based learning',
      'Connect classroom science to the real world',
    ],
    icon: '/assets/icons/science.png',
    color: 'bg-amber-100',
    accent: 'border-amber-500',
  },
  {
    title: 'English',
    description: [
      'Strengthen grammar, vocabulary, and comprehension',
      'Improve reading and writing skills for all levels',
      'Develop confident communication and expression',
    ],
    icon: '/assets/icons/english.svg',
    color: 'bg-blue-100',
    accent: 'border-blue-500',
  },
  {
    title: 'Languages',
    description: [
      'Learn spoken and written skills in Hindi, French, Spanish, German & more',
      'Focus on pronunciation, grammar, and usage',
      'Practice with interactive speaking and listening exercises',
    ],
    icon: '/assets/icons/lang.png',
    color: 'bg-rose-100',
    accent: 'border-rose-500',
  },
  {
    title: 'Coding',
    description: [
      'Learn block-based and text-based programming (Scratch, Python, etc.)',
      'Build apps, games, and interactive projects',
      'Develop logical thinking and computational skills',
    ],
    icon: '/assets/icons/code.svg',
    color: 'bg-purple-100',
    accent: 'border-purple-500',
  },
  {
    title: 'Social Science',
    description: [
      'Understand history, geography, civics, and economics clearly',
      'Encourage critical thinking about society and the world',
      'Learn through stories, timelines, and visual maps',
    ],
    icon: '/assets/icons/wcu-personalized.svg',
    color: 'bg-orange-100',
    accent: 'border-orange-500',
  },
];

const boardsData = [
  { name: 'CBSE & ICSE', description: 'Indian school curriculums' },
  { name: 'IB & IGCSE', description: 'International conceptual depth' },
  { name: 'US, UK, Canada', description: 'Customized regional curriculum tutoring' },
  { name: 'Singapore, Australia', description: 'Specialized regional curriculum support' },
];

const gradesData = [
  'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
];

export default function CoursesPage() {
  return (
    <BaseLayout>
      <CoursesClientContent
        subjects={subjectsData}
        boards={boardsData}
        grades={gradesData}
      />
      <CTASection
        label="Can't find what you're looking for?"
        description="Our expert team will create a personalized learning path for your specific needs"
        buttonLabel="Request a Customized Course"
      />
    </BaseLayout>
  );
}