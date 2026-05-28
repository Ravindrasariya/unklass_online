'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import BrandedContainer from './ui/branded-container';
import NumberTicker, { NumberTickerRef } from './text/basic-number-ticker';

type MetricProps = {
  icon: string;
  value: number;
  label: string;
  delay?: number;
  suffix?: string;
};

const Metric = ({
  icon,
  value,
  label,
  delay = 0,
  suffix = '',
}: MetricProps) => {
  const metricRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<NumberTickerRef>(null);
  const inView = useInView(metricRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      tickerRef.current?.startAnimation();
    }
  }, [inView]);

  return (
    <motion.div
      ref={metricRef}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-4xl mb-3 text-white font-bold">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold mb-1 text-white font-heading">
        <NumberTicker
          ref={tickerRef}
          from={0}
          target={value}
          transition={{ duration: 2 }}
          autoStart={false}
          className="tabular-nums"
        />
        {suffix}
      </div>
      <p className="text-sm text-white font-semibold">{label}</p>
    </motion.div>
  );
};

export default function Metrics() {
  const metrics = [
    {
      icon: '📚',
      value: 10000,
      suffix: '+',
      label: 'Classes Conducted',
    },
    {
      icon: '👩‍🏫',
      value: 500,
      suffix: '+',
      label: 'Expert Tutors',
    },
    {
      icon: '🌍',
      value: 10,
      suffix: '+',
      label: 'Countries Served',
    },
    {
      icon: '📈',
      value: 85,
      suffix: '%',
      label: 'Average Score Improvement',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-grid-0">
      <BrandedContainer className="px-4 md:px-8" color="old_purple">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {metrics.map((metric, index) => (
            <Metric
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={index * 0.1}
              suffix={metric.suffix}
            />
          ))}
        </div>
      </BrandedContainer>
    </div>
  );
}
