import { cn } from '@/lib/cn';
import { businessInfo } from '@/lib/constants';

interface GoogleMapsEmbedProps {
  className?: string;
  title?: string;
}

export function GoogleMapsEmbed({
  className,
  title = 'Lokasi NAMA COFFEE di Google Maps',
}: GoogleMapsEmbedProps) {
  return (
    <iframe
      src={businessInfo.googleMapsEmbed}
      title={title}
      className={cn('h-full w-full border-0', className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
