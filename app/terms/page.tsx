import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NAMA COFFEE',
  description: 'Terms of service for NAMA COFFEE',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-coffee-text mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-sm max-w-none text-coffee-text/80">
        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          1. Penerimaan Syarat
        </h2>
        <p>
          Dengan mengakses dan menggunakan website NAMA COFFEE, Anda menyetujui
          untuk terikat dengan syarat dan ketentuan ini.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          2. Penggunaan Website
        </h2>
        <p>
          Anda setuju untuk menggunakan website ini hanya untuk tujuan yang sah
          dan tidak untuk aktivitas yang melanggar hukum atau merugikan pihak lain.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          3. Konten dan Lisensi
        </h2>
        <p>
          Semua konten di website ini, termasuk teks, gambar, dan logo, adalah
          milik NAMA COFFEE dan dilindungi oleh hukum hak cipta.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          4. Disclaimer
        </h2>
        <p>
          Website ini disediakan &quot;as is&quot; tanpa garansi apapun. NAMA COFFEE tidak
          bertanggung jawab atas kerugian yang timbul dari penggunaan website ini.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          5. Tanggung Jawab Terbatas
        </h2>
        <p>
          Dalam kondisi apapun, NAMA COFFEE tidak bertanggung jawab atas:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Kerugian tidak langsung atau konsekuensial</li>
          <li>Kehilangan data atau pendapatan</li>
          <li>Gangguan bisnis</li>
        </ul>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          6. Link Eksternal
        </h2>
        <p>
          Website ini mungkin berisi link ke website pihak ketiga. NAMA COFFEE
          tidak bertanggung jawab atas konten di website eksternal tersebut.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          7. Modifikasi Syarat
        </h2>
        <p>
          NAMA COFFEE berhak mengubah syarat dan ketentuan ini kapan saja.
          Perubahan akan diumumkan di halaman ini.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          8. Hukum yang Berlaku
        </h2>
        <p>
          Syarat dan ketentuan ini diatur oleh hukum Indonesia.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          9. Hubungi Kami
        </h2>
        <p>
          Jika Anda memiliki pertanyaan tentang terms of service ini, silakan hubungi kami di:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>WhatsApp: +628112211459</li>
          <li>Instagram: @namacoffee</li>
        </ul>
      </div>
    </div>
  );
}
