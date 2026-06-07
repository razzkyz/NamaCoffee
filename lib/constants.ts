import type { MenuItem, Testimonial, Feature, BusinessInfo } from './types';

/** Path gambar menu — encode spasi di nama file */
export function menuImage(filename: string) {
  return `/images/menu/${encodeURIComponent(filename)}`;
}

export const businessInfo: BusinessInfo = {
  name: 'NAMA COFFEE',
  address: 'Jl. Cisangkan Hilir No.11, Padasuka, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40526',
  phone: '+628112211459',
  instagram: 'https://www.instagram.com/nama.coffee/',
  googleMaps:
    'https://www.google.com/maps/place/NAMA+COFFEE/@-6.8715228,107.5340234,17z/data=!4m6!3m5!1s0x2e68e50f655e8161:0x9d54a78eeda6296e!8m2!3d-6.8715228!4d107.5340234!16s%2Fg%2F11gtgfxtb3',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=-6.8715228,107.5340234&hl=id&z=17&output=embed',
  operatingHours: {
    day: 'Setiap Hari',
    open: '11:00 WIB',
    close: '23:00 WIB',
  },
  rating: 4.9,
  reviewCount: 179,
  priceRange: 'Rp1.000 - Rp25.000',
  services: ['Dine In', 'Take Away', 'Delivery'],
};

export const menuItems: MenuItem[] = [
  // Kopi
  { id: 'es-kopi-susu', name: 'Es Kopi Susu', category: 'coffee', image: menuImage('es kopi susu.jpg') },
  { id: 'es-kopsu-blue', name: 'Es Kopsu Blue', category: 'coffee', image: menuImage('es kopsu blue.jpg') },
  { id: 'ice-coffee-milk', name: 'Ice Coffee Milk', category: 'coffee', image: menuImage('ice coffee milk.jpg') },
  { id: 'choco-latte-caramel', name: 'Choco Latte Caramel', category: 'coffee', image: menuImage('choco latte caramel.jpg') },
  { id: 'sheramon', name: 'Sheramon', category: 'coffee', image: menuImage('sheramon.jpg') },

  // Non-Kopi
  { id: 'thai-green-tea', name: 'Thai Green Tea', category: 'non-coffee', image: menuImage('thai green tea.jpg') },
  { id: 'thai-tea', name: 'Thai Tea', category: 'non-coffee', image: menuImage('thai tea.jpg') },
  { id: 'lemon-tea', name: 'Lemon Tea', category: 'non-coffee', image: menuImage('lemon tea.jpg') },

  // Makanan & Snack
  { id: 'burger', name: 'Burger', category: 'snack', image: menuImage('burger.jpg') },
  { id: 'chicken-curry', name: 'Chicken Curry', category: 'snack', image: menuImage('chicken curry.jpg') },
  { id: 'crispy-ekkado', name: 'Crispy Ekado', category: 'snack', image: menuImage('crispy Ekkado.jpg') },
  { id: 'dimsum', name: 'Dimsum', category: 'snack', image: menuImage('dimsum.jpg') },
  { id: 'french-fries', name: 'French Fries', category: 'snack', image: menuImage('french fries.jpg') },
  { id: 'keju-aroma', name: 'Keju Aroma', category: 'snack', image: menuImage('keju aroma.jpg') },
  { id: 'rujak-cireng', name: 'Rujak Cireng', category: 'snack', image: menuImage('rujak cireng.jpg') },
  { id: 'spaghetti-aglio-olio', name: 'Spaghetti Aglio Olio', category: 'snack', image: menuImage('spaghetti agliolic.jpg') },
  { id: 'spaghetti-bolognese', name: 'Spaghetti Bolognese', category: 'snack', image: menuImage('spaghetti bolognese.jpg') },
];

export const features: Feature[] = [
  {
    id: 'quality-coffee',
    title: 'Kopi Berkualitas',
    description: 'Kopi pilihan dengan biji berkualitas tinggi',
    icon: 'Coffee',
  },
  {
    id: 'affordable-price',
    title: 'Harga Terjangkau',
    description: 'Harga kompetitif mulai dari Rp1.000',
    icon: 'DollarSign',
  },
  {
    id: 'cozy-place',
    title: 'Tempat Cozy',
    description: 'Suasana hangat dan nyaman untuk bersantai',
    icon: 'Sofa',
  },
  {
    id: 'free-wifi',
    title: 'Free WiFi',
    description: 'WiFi gratis untuk semua pengunjung',
    icon: 'Wifi',
  },
  {
    id: 'study-friendly',
    title: 'Cocok Untuk Nugas',
    description: 'Tempat sempurna untuk bekerja dan belajar',
    icon: 'BookOpen',
  },
  {
    id: 'friendly-barista',
    title: 'Barista Ramah',
    description: 'Tim profesional dan ramah siap melayani',
    icon: 'Users',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Budi Santoso',
    rating: 5,
    content: 'Kopinya enak dan baristanya ramah. Pas banget buat tempat ngopi santai.',
    image: '/images/testimonials/avatar-1.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Siti Nurhaliza',
    rating: 5,
    content: 'Tempat cozy banget buat nugas. WiFi nya cepat dan kopi mereka top notch!',
    image: '/images/testimonials/avatar-2.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Ahmad Wijaya',
    rating: 5,
    content: 'Harga murah tapi kualitas mantap. Suka sama suasana dan pelayanannya.',
    image: '/images/testimonials/avatar-3.jpg',
  },
];
