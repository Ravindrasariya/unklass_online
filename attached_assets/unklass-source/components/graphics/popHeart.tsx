import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PopHeart({
  className,
  size = 25,
  color = 'var(--primary)',
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  const controls = useAnimation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialRotate = (Math.random() - 0.5) * 20;
    // Initial pop-in animation
    controls.start({
      scale: 1,
      opacity: 1,
      rotate: initialRotate,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1.2, // Original delay for the first pop
        duration: 0.5,
      },
    });
  }, [controls]);

  const handleClick = async () => {
    const randomRotate = (Math.random() - 0.5) * 20;
    // 1. Slightly increase in size
    await controls.start({
      scale: 1.3,
      opacity: 0.9,
      rotate: randomRotate,
      transition: { duration: 0.15 },
    });

    // 2. Close (shrink and fade out)
    await controls.start({
      scale: 0,
      opacity: 0,
      rotate: randomRotate,
      transition: { duration: 0.25 },
    });

    // 3. Calculate new relative position
    const offsetX = (Math.random() - 0.5) * 30; // +/- 15px from current animated offset
    const offsetY = (Math.random() - 0.5) * 30; // +/- 15px from current animated offset
    setPosition({ x: offsetX, y: offsetY });

    // 4. Pop up again at the new relative position
    await controls.start({
      scale: 1,
      opacity: 1,
      rotate: randomRotate,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 15, // Slightly more springy
        duration: 0.4,
      },
    });
  };

  return (
    <motion.span
      className={cn(
        'inline-block transform translate-y-[-6px] md:translate-y-[-8px] cursor-pointer',
        className
      )}
      style={{ x: position.x, y: position.y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={controls}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill={color}
            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </motion.span>
  );
}
