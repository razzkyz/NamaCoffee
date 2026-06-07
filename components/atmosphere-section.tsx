'use client';

import { PlaceImage } from '@/components/place-image';

export function AtmosphereSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F5F2ED] mb-4 leading-none">
            SUASANA CAFE
          </h2>
          <div className="w-20 h-1.5 bg-[#6F4E37]" />
        </div>

        {/* Main Image */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl group">
          <PlaceImage
            src="/images/tempat3.png"
            alt="NAMA COFFEE Suasana"
            fill
            sizes="(max-width: 1280px) 100vw, 896px"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Description */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <p className="text-[#6F4E37] uppercase tracking-[0.2em] font-semibold">Kualitas</p>
            <p className="text-lg text-[#F5F2ED]/80 leading-relaxed">
              Setiap detail dirancang untuk kenyamanan maksimal Anda
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[#6F4E37] uppercase tracking-[0.2em] font-semibold">Ambiance</p>
            <p className="text-lg text-[#F5F2ED]/80 leading-relaxed">
              Suasana premium dengan pencahayaan yang sempurna
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[#6F4E37] uppercase tracking-[0.2em] font-semibold">Experience</p>
            <p className="text-lg text-[#F5F2ED]/80 leading-relaxed">
              Pengalaman ngopi yang tak terlupakan bersama kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
