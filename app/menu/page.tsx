import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MenuCard } from '@/components/menu-card';
import { menuItems } from '@/lib/constants';
import type { MenuItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Menu | NAMA COFFEE',
  description: 'Daftar menu NAMA COFFEE — kopi, minuman, dan makanan favorit.',
  alternates: {
    canonical: '/menu',
  },
};

function MenuCategorySection({
  id,
  title,
  subtitle,
  items,
  variant = 'dark',
}: {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  variant?: 'dark' | 'charcoal';
}) {
  return (
    <section
      id={id}
      className={variant === 'charcoal' ? 'bg-[#1A1A1A]' : 'bg-[#0A0A0A]'}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl font-black leading-none text-[#F5F2ED] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <div className="mt-4 h-1.5 w-20 bg-[#6F4E37]" />
          <p className="mt-5 max-w-xl text-base text-[#F5F2ED]/60 sm:text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  const coffeeItems = menuItems.filter((item) => item.category === 'coffee');
  const nonCoffeeItems = menuItems.filter((item) => item.category === 'non-coffee');
  const snackItems = menuItems.filter((item) => item.category === 'snack');

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#6F4E37]/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-64 w-64 rounded-full bg-[#6F4E37]/10 blur-3xl lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F4E37]">
            NAMA COFFEE
          </p>
          <h1 className="mt-4 text-6xl font-black leading-[0.9] tracking-tighter text-[#F5F2ED] sm:text-7xl lg:text-8xl">
            MENU
          </h1>
          <div className="mt-5 h-1.5 w-20 bg-[#6F4E37]" />
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-[#F5F2ED]/75 sm:text-lg">
            Good Coffee, Good Mood, Good Place — jelajahi pilihan kopi, minuman, dan makanan
            favorit kami.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#coffee"
              className="rounded-full border border-[#F5F2ED]/30 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F5F2ED]/80 transition-colors hover:border-[#F5F2ED]/60 hover:text-[#F5F2ED]"
            >
              Kopi
            </a>
            <a
              href="#non-coffee"
              className="rounded-full border border-[#F5F2ED]/30 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F5F2ED]/80 transition-colors hover:border-[#F5F2ED]/60 hover:text-[#F5F2ED]"
            >
              Non-Kopi
            </a>
            <a
              href="#snacks"
              className="rounded-full border border-[#F5F2ED]/30 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F5F2ED]/80 transition-colors hover:border-[#F5F2ED]/60 hover:text-[#F5F2ED]"
            >
              Makanan
            </a>
          </div>
        </div>
      </section>

      <MenuCategorySection
        id="coffee"
        title="KOPI"
        subtitle="Koleksi kopi spesial dengan biji pilihan — dari susu klasik hingga varian signature."
        items={coffeeItems}
        variant="dark"
      />

      <MenuCategorySection
        id="non-coffee"
        title="NON-KOPI"
        subtitle="Minuman segar untuk yang ingin alternatif di luar kopi."
        items={nonCoffeeItems}
        variant="charcoal"
      />

      <MenuCategorySection
        id="snacks"
        title="MAKANAN"
        subtitle="Temani ngopi kamu dengan pilihan makanan ringan dan makanan utama."
        items={snackItems}
        variant="dark"
      />

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#1A1A1A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F4E37]">
            Pesan Sekarang
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#F5F2ED] sm:text-4xl lg:text-5xl">
            Tertarik Memesan?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#F5F2ED]/60">
            Pilih menu favoritmu dan pesan langsung via WhatsApp. Kami siap melayani dengan
            sepenuh hati.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/628112211459?text=Halo, saya ingin memesan dari menu NAMA COFFEE."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5F2ED] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F2ED]/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F2ED] transition-colors hover:bg-white/10"
            >
              Kembali ke Beranda
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
