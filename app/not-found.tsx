'use client';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-coffee-cream">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-coffee-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-coffee-text mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-coffee-text/70 mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak tersedia. Silakan kembali ke home atau hubungi kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <a href="/">Kembali ke Home</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/menu">Lihat Menu</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/kontak">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
