# NAMA COFFEE — Design System

Dokumen referensi desain untuk developer dan AI agent. **Jangan improvisasi visual di luar panduan ini.**

---

## 1. Brand & Tone

| Item | Value |
|------|-------|
| Nama | NAMA COFFEE |
| Tagline | Good Coffee, Good Mood, Good Place. |
| Bahasa UI | Indonesia (nav, CTA, konten) |
| Nuansa | Premium, dark, cinematic, minimalist |
| Target | Coffee shop cozy di Cimahi |

**Logo teks:** `NA` di baris atas, `MA` di baris bawah, font black, + simbol © kecil di kanan atas.

---

## 2. Color Palette

### Dark theme (Homepage & section utama)

| Token | Hex | Pemakaian |
|-------|-----|-----------|
| `premium-black` | `#0A0A0A` | Background utama, body |
| `premium-charcoal` | `#1A1A1A` | Section alternatif (Suasana Cafe, Contact bg overlay) |
| `premium-ivory` | `#F5F2ED` | Teks utama, heading, tombol primary fill |
| `premium-brown` | `#6F4E37` | Aksen, underline section, icon circle, border |
| Brown hover | `#8B6644` | Hover tombol coklat |
| Brown light | `#8B6644` | Variasi hover |

### Light theme (Halaman Kontak, form)

| Token | Hex | Pemakaian |
|-------|-----|-----------|
| `coffee-cream` | `#FAF7F2` | Background hero halaman Kontak |
| `coffee-text` | `#1A1A1A` | Teks |
| `coffee-dark` | `#6F4E37` | Aksen, harga, badge |
| `coffee-light` | `#C4A484` | Gradient/decorative |

### Opacity patterns

- Teks sekunder: `#F5F2ED/75` atau `#F5F2ED/50`
- Border halus: `border-white/5`, `border-[#6F4E37]/30`
- Overlay gambar: `from-black/80 via-black/40`

---

## 3. Typography

- **Font:** Inter (`app/layout.tsx`)
- **Heading hero:** `font-black`, `tracking-tighter`, `leading-[0.85]`
  - Contoh: `text-7xl sm:text-8xl lg:text-[9rem]` untuk "COFFEE"
- **Section title:** `text-5xl sm:text-6xl lg:text-7xl font-black text-[#F5F2ED] leading-none`
- **Label/tagline:** `uppercase tracking-[0.2em] font-bold text-xs sm:text-sm`
- **Stats label:** `text-[10px] font-semibold uppercase tracking-widest text-[#F5F2ED]/50`
- **Accent label:** `text-[#6F4E37] uppercase tracking-[0.2em] font-semibold`

**Section title underline:** `w-20 h-1.5 bg-[#6F4E37]` di bawah heading.

---

## 4. Layout

- **Max width:** `max-w-7xl mx-auto`
- **Padding horizontal:** `px-4 sm:px-6 lg:px-8`
- **Section vertical:** `py-24 sm:py-32`
- **Navbar offset:** Hero pakai `-mt-16` + `pt-28`; inner pages pakai `pt-24 sm:pt-28`
- **Grid:** `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20` untuk konten + media

---

## 5. Navbar

**File:** `components/navbar.tsx` (+ `navbar-nav-links.tsx`, `navbar-mobile-menu.tsx`)

| Aspek | Spec |
|-------|------|
| Posisi | `fixed top-0 z-50` |
| Blur | Layer terpisah: `backdrop-blur-md bg-[#0A0A0A]/40` + `[transform:translateZ(0)]` |
| Logo | NA / MA stacked, ivory |
| Menu desktop | Tengah: BERANDA, MENU, TENTANG, KONTAK — uppercase, tracking lebar |
| Active link | `underline underline-offset-8` |
| CTA kanan | Tombol ivory "Pesan Sekarang" → WhatsApp |
| Mobile | Hamburger + Sheet full-width dark |

**Nav items:**

| Label | Href |
|-------|------|
| Beranda | `/` |
| Menu | `/menu` |
| Tentang | `/#tentang` |
| Kontak | `/kontak` |

---

## 6. Hero (Homepage)

**File:** `components/hero.tsx`

| Aspek | Spec |
|-------|------|
| Background | CSS `url('/images/bg.png')` — **bukan** `<Image>` terpisah untuk cup |
| Background size | `bg-[length:auto_100%] bg-right-bottom bg-no-repeat` |
| Min height | `min-h-[100svh]` |
| Overlay | Gradient kiri `from-black/80 via-black/40 to-transparent` |
| Heading | "COFFEE" besar ivory |
| Tagline | Good Coffee, Good Mood, Good Place. |
| Primary CTA | Rounded-full ivory + icon WhatsApp → wa.me |
| Secondary CTA | Rounded-full outline ivory → `/menu` |
| Stats | 4.9★ / 179+ / Rp 1K-25K — `divide-x divide-[#F5F2ED]/20` |
| Dekor | Vertical text kanan (lg+): "Coffee · People · Good Times" |
| Scroll | "Scroll ke bawah" + arrow bounce (sm+, kanan bawah) → `#tentang` |

**Penting — background cup jangan kepotong:**
- Desktop & mobile: pakai `auto 100%` + `right bottom`, **jangan** `bg-cover` + `center` saja.

---

## 7. Homepage Sections (urutan)

| # | Section | ID | Background | File |
|---|---------|-----|------------|------|
| 1 | Hero | — | `#0A0A0A` + bg.png | `hero.tsx` |
| 2 | Tentang Kami | `tentang` | `#0A0A0A` | `about-section.tsx` |
| 3 | Suasana Cafe | — | `#1A1A1A` | `atmosphere-section.tsx` |
| 4 | Galeri | — | `#0A0A0A` | `gallery-section.tsx` |
| 5 | Hubungi Kami | — | `#1A1A1A` + overlay foto | `contact-section.tsx` |

Section bawah fold di-**dynamic import** di `app/page.tsx` untuk performa.

---

## 8. Buttons & CTA

### Dark sections

```tsx
// Primary ivory
className="rounded-full bg-[#F5F2ED] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:bg-white"

// Secondary outline
className="rounded-full border border-[#F5F2ED]/50 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F5F2ED] hover:bg-white/10"

// Brown solid (contact section)
className="bg-[#6F4E37] hover:bg-[#8B6644] text-[#F5F2ED] font-bold py-6 px-8"
```

### Card/image

- Border radius besar: `rounded-3xl`
- Shadow: `shadow-2xl` / `shadow-xl`
- Hover image: `scale-[1.03]` max — **jangan** `scale-110`

---

## 9. Images & Assets

### Path: `public/images/`

| File | Pemakaian |
|------|-----------|
| `bg.png` | Hero background (sudah include cup + watermark NAMA) |
| `logo.jpg` | Favicon (`app/icon.jpg`), metadata icons |
| `tempat1.png` – `tempat4.png` | Galeri, about, atmosphere, contact, menu card placeholder |

### Aturan gambar

- Pakai komponen `PlaceImage` (`components/place-image.tsx`), **bukan** `<Image>` langsung
- Default: `quality={85}`, `loading="lazy"`
- Hero bg: CSS background, bukan Next Image overlay
- Target ukuran file: **200–500 KB** per gambar (compress di Squoosh/TinyPNG)
- Resolusi min: **1200px lebar** untuk foto tempat
- **Extension:** `.png` untuk tempat1–4 (bukan .jpg)

### Google Maps

- Embed: `GoogleMapsEmbed` → `businessInfo.googleMapsEmbed`
- Link buka maps: `businessInfo.googleMaps`
- Koordinat: `-6.8715228, 107.5340234`

---

## 10. Business Data

**Single source of truth:** `lib/constants.ts` → `businessInfo`

| Field | Value |
|-------|-------|
| Phone / WA | `+628112211459` |
| Instagram | `https://www.instagram.com/nama.coffee/` |
| Alamat | Jl. Cisangkan Hilir No.11, Padasuka, Cimahi Tengah |
| Jam | Setiap Hari, 11:00–23:00 WIB |
| Rating | 4.9 (179+ ulasan) |
| Harga | Rp 1K – 25K |

Social links duplikat di `lib/utils.ts` → `socialLinks`.

---

## 11. Inner Pages Style

### Halaman Menu & Kontak

- **Menu & Kontak:** Dark theme penuh — sama dengan landing page (`#0A0A0A` / `#1A1A1A`)

### `/menu`

- Hero: heading "MENU" font-black ivory + underline coklat
- Section kategori: pola sama About/Galeri
- Card: `rounded-3xl`, border `#6F4E37/20`, bg `#1A1A1A`, gambar + nama uppercase
- CTA: tombol rounded-full ivory (sama hero)

### `/kontak`

- Hero: heading "KONTAK" font-black ivory + underline coklat
- 3 channel cards tengah: WhatsApp, Instagram, Google Maps (`max-w-5xl mx-auto`)
- Info cards: Alamat, Jam, Telepon
- Map embed `rounded-3xl` + tombol "Buka di Google Maps"

---

## 12. Global UI Elements

| Element | Spec |
|---------|------|
| WhatsApp FAB | Fixed kanan bawah, `bg-green-500`, `animate-pulse-soft` |
| Footer | `bg-coffee-text` (dark), 4 kolom grid |
| Scrollbar | Dark track `#0A0A0A`, thumb ivory/20 |

---

## 13. Performance Rules (WAJIB)

AI agent **jangan** menambahkan hal ini tanpa alasan kuat:

| ❌ Jangan | ✅ Pakai |
|----------|---------|
| View Transitions API / intercept semua `<a>` click | Next.js `<Link prefetch>` native |
| `transition-all` global | `transition-colors duration-200` |
| `backdrop-blur` langsung di `<nav>` tanpa layer | Blur di `div` terpisah + `translateZ(0)` |
| `bg-cover` + `center` untuk hero bg.png | `auto 100%` + `right bottom` |
| Overlay `tempat*.jpg` di hero (cup dobel) | Hanya bg.png |
| Gambar tempat > 1 MB tanpa compress | Compress ke ~200–500 KB |
| `quality={100}` semua gambar | `PlaceImage` default quality 85 |
| Dynamic import dihapus dari homepage | Pertahankan dynamic import section bawah fold |

Dev mode (`npm run dev`) lebih lambat — tes performa dengan `npm run build && npm run start`.

---

## 14. Component Map

```
components/
├── navbar.tsx              # Server shell + blur layer
├── navbar-nav-links.tsx    # Client: active state desktop
├── navbar-mobile-menu.tsx  # Client: Sheet mobile
├── hero.tsx                # Homepage hero
├── about-section.tsx       # id="tentang"
├── atmosphere-section.tsx
├── gallery-section.tsx
├── contact-section.tsx
├── place-image.tsx         # Wrapper Image tempat
├── google-maps-embed.tsx   # iframe maps
├── menu-card.tsx
├── footer.tsx
└── whatsapp-button.tsx

lib/
├── constants.ts            # businessInfo, menuItems
└── utils.ts                # socialLinks, formatPrice, jsonLd
```

---

## 15. Checklist Sebelum Merge UI

- [ ] Warna sesuai palette (dark ivory/brown, bukan random)
- [ ] Section title + underline coklat 20×1.5
- [ ] Navbar blur layer terpisah
- [ ] Hero bg.png positioning benar (cup tidak kepotong)
- [ ] Gambar tempat pakai `.png` + `PlaceImage`
- [ ] Data bisnis dari `constants.ts`, bukan hardcode
- [ ] Navigasi tanpa View Transition handler
- [ ] Teks UI bahasa Indonesia

---

*Terakhir diupdate: Juni 2026 — sesuai implementasi production NAMA COFFEE.*
