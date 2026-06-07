import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { GoogleMapsEmbed } from '@/components/google-maps-embed';
import { businessInfo } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontak | NAMA COFFEE',
  description: 'Hubungi NAMA COFFEE di Cimahi. Dapatkan informasi lokasi, jam operasional, dan cara memesan.',
  alternates: {
    canonical: '/kontak',
  },
};

const whatsappUrl =
  'https://wa.me/628112211459?text=Halo, saya ingin menghubungi NAMA COFFEE.';

function ContactChannelCard({
  href,
  icon,
  title,
  description,
  actionLabel,
  external = true,
  accentClass,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  external?: boolean;
  accentClass: string;
}) {
  const className =
    'group flex h-full flex-col items-center rounded-3xl border border-[#6F4E37]/20 bg-[#1A1A1A] p-8 text-center transition-colors hover:border-[#6F4E37]/50 sm:p-10';

  const inner = (
    <>
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${accentClass}`}
      >
        {icon}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F5F2ED]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#F5F2ED]/55">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F2ED] transition-colors group-hover:text-white">
        {actionLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#6F4E37]/20 bg-[#0A0A0A] p-6 sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6F4E37]/20 text-[#F5F2ED]">
        {icon}
      </div>
      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F4E37]">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-[#F5F2ED]/70">{children}</div>
    </div>
  );
}

export default function KontakPage() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#6F4E37]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F4E37]">
            NAMA COFFEE
          </p>
          <h1 className="mt-4 text-6xl font-black leading-[0.9] tracking-tighter text-[#F5F2ED] sm:text-7xl lg:text-8xl">
            KONTAK
          </h1>
          <div className="mx-auto mt-5 h-1.5 w-20 bg-[#6F4E37]" />
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-[#F5F2ED]/75 sm:text-lg">
            Hubungi kami kapan saja — pesan, tanya menu, atau cek lokasi cafe.
          </p>
        </div>
      </section>

      {/* Channel cards — WA, IG, Maps */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-3xl font-black text-[#F5F2ED] sm:text-4xl">Hubungi Kami</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#6F4E37]" />
            <p className="mx-auto mt-5 max-w-xl text-[#F5F2ED]/60">
              Pilih cara terhubung yang paling nyaman untuk kamu.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <ContactChannelCard
              href={whatsappUrl}
              icon={<MessageCircle className="h-7 w-7 text-green-400" />}
              title="WhatsApp"
              description="Pesan menu, tanya stok, atau reservasi — respon cepat dari tim kami."
              actionLabel="Chat Sekarang"
              accentClass="bg-green-500/15 ring-1 ring-green-500/30"
            />
            <ContactChannelCard
              href={businessInfo.instagram}
              icon={<Instagram className="h-7 w-7 text-pink-300" />}
              title="Instagram"
              description="Follow @nama.coffee untuk update menu, promo, dan suasana cafe."
              actionLabel="Follow Instagram"
              accentClass="bg-pink-500/10 ring-1 ring-pink-500/25"
            />
            <ContactChannelCard
              href={businessInfo.googleMaps}
              icon={<MapPin className="h-7 w-7 text-[#F5F2ED]" />}
              title="Google Maps"
              description="Lihat lokasi NAMA COFFEE di Padasuka, Cimahi dan petunjuk arah."
              actionLabel="Buka Maps"
              accentClass="bg-[#6F4E37]/30 ring-1 ring-[#6F4E37]/50"
            />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="border-y border-white/5 bg-[#1A1A1A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-[#F5F2ED] sm:text-4xl">Informasi Cafe</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#6F4E37]" />
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Alamat">
              {businessInfo.address}
            </InfoCard>
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Jam Operasional">
              <p>{businessInfo.operatingHours.day}</p>
              <p className="mt-1 font-semibold text-[#F5F2ED]">
                {businessInfo.operatingHours.open} – {businessInfo.operatingHours.close}
              </p>
            </InfoCard>
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Telepon">
              <a
                href={`tel:${businessInfo.phone}`}
                className="font-semibold text-[#F5F2ED] transition-colors hover:text-white"
              >
                {businessInfo.phone}
              </a>
              <p className="mt-2 text-[#F5F2ED]/50">Dine In · Take Away · Delivery</p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-3xl font-black text-[#F5F2ED] sm:text-4xl">Lokasi Kami</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#6F4E37]" />
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#6F4E37]/25 shadow-2xl">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px]">
              <GoogleMapsEmbed />
            </div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-[#6F4E37]/20 bg-[#1A1A1A] px-6 py-5 sm:flex-row">
              <p className="text-center text-sm text-[#F5F2ED]/60 sm:text-left">
                Jl. Cisangkan Hilir No.11, Padasuka, Cimahi Tengah
              </p>
              <a
                href={businessInfo.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5F2ED] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-white"
              >
                <MapPin className="h-4 w-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#1A1A1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F4E37]">
            Lihat Menu
          </p>
          <h2 className="mt-3 text-2xl font-black text-[#F5F2ED] sm:text-3xl">
            Mau pesan langsung?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5F2ED] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-[#F5F2ED]/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F2ED] transition-colors hover:bg-white/10"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
