import Link from 'next/link';
import { MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BreathingText from './text/breathing-text';

type BookFreeTrialProps = {
  className?: string;
  withIcon?: boolean;
  size?: 'sm' | 'lg';
  animate?: boolean;
  label?: string;
};

export default function BookFreeTrial({
  className,
  withIcon = true,
  size = 'lg',
  animate = false,
  label = 'Book a Free Trial',
}: BookFreeTrialProps) {
  return (
    <Link href="/contact" className="flex items-center gap-2">
      <Button size={size} className={cn(className)}>
        {animate ? (
          <BreathingText
            staggerDuration={0.1}
            fromFontVariationSettings="'wght' 100, 'slnt' 10"
            toFontVariationSettings="'wght' 800, 'slnt' -20"
            label={label}
          />
        ) : (
          label
        )}
        {withIcon && (
          <MousePointerClick className={size === 'sm' ? 'size-4' : 'size-6'} />
        )}
      </Button>
    </Link>
  );
}
