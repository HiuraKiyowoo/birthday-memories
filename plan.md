# Rencana — Birthday Memories (revisi sesuai referensi)

## Pendekatan

Bangun pengalaman enam halaman penuh layar menggunakan React, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React, dan CSS pixel-art ringan. Hilangkan seluruh bingkai/tampilan browser dari halaman. Tampilkan jendela dialog kecil bergaya komputer retro sebagai layar pembuka tersendiri—jangan render atau menumpuknya di atas scene ucapan—dengan ilustrasi kue, teks “Love, will you blow this?”, dan tombol Yes/No. Menekan Yes, No, atau tombol tutup menampilkan halaman cerita pertama tanpa dialog. Enam halaman cerita mengikuti urutan kolase kiri-ke-kanan lalu turun baris: (1) ucapan “happy birthday, bubby!” dengan lanskap pixel pastel rinci (awan dan matahari bertingkat, hutan depan/belakang, bunga, serta tanah berpola kontur kotak); (2) menu ikon; (3) pemutar musik/vinyl; (4) surat; (5) scrapbook/foto; (6) surprise ulang tahun/wish.

Navigasi antarpages dilakukan dengan swipe vertikal, swipe turun untuk maju dan swipe naik untuk kembali; wheel mouse menjadi alternatif desktop. Tidak gunakan klik pada panah, tab halaman, atau tombol CTA untuk berpindah scene. Tombol untuk interaksi lokal tetap boleh digunakan, seperti pilihan Yes/No, mengontrol playback lewat Spotify, memperbesar foto, membuka surat, dan membuat wish. Pergerakan scene memakai transisi vertikal halus Framer Motion; aset utama juga muncul bertahap dan bergerak lembut sesuai konteks scene. Gerak mikro pada ikon, vinyl, equalizer, foto dan confetti memberi rasa polished tanpa mengubah gaya pixel-art, dengan dukungan `prefers-reduced-motion`. Indikator kemajuan bersifat visual saja.

Konten personal—nama penerima/pengirim, ucapan, surat, foto/caption, tanggal, Spotify embed/link, dan tema—berada di `src/config/birthday.ts`. Halaman Musik mengembed playlist Spotify yang diberikan melalui player resmi; playback dimulai hanya setelah pengunjung menekan play di Spotify, dan tersedia tautan untuk membuka playlist di Spotify. Galeri menampilkan maksimal empat foto dalam grid kompak 2×2 dengan tiap kartu berasio 1:1; jika hanya tiga foto tersedia, kartu terakhir ditengahkan. Tanpa informasi pribadi, gunakan teks contoh netral, caption contoh, dan foto contoh. Hormati `prefers-reduced-motion`, gunakan lazy-loading foto, serta pertahankan layout responsif mobile.

Struktur proyek: `src/App.tsx` menyusun scene dan gesture; `src/config/birthday.ts` menyimpan copy dan data; `src/index.css` mengatur palet retro pastel, hutan pixel, dan jendela dialog; `src/components/` untuk elemen reusable; `public/manus-routes.json` untuk route tunggal `/`. Tak perlu backend atau database.

## Arah visual

Gaya yang dipilih adalah interactive birthday card retro/pixel-art berdasarkan referensi pengguna: pastel sky/pink/mint, tipografi pixel pada label pendek dan sans yang ramah untuk teks utama, dialog sistem lawas untuk pembuka, landscape dan kartu bergaya pixel, tanpa UI browser. Interaksi harus mudah dipahami dan tidak memaksa navigasi klik: swipe vertikal menjadi bahasa utama untuk membalik halaman. Pesan memakai nada hangat dan playful, misalnya “Love, will you blow this?” serta “happy birthday, bubby!”. Brand essence: hadiah digital ulang tahun yang terasa seperti game/komputer kecil nostalgia; playful, lembut, personal.

## Preview dan publikasi

Jalankan preview platform terlebih dahulu. Jangan menerbitkan ke Vercel atau platform lain tanpa instruksi publikasi eksplisit. Konfigurasi build statis proyek tersedia untuk checkpoint mendatang; auto-publish tetap nonaktif.
