import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ProgressBar } from '@/components/progress-bar';
import { NavigationEvents } from '@/components/navigation-events';
import { generateJsonLd } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NAMA COFFEE | Tempat Ngopi Cozy di Cimahi',
  description: 'NAMA COFFEE adalah coffee shop cozy di Cimahi dengan kopi berkualitas, harga terjangkau, tempat nyaman untuk nongkrong dan mengerjakan tugas.',
  keywords: [
    'coffee shop cimahi',
    'cafe cimahi',
    'tempat ngopi cimahi',
    'coffee shop padasuka',
    'cafe buat nugas cimahi',
    'kopi susu cimahi',
    'nama coffee',
  ],
  metadataBase: new URL('https://namacoffee.com'),
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://namacoffee.com',
    title: 'NAMA COFFEE | Tempat Ngopi Cozy di Cimahi',
    description: 'NAMA COFFEE adalah coffee shop cozy di Cimahi dengan kopi berkualitas, harga terjangkau, tempat nyaman untuk nongkrong dan mengerjakan tugas.',
    siteName: 'NAMA COFFEE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NAMA COFFEE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAMA COFFEE | Tempat Ngopi Cozy di Cimahi',
    description: 'NAMA COFFEE adalah coffee shop cozy di Cimahi dengan kopi berkualitas, harga terjangkau, tempat nyaman untuk nongkrong dan mengerjakan tugas.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="//www.instagram.com/embed.js" />
      </head>
      <body className={inter.className}>
        <ProgressBar />
        <NavigationEvents />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
