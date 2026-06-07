# NAMA COFFEE - Website Profesional Coffee Shop

Website modern dan responsif untuk NAMA COFFEE, sebuah coffee shop di Cimahi dengan fokus pada pengalaman pengguna yang optimal, SEO, dan aksesibilitas.

## 🚀 Tech Stack

- **Next.js 15+** - React framework dengan App Router
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful and consistent icons
- **Next.js Image** - Optimized image handling

## 📋 Fitur

### Pages
- **Home (/)** - Landing page dengan hero, features, testimonials, dan CTA
- **Menu (/menu)** - Daftar lengkap menu dengan kategori
- **Kontak (/kontak)** - Informasi kontak dan form komunikasi

### Components
- Responsive Navbar dengan mobile menu
- Sticky Navigation
- Footer dengan social links
- Feature cards
- Menu cards dengan kategori
- Testimonial cards
- WhatsApp floating button dengan animasi
- SEO-optimized layout

### SEO & Performance
- Metadata dinamis untuk setiap halaman
- JSON-LD schema untuk LocalBusiness
- Open Graph dan Twitter Card support
- Mobile-first responsive design
- Accessibility-friendly HTML
- Optimized images dengan Next.js Image
- Target Lighthouse score 90+

### Branding
- Primary Color: `#6F4E37` (Coffee Dark)
- Secondary Color: `#C4A484` (Coffee Light)
- Background: `#FAF7F2` (Cream)
- Text: `#1A1A1A` (Dark Text)

## 📦 Instalasi & Setup

### Prerequisites
- Node.js 18+ dan npm/yarn/pnpm
- Git (optional)

### Langkah-langkah

1. **Clone atau download project**
```bash
cd NamaCoffee
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Setup environment variables** (jika diperlukan)
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

5. **Buka browser**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
NamaCoffee/
├── app/
│   ├── layout.tsx              # Root layout dengan metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── menu/
│   │   └── page.tsx            # Menu page
│   └── kontak/
│       └── page.tsx            # Contact page
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── sheet.tsx
│   ├── navbar.tsx              # Navigation component
│   ├── footer.tsx              # Footer component
│   ├── hero.tsx                # Hero section
│   ├── feature-card.tsx        # Feature cards
│   ├── menu-card.tsx           # Menu item cards
│   ├── testimonial-card.tsx    # Testimonial cards
│   └── whatsapp-button.tsx     # Floating WhatsApp button
├── lib/
│   ├── types.ts                # TypeScript types
│   ├── constants.ts            # Business info & menu data
│   ├── utils.ts                # Helper functions
│   └── cn.ts                   # Classname merger utility
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Mengubah Informasi Bisnis
Edit file `lib/constants.ts`:
```typescript
export const businessInfo = {
  name: 'NAMA COFFEE',
  address: 'Jl. Cisangkan Hilir No.11, ...',
  phone: '+628112211459',
  // ... other info
};
```

### Menambah Menu Items
Edit atau tambahkan di `lib/constants.ts`:
```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'new-item',
    name: 'New Item',
    category: 'coffee',
    price: 10000,
    description: 'Description',
    image: '/images/menu/new-item.jpg',
  },
  // ... more items
];
```

### Mengubah Warna/Theme
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      coffee: {
        dark: '#6F4E37',
        light: '#C4A484',
        cream: '#FAF7F2',
        text: '#1A1A1A',
      },
    },
  },
}
```

### Mengubah Metadata SEO
Edit `app/layout.tsx` dan setiap page file:
```typescript
export const metadata: Metadata = {
  title: 'Custom Title',
  description: 'Custom description',
  // ... more metadata
};
```

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Other Platforms
- Netlify
- Railway
- AWS Amplify
- DigitalOcean
- Heroku

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- ✅ Meta tags per halaman
- ✅ Open Graph support
- ✅ Twitter Card support
- ✅ JSON-LD LocalBusiness schema
- ✅ Canonical URLs
- ✅ Mobile-friendly
- ✅ Fast Core Web Vitals
- ✅ Accessibility (WCAG)

## 📞 Contact Integration

### WhatsApp Integration
- Floating button dengan animasi
- Direct message support
- Pre-filled messages

### Contact Form
- Form validation (client-side)
- Fields: Name, Email, Phone, Message
- Responsive design

## 🎯 Performance Targets

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🛠️ Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Adding New Pages
1. Create new folder in `app/[page-name]/`
2. Add `page.tsx` file
3. Add metadata export
4. Create components as needed

### Adding New Components
1. Create file in `components/` folder
2. Use TypeScript with proper typing
3. Follow component naming convention
4. Export from component file

## 📝 Content Management

Semua konten bisnis disimpan di `lib/constants.ts`:
- Business info
- Menu items
- Features
- Testimonials

Untuk update konten, cukup edit file tersebut dan redeploy.

## 🔐 Security

- CSP headers configured
- XSS protection
- CSRF token support (ready)
- Secure external links
- Environment variables for sensitive data

## 📚 Dokumentasi

### Next.js
- https://nextjs.org/docs

### Tailwind CSS
- https://tailwindcss.com/docs

### shadcn/ui
- https://ui.shadcn.com

### TypeScript
- https://www.typescriptlang.org/docs

## 🤝 Support

Untuk bantuan atau pertanyaan, hubungi NAMA COFFEE:
- WhatsApp: [https://wa.me/628112211459](https://wa.me/628112211459)
- Instagram: [@namacoffee](https://instagram.com/namacoffee)
- Phone: +628112211459

## 📄 License

MIT License - Silakan gunakan project ini untuk keperluan komersial maupun personal.

## 🎉 Credits

Dibuat dengan ❤️ menggunakan Next.js, Tailwind CSS, dan shadcn/ui.

---

**Last Updated**: 2026-06-07
**Version**: 1.0.0
