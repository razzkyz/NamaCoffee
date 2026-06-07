export const whatsappLink = 'https://wa.me/628112211459?text=Halo, saya ingin memesan.';

export const socialLinks = {
  instagram: 'https://www.instagram.com/nama.coffee/',
  whatsapp: 'https://wa.me/628112211459',
  googleMaps:
    'https://www.google.com/maps/place/NAMA+COFFEE/@-6.8715228,107.5340234,17z/data=!4m6!3m5!1s0x2e68e50f655e8161:0x9d54a78eeda6296e!8m2!3d-6.8715228!4d107.5340234!16s%2Fg%2F11gtgfxtb3',
};

export const getWhatsappMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/628112211459?text=${encodedMessage}`;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const generateJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'NAMA COFFEE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Cisangkan Hilir No.11',
      addressLocality: 'Cimahi',
      addressRegion: 'Jawa Barat',
      postalCode: '40526',
      addressCountry: 'ID',
    },
    telephone: '+628112211459',
    servesCuisine: 'Coffee',
    priceRange: 'Rp1.000-Rp25.000',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '179',
    },
    sameAs: ['https://www.instagram.com/nama.coffee/'],
  };
};
