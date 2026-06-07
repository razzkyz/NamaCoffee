'use client';

import Link from 'next/link';
import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative -mt-16 min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A] bg-[length:auto_100%] bg-right-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >

      {/* Gradient kiri agar teks tetap terbaca */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-7xl font-black leading-[0.85] tracking-tighter text-[#F5F2ED] sm:text-8xl lg:text-[9rem]">
            COFFEE
          </h1>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2ED] sm:text-sm">
            Good Coffee, Good Mood, Good Place.
          </p>

          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[#F5F2ED]/75 sm:text-lg">
            NAMA COFFEE adalah tempat ngopi nyaman di Cimahi dengan kopi berkualitas, harga terjangkau, dan suasana cozy.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/628112211459?text=Halo, saya ingin memesan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5F2ED] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F2ED]/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F2ED] transition-colors hover:bg-white/10"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap items-stretch gap-0 divide-x divide-[#F5F2ED]/20">
            <div className="pr-6 sm:pr-8">
              <p className="text-2xl font-black text-[#F5F2ED] sm:text-3xl">
                4.9 <span className="text-lg">★</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#F5F2ED]/50">
                Rating Google
              </p>
            </div>
            <div className="px-6 sm:px-8">
              <p className="text-2xl font-black text-[#F5F2ED] sm:text-3xl">179+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#F5F2ED]/50">
                Ulasan
              </p>
            </div>
            <div className="pl-6 sm:pl-8">
              <p className="text-2xl font-black text-[#F5F2ED] sm:text-3xl">Affordable</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#F5F2ED]/50">
                Harga Terjangkau
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical text */}
      <div
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F5F2ED]/30 lg:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        Coffee · People · Good Times
      </div>

      {/* Scroll indicator */}
      <a
        href="#tentang"
        className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-[#F5F2ED]/50 transition-colors hover:text-[#F5F2ED] sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll ke bawah</span>
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-[#F5F2ED]/30">
          <ArrowDown className="h-4 w-4" />
        </div>
      </a>
    </section>
  );
}
