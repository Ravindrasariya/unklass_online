'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import SpanAttention from '@/components/ui/span-attention';

export default function ContactForm() {
  useEffect(() => {
    // Manually initialize Tally when component mounts
    if (typeof window !== 'undefined') {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll('iframe[data-tally-src]:not([src])')
          .forEach((element) => {
            const iframe = element as HTMLIFrameElement;
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          });
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center"
    >
      <div className="tally-form-container w-full max-w-xl mx-auto flex justify-center">
        <iframe
          data-tally-src="https://tally.so/embed/w8E9kz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          frameBorder="0"
          title="Contact Unklass"
          style={{ minHeight: '500px' }}
        ></iframe>

        <Script
          id="tally-js"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
            `,
          }}
        />
      </div>
    </motion.div>
  );
}
