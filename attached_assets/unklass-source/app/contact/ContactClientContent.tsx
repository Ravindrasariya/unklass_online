"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script"; 
import ContactForm from "@/components/contact-form";
import ContactMethods from "@/components/contact-methods";
import SpanAttention from "@/components/ui/span-attention";

export default function ContactClientContent() {
  return (
    <>
      {' '}
      <div className="min-h-screen">
        <section className="relative px-8 py-20 md:py-20">
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl leading-snug font-heading font-bold text-foreground mb-4">
                Have Questions? Let&rsquo;s{' '}
                <SpanAttention className="font-bold font-heading">
                  Talk!
                </SpanAttention>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                We are here to help! Fill out the form to book your free trial
                or ask a question
              </p>
            </motion.div>

            <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-4 place-items-center w-full justify-self-stretch">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              >
                <div className="flex justify-center">
                  <Image
                    src="/cta.jpeg"
                    alt="Students enjoying interactive learning"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </motion.div>

              <div className="w-full md:w-1/2 flex justify-center">
                <ContactForm />
              </div>
            </div>
          </div>

          <Image
            src="/assets/a/circle-l.webp"
            alt="decorative doodle"
            width={200}
            height={200}
            className="absolute top-0 -right-[22px] z-0"
          />
        </section>

        <ContactMethods />
      </div>
      <Script
        id="tally-js-page-level"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as any).Tally !== 'undefined') {
            (window as any).Tally.loadEmbeds();
          }
        }}
      />
    </>
  );
}
