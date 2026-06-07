import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NAMA COFFEE',
  description: 'Privacy policy for NAMA COFFEE',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-coffee-text mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-sm max-w-none text-coffee-text/80">
        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          1. Informasi Kami Kumpulkan
        </h2>
        <p>
          Kami mengumpulkan informasi yang Anda berikan melalui formulir kontak,
          seperti nama, email, dan nomor telepon.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          2. Bagaimana Kami Menggunakan Informasi
        </h2>
        <p>
          Informasi yang dikumpulkan digunakan untuk:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Merespon pertanyaan dan permintaan Anda</li>
          <li>Mengirim update tentang produk dan layanan kami</li>
          <li>Meningkatkan pengalaman pengguna</li>
        </ul>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          3. Keamanan Data
        </h2>
        <p>
          Kami berkomitmen untuk melindungi privasi Anda. Semua data disimpan
          dengan aman dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          4. Cookies
        </h2>
        <p>
          Website kami menggunakan cookies untuk meningkatkan pengalaman browsing.
          Anda dapat menonaktifkan cookies melalui pengaturan browser Anda.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          5. Perubahan Kebijakan
        </h2>
        <p>
          Kami dapat memperbarui privacy policy ini sewaktu-waktu. Perubahan akan
          diumumkan di halaman ini.
        </p>

        <h2 className="text-2xl font-bold text-coffee-text mt-8 mb-4">
          6. Hubungi Kami
        </h2>
        <p>
          Jika Anda memiliki pertanyaan tentang privacy policy ini, silakan hubungi kami di:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>WhatsApp: +628112211459</li>
          <li>Instagram: @namacoffee</li>
        </ul>
      </div>
    </div>
  );
}
