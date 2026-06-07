'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { getIsActive, navItems } from '@/components/navbar-nav-links';

export function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#F5F2ED] hover:bg-white/10 hover:text-[#F5F2ED]"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full border-white/10 bg-[#0A0A0A] text-[#F5F2ED]">
          <div className="flex flex-col gap-6 pt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={cn(
                  'text-lg font-semibold uppercase tracking-widest text-[#F5F2ED]/80 hover:text-[#F5F2ED]',
                  getIsActive(pathname, item.href) && 'text-[#F5F2ED] underline underline-offset-8'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 w-full bg-[#F5F2ED] text-[#0A0A0A] hover:bg-white"
              onClick={() => setIsOpen(false)}
            >
              <a
                href="https://wa.me/628112211459?text=Halo, saya ingin memesan."
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
