'use client';

import Image from 'next/image';
import type { GalleryItem } from '@/lib/types';

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/ig/ig1.jpg',
    alt: 'NAMA COFFEE Instagram Post',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/p/DNDZQBTxxDa/',
  },
  {
    id: 2,
    src: '/images/ig/ig2.jpg',
    alt: 'NAMA COFFEE Instagram Post',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/p/DQf7lyTEjKW/',
  },
  {
    id: 3,
    src: '/images/ig/ig3.jpg',
    alt: 'NAMA COFFEE Instagram Post',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/p/DUsBvy5Ehq8/',
  },
  {
    id: 4,
    src: '/images/ig/ig4.jpg',
    alt: 'NAMA COFFEE Instagram Reel',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/reel/DQHCIkOCZFK/',
  },
  {
    id: 5,
    src: '/images/ig/ig5.jpg',
    alt: 'NAMA COFFEE Instagram Post',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/p/DM-bLjyT7a8/',
  },
  {
    id: 6,
    src: '/images/ig/ig6.jpg',
    alt: 'NAMA COFFEE Instagram Reel',
    title: 'NAMA COFFEE',
    instagramUrl: 'https://www.instagram.com/reel/DJT2ScoTUv6/',
  },
];

export function GallerySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-24 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F5F2ED] mb-4 leading-none">
            FOLLOW US
          </h2>
          <div className="w-20 h-1.5 bg-[#6F4E37] mx-auto" />
        </div>

        {/* Instagram Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-xl aspect-square hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {/* Instagram Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  {/* Instagram Icon */}
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                  <span className="text-white text-sm font-semibold">Lihat di Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center">
          <p className="text-[#F5F2ED]/60 text-sm">
            Ikuti kami di Instagram{' '}
            <a
              href="https://www.instagram.com/nama.coffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6F4E37] hover:text-[#8B6348] transition-colors font-semibold"
            >
              @nama.coffee
            </a>{' '}
            untuk update terbaru
          </p>
        </div>
      </div>
    </section>
  );
}
