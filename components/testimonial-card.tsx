import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-coffee-text/10">
      <CardContent className="pt-6">
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-coffee-text/20'
              }`}
            />
          ))}
        </div>

        <p className="text-coffee-text/80 mb-4 italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coffee-light to-coffee-dark flex items-center justify-center text-white font-semibold flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-coffee-text text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-coffee-text/60">Pelanggan setia</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
