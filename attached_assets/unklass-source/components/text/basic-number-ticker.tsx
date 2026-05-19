'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface NumberTickerRef {
  startAnimation: () => void;
}

interface NumberTickerProps {
  from: number;
  target: number;
  transition?: {
    duration?: number;
    delay?: number;
  };
  className?: string;
  autoStart?: boolean;
}

const NumberTicker = forwardRef<NumberTickerRef, NumberTickerProps>(
  (
    {
      from = 0,
      target,
      transition = {
        duration: 2,
      },
      className = '',
      autoStart = true,
    },
    ref
  ) => {
    const [value, setValue] = useState(from);
    const [isAnimating, setIsAnimating] = useState(false);

    const duration = transition.duration || 2;
    const fps = 30;
    const totalFrames = duration * fps;
    const increment = (target - from) / totalFrames;

    const startAnimation = () => {
      setValue(from);
      setIsAnimating(true);
    };

    useImperativeHandle(ref, () => ({
      startAnimation,
    }));

    useEffect(() => {
      if (autoStart) {
        startAnimation();
      }
    }, [target, autoStart]);

    useEffect(() => {
      if (!isAnimating) return;

      let frame = 0;
      let currentValue = from;

      const interval = setInterval(() => {
        frame++;
        if (frame <= totalFrames) {
          currentValue += increment;
          setValue(currentValue);
        } else {
          setValue(target);
          setIsAnimating(false);
          clearInterval(interval);
        }
      }, 1000 / fps);

      return () => clearInterval(interval);
    }, [isAnimating, from, target, increment, totalFrames]);

    return (
      <span className={className}>
        {Math.round(value).toLocaleString('en-US')}
      </span>
    );
  }
);

NumberTicker.displayName = 'NumberTicker';

export default NumberTicker;

// Usage example:
// To start the animation from outside the component:
// 1. Create a ref:
//    const tickerRef = useRef<NumberTickerRef>(null);
// 2. Pass the ref to the NumberTicker component:
//    <NumberTicker ref={tickerRef} from={0} target={100} autoStart={false} />
// 3. Call the startAnimation function:
//    tickerRef.current?.startAnimation();
