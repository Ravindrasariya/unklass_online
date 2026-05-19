'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SpanAttention from '@/components/ui/span-attention';
import { CheckCircle, Users, Clock, MapPin, DollarSign } from 'lucide-react';

export default function ProblemsSection() {
  const problems = [
    {
      title: 'Lack of Personal Attention',
      description: 'In traditional classrooms, teachers struggle to tailor learning to each student\'s pace and needs—leaving many either behind or unchallenged.',
      icon: Users,
      solved: false,
    },
    {
      title: 'Rigid Scheduling',
      description: 'Fixed tuition timings make it difficult for students to balance academics, hobbies, and family time. There\'s little room for flexibility.',
      icon: Clock,
      solved: false,
    },
    {
      title: 'Limited Access to Quality Tutors',
      description: 'Students in small towns or remote areas often don\'t have access to experienced, subject-expert teachers.',
      icon: MapPin,
      solved: false,
    },
    {
      title: 'High Cost of Coaching',
      description: 'Most coaching programs require bulk payments or fixed plans—even if a child needs help with just one subject or topic.',
      icon: DollarSign,
      solved: false,
    },
  ];

  const solutionFeatures = [
    'Flexible scheduling that works around your life',
    'Personalized study plans for each student',
    'Pay-as-you-go pricing - no bulk commitments',
    'Expert tutors from anywhere in the world',
    'Real-time progress updates for parents',
    'Interactive learning tools and gamification',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto max-w-7xl px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            The{' '}
            <SpanAttention className="font-bold font-heading mr-4">
              Unklass
            </SpanAttention>{' '}
            Solution
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            At Unklass, we believe that education should be accessible,
            personalized, and effective—yet today&rsquo;s systems fall short in
            key areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Problems Section - 40% */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution Section - 60% */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center min-h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary/30 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl backdrop-blur-sm relative overflow-hidden">
              {/* Background gradient overlay for extra pop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      Unklass is Here to Change That
                    </h3>
                  </div>
                </div>

                <p className="text-xl text-foreground/90 mb-10 leading-relaxed font-medium">
                  We offer a complete solution that addresses every pain point
                  in traditional education through innovation and technology.
                </p>

                <motion.div
                  className="space-y-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {solutionFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm"
                      variants={itemVariants}
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 leading-relaxed font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}