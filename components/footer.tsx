import Link from 'next/link';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/constants';
import { socialLinks } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-coffee-text/10 bg-coffee-text text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div className="leading-none">
                <span className="block text-lg font-black tracking-tighter text-white">
                  NA
                </span>
                <span className="block text-lg font-black tracking-tighter text-white">
                  MA
                </span>
              </div>
              <span className="mb-3 text-[8px] text-white/50">©</span>
            </div>
            <p className="text-sm text-white/70">
              Tempat ngopi cozy dengan kopi berkualitas dan suasana hangat.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/70 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-white/70 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <p>{businessInfo.operatingHours.day}</p>
                <p>{businessInfo.operatingHours.open} - {businessInfo.operatingHours.close}</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {currentYear} NAMA COFFEE. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
