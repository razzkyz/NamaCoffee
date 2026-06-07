import Image from 'next/image';
import type { MenuItem } from '@/lib/types';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#6F4E37]/20 bg-[#1A1A1A] shadow-xl transition-colors hover:border-[#6F4E37]/45">
      <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
      </div>

      <div className="border-t border-[#6F4E37]/15 px-4 py-4 text-center sm:px-5 sm:py-5">
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5F2ED] sm:text-sm">
          {item.name}
        </h3>
      </div>
    </article>
  );
}
