import { BaseLayout } from '@/components/base-layout';
import HeroSection from '../components/about/hero-section';
import VisionMission from '../components/about/vision-mission';
import OurStory from '../components/about/our-story';
import TeachersApproach from '../components/about/teachers-approach';
import SelectionProcess from '../components/about/selection-process';
import ProblemsSection from '../components/about/problems-section';
import CTASection from '@/components/cta-section';


export const metadata = {
  title: 'About-Us',
  description: 'Learn more about our mission, vision, our unique approach to teaching, and how we select the best educators for your learning journey.',
  keywords: ['about us', 'mission', 'vision', 'education', 'online learning', 'tutors'],
};

export default function AboutUsPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen">
        <HeroSection />
        <VisionMission />
        <ProblemsSection />
        <TeachersApproach />
        <SelectionProcess />
        <CTASection />
      </div>
    </BaseLayout>
  );
}
