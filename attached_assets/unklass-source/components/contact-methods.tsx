'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MessageCircle } from 'lucide-react';
import SpanAttention from '@/components/ui/span-attention';
import Image from 'next/image';

export default function ContactMethods() {
  const contactMethods = [
    {
      type: 'Email',
      icon: Mail,
      value: 'support@unklass.com',
      href: 'mailto:support@unklass.com',
      action: null,
    },
    {
      type: 'WhatsApp',
      icon: MessageCircle,
      value: '+91 8904061785',
      href: 'https://wa.me/918904061785',
      action: null,
    },
    {
      type: 'Live Chat',
      icon: MessageSquare,
      value: 'Connect instantly with our team',
      href: null,
      action: () => {
        alert(
          'Live chat coming soon! Please use WhatsApp or Email for now. Sorry for the inconvenience!'
        );
      },
    },
  ];

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
    <section className="py-16 md:py-20 bg-accent relative">
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Talk to{' '}
            <SpanAttention className="font-bold font-heading">Us</SpanAttention>
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Have a specific query? You can also reach out to us via these
            channels
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block"
            >
              {method.href ? (
                <a
                  href={method.href}
                  className="bg-primary hover:bg-primary/80 transition-colors p-8 rounded-xl text-white cursor-pointer h-full shadow-md block"
                >
                  <div className="flex items-center mb-4">
                    <method.icon size={36} className="text-left" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.type}</h3>
                  <p className="text-green-100">{method.value}</p>
                </a>
              ) : (
                <div
                  className="bg-primary hover:bg-primary/80 transition-colors p-8 rounded-xl text-white cursor-pointer h-full shadow-md"
                  onClick={method.action || undefined}
                >
                  <div className="flex items-center mb-4">
                    <method.icon size={36} className="text-left" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.type}</h3>
                  <p className="text-green-100">{method.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative doodle */}
      <Image
        src="/assets/a/chevron-triangle-neon.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute bottom-0 -right-8 scale-75 md:scale-100"
      />
    </section>
  );
}
