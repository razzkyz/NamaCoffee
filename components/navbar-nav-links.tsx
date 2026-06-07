'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/cn';

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/menu', label: 'Menu' },
  { href: '/#tentang', label: 'Tentang' },
  { href: '/kontak', label: 'Kontak' },
] as const;

function getIsActive(pathname: string, href: string) {
  if (href === '/#tentang') return pathname === '/';
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const NavbarNavLinks = memo(function NavbarNavLinks() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Find active index
  const activeIndex = navItems.findIndex((item) => getIsActive(pathname, item.href));

  useEffect(() => {
    const updateLinePosition = () => {
      const index = hoveredIndex !== null ? hoveredIndex : activeIndex;
      if (index === -1 || !linksRef.current[index] || !containerRef.current) {
        setLineStyle(null);
        return;
      }

      const link = linksRef.current[index];
      const container = containerRef.current;
      if (!link) return;

      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setLineStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    };

    updateLinePosition();
  }, [hoveredIndex, activeIndex, pathname]);

  return (
    <div ref={containerRef} className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch
          ref={(el) => {
            linksRef.current[index] = el;
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 relative',
            getIsActive(pathname, item.href) ? 'text-[#F5F2ED]' : 'text-[#F5F2ED]/80 hover:text-[#F5F2ED]'
          )}
        >
          {item.label}
        </Link>
      ))}
      
      {/* Animated underline */}
      {lineStyle && (
        <span
          className="absolute bottom-0 h-[1px] bg-[#F5F2ED] transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${lineStyle.left}px`,
            width: `${lineStyle.width}px`,
            transform: 'translateY(8px)',
          }}
        />
      )}
    </div>
  );
});

export { navItems, getIsActive };
