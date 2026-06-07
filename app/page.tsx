import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/hero';

const AboutSection = dynamic(
  () => import('@/components/about-section').then((mod) => mod.AboutSection),
  { loading: () => <SectionPlaceholder /> }
);

const AtmosphereSection = dynamic(
  () => import('@/components/atmosphere-section').then((mod) => mod.AtmosphereSection),
  { loading: () => <SectionPlaceholder dark /> }
);

const GallerySection = dynamic(
  () => import('@/components/gallery-section').then((mod) => mod.GallerySection),
  { loading: () => <SectionPlaceholder /> }
);

const ContactSection = dynamic(
  () => import('@/components/contact-section').then((mod) => mod.ContactSection),
  { loading: () => <SectionPlaceholder dark /> }
);

function SectionPlaceholder({ dark = false }: { dark?: boolean }) {
  return <div className={`min-h-[320px] ${dark ? 'bg-[#1A1A1A]' : 'bg-[#0A0A0A]'}`} />;
}

export const metadata: Metadata = {
  title: 'NAMA COFFEE | Premium Coffee Shop di Cimahi',
  description: 'NAMA COFFEE adalah specialty coffee shop premium di Cimahi dengan kopi berkualitas tinggi, barista profesional, dan suasana cinematic yang nyaman.',
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <AboutSection />
      <AtmosphereSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
