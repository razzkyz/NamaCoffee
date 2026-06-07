export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'snack';
  image: string;
  description?: string;
  price?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  instagramUrl: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  instagram: string;
  googleMaps: string;
  googleMapsEmbed: string;
  operatingHours: {
    day: string;
    open: string;
    close: string;
  };
  rating: number;
  reviewCount: number;
  priceRange: string;
  services: string[];
}
