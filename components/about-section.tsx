'use client';

import { PlaceImage } from '@/components/place-image';

export function AboutSection() {
  return (
    <section id="tentang" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F5F2ED] mb-4 leading-none">
            TENTANG KAMI
          </h2>
          <div className="w-20 h-1.5 bg-[#6F4E37]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl group lg:max-w-lg">
            <PlaceImage
              src="/images/tempat2.png"
              alt="NAMA COFFEE Barista"
              fill
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#6F4E37] uppercase tracking-[0.2em] font-semibold mb-4">Cerita Kami</p>
              <h3 className="text-4xl sm:text-5xl font-black text-[#F5F2ED] mb-6 leading-tight">
                Kopi Berkualitas untuk Momen Berharga
              </h3>
            </div>

            <div className="text-lg text-[#F5F2ED]/80 leading-relaxed space-y-4">
              <p>
                NAMA COFFEE hadir sebagai destinasi ngopi premium di jantung Cimahi. Kami percaya bahwa kopi bukan hanya minuman, tetapi pengalaman yang menciptakan momen berharga.
              </p>
              <p>
                Dengan biji kopi pilihan terbaik, barista profesional, dan suasana yang dirancang dengan cermat, kami menghadirkan specialty coffee experience yang tak terlupakan.
              </p>
              <p>
                Setiap cangkir adalah hasil dari passion dan dedikasi untuk menghadirkan yang terbaik bagi Anda.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="border-l-2 border-[#6F4E37] pl-4">
                <p className="text-3xl font-black text-[#F5F2ED]">4.9/5</p>
                <p className="text-sm text-[#F5F2ED]/60 mt-1">Rating</p>
              </div>
              <div className="border-l-2 border-[#6F4E37] pl-4">
                <p className="text-3xl font-black text-[#F5F2ED]">179+</p>
                <p className="text-sm text-[#F5F2ED]/60 mt-1">Reviews</p>
              </div>
              <div className="border-l-2 border-[#6F4E37] pl-4">
                <p className="text-3xl font-black text-[#F5F2ED]">100%</p>
                <p className="text-sm text-[#F5F2ED]/60 mt-1">Organic</p>
              </div>
              <div className="border-l-2 border-[#6F4E37] pl-4">
                <p className="text-3xl font-black text-[#F5F2ED]">24/7</p>
                <p className="text-sm text-[#F5F2ED]/60 mt-1">Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
