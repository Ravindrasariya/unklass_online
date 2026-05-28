'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BrandedContainer from './ui/branded-container';
import PopHeart from './graphics/popHeart';
import { useEffect, useRef, useState, useCallback } from 'react';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'; 
import Autoplay from 'embla-carousel-autoplay';

type TestimonialCardProps = {
  name: string;
  role: 'Student' | 'Parent';
  grade?: string;
  board?: string;
  quote: string;
  avatar: string;
  delay?: number; 
};

const TestimonialCard = ({
  name,
  role,
  grade,
  board,
  quote,
  delay = 0,
  avatar,
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl p-8 shadow-sm h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-gray-900">{name}</div>
          {(grade || board) && (
            <p className="text-sm text-gray-600">
              {grade && `${grade}`}
              {board}
            </p>
          )}
        </div>
      </div>
      <div className="mt-2">
        <span className="text-6xl text-gray-300 font-serif leading-none">
          “
        </span>
      </div>
      <p className="text-gray-800 text-base flex-grow relative -top-6">
        {quote}
      </p>
      <p className="text-sm w-fit -ml-2 px-2 text-gray-600 mt-1 border rounded-full border-gray-200 text-center p-1">
        {role}
      </p>
    </motion.div>
  );
};

const CARD_WIDTH_REM = 15; 

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Parent' as const,
      board: 'New Jersey, USA',
      quote:
        'We were looking for an online tutor for my son to stay connected with Indian curriculum while studying abroad. Unklass has been the perfect solution – well-structured, disciplined, and engaging.',
      avatar: '/assets/images/testimonial-parent-1.png',
    },
    {
      name: 'Meera Pillai',
      role: 'Parent' as const,
      board: 'Melbourne, Australia',
      quote:
        "Unklass has made a big difference in my daughter's studies. The classes are punctual and focused. The teachers really care and are consistent – just what we needed.",
      avatar: '/assets/images/testimonial-parent-1.png',
    },
    {
      name: 'Sameer Arora',
      role: 'Parent' as const,
      board: 'Doha, Qatar',
      quote:
        'My kids were missing a strong foundation in Hindi and Math. Unklass tutors brought that back. Their personal approach and cultural connection make a big difference.',
      avatar: '/assets/images/testimonial-parent-1.png',
    },
    {
      name: 'Anjali Patel',
      role: 'Parent' as const,
      board: 'Class 6 Student',
      quote:
        'We were looking for a reliable tutor for our son who could focus on basics and help with homework. Unklass exceeded our expectations. The progress is clearly visible.',
      avatar: '/assets/images/testimonial-parent-1.png',
    },
    {
      name: 'Rakesh Jain',
      role: 'Parent' as const,
      board: 'Father of Class 10 Student',
      quote:
        'The structured learning, timely tests, and regular feedback from Unklass teachers helped my daughter stay ahead. The online classes feel like real classrooms!',
      avatar: '/assets/images/testimonial-parent-1.png',
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [currentSnap, setCurrentSnap] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setScrollSnaps(api.scrollSnapList());
    setCurrentSnap(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentSnap(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);
    api.on('reInit', () => { 
        setScrollSnaps(api.scrollSnapList());
        setCurrentSnap(api.selectedScrollSnap());
    });


    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  const handleDotClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );


  return (
    <div className="bg-grid-0">
      <div className="relative z-10">
        <BrandedContainer color="old_rose" className="px-2 md:px-16 relative">
          <div className="flex items-center justify-center gap-2 mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              From Our Community
            </h2>
            <PopHeart size={32} />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full" 
            >
              <CarouselContent className="-ml-4 items-stretch"> 
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-[15rem] flex-shrink-0"
                  >
                    <div className="h-full"> 
                      <TestimonialCard {...testimonial} delay={index * 0.1} /> 
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20 disabled:opacity-50 text-gray-700 hover:text-gray-900 transition-colors p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-md" />
              <CarouselNext className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 disabled:opacity-50 text-gray-700 hover:text-gray-900 transition-colors p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-md" />

            </Carousel>

            <div className="flex justify-center mt-8 gap-3">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSnap === index
                      ? 'bg-gray-800'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </BrandedContainer>
      </div>
    </div>
  );
}