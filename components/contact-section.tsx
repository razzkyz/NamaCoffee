'use client';

import { PlaceImage } from '@/components/place-image';
import { GoogleMapsEmbed } from '@/components/google-maps-embed';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/constants';

export function ContactSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <PlaceImage
          src="/images/tempat4.png"
          alt="NAMA COFFEE Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F5F2ED] mb-4 leading-none">
            HUBUNGI KAMI
          </h2>
          <div className="w-20 h-1.5 bg-[#6F4E37]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Info */}
          <div className="space-y-12">
            {/* Address */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#6F4E37]">
                    <MapPin className="h-6 w-6 text-[#F5F2ED]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F2ED] mb-2">Lokasi</h3>
                  <p className="text-[#F5F2ED]/80 leading-relaxed">
                    {businessInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#6F4E37]">
                    <Clock className="h-6 w-6 text-[#F5F2ED]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F2ED] mb-2">Jam Operasional</h3>
                  <p className="text-[#F5F2ED]/80 leading-relaxed">
                    {businessInfo.operatingHours.day}<br />
                    {businessInfo.operatingHours.open} - {businessInfo.operatingHours.close}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#6F4E37]">
                    <Phone className="h-6 w-6 text-[#F5F2ED]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F2ED] mb-2">Hubungi Kami</h3>
                  <p className="text-[#F5F2ED]/80 leading-relaxed">
                    {businessInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                asChild
                className="bg-[#6F4E37] hover:bg-[#8B6644] text-[#F5F2ED] font-bold py-6 px-8"
              >
                <a href={`https://wa.me/${businessInfo.phone.replace(/\D/g, '')}?text=Halo, saya ingin memesan.`} target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border border-[#6F4E37] text-[#F5F2ED] hover:bg-[#6F4E37]/10 font-bold py-6 px-8"
              >
                <a href={businessInfo.googleMaps} target="_blank" rel="noopener noreferrer">
                  Buka Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Google Maps */}
          <div className="h-[360px] overflow-hidden rounded-3xl border border-[#6F4E37]/30 shadow-2xl sm:h-[420px] lg:h-[500px]">
            <GoogleMapsEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
