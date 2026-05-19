import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type ProgramCardProps = {
  title: string;
  grades: string;
  iconSrc: string;
  href: string;
  isNew?: boolean;
};

export default function ProgramCard({
  title,
  grades,
  iconSrc,
  href,
  isNew = false,
}: ProgramCardProps) {
  return (
    <div
      className={cn(
        'relative bg-white dark:bg-slate-800 rounded-2xl p-5 pt-7 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1',
        isNew && 'border-2 border-pink-500'
      )}
    >
      {isNew && (
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          NEW
        </span>
      )}
      <div className="mb-4 flex justify-center items-center h-14 w-14 mx-auto bg-blue-100 dark:bg-blue-800 rounded-full">
        <Image src={iconSrc} alt={title + ' icon'} width={32} height={32} />
      </div>
      <h3 className="text-2xl font-heading font-semibold mb-1.5 text-center text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-400 mb-4 text-center">
        {grades}
      </p>
      <Link href={href} className="block text-center mt-4">
        <button className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer font-medium">
          Explore
        </button>
      </Link>
    </div>
  );
}
