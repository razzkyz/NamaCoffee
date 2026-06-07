'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-coffee-cream">
      <div className="text-center">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-coffee-text mb-2">
          Oops! Terjadi Kesalahan
        </h1>
        <p className="text-coffee-text/70 mb-8 max-w-md">
          Maaf, terjadi kesalahan saat memuat halaman. Silakan coba lagi atau hubungi kami.
        </p>
        {error.message && (
          <p className="text-sm text-coffee-text/50 mb-8 font-mono">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Coba Lagi
          </Button>
          <Button asChild variant="outline">
            <a href="/">Kembali ke Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
