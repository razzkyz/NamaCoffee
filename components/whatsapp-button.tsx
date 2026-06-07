'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/628112211459?text=Halo, saya ingin memesan."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:scale-110 hover:bg-green-600 animate-pulse-soft"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
