'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-18 w-32 lg:h-22 lg:w-36">
        <Image
          src="/assets/logo.png"
          alt="Unklass Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
