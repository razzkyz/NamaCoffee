import { Card, CardContent } from '@/components/ui/card';
import {
  Coffee,
  DollarSign,
  Sofa,
  Wifi,
  BookOpen,
  Users,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  DollarSign,
  Sofa,
  Wifi,
  BookOpen,
  Users,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon] || Coffee;

  return (
    <Card className="border-coffee-text/10 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-coffee-light/20 rounded-lg">
            <Icon className="h-6 w-6 text-coffee-dark" />
          </div>
          <h3 className="font-semibold text-coffee-text mb-2">{title}</h3>
          <p className="text-sm text-coffee-text/70">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
