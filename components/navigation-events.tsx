'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    // Add a small artificial delay visual feedback
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
