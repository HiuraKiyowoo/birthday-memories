# TODO — Birthday Memories

## 1. Enam halaman cerita dan navigasi swipe
- Buat enam halaman mengikuti urutan kolase: kiri-ke-kanan, lalu lanjut ke baris bawah. Urutannya adalah ucapan pixel-art, menu ikon, pemutar musik/vinyl, surat, scrapbook foto, dan birthday surprise.
- Tampilkan transisi scene vertikal yang halus. Swipe ke bawah membuka halaman berikutnya, swipe ke atas kembali ke halaman sebelumnya; wheel mouse mendukung navigasi desktop.
- Hilangkan bingkai/jendela browser dan kontrol panah atau tab klik untuk berpindah halaman. Indikator progres hanya visual.
- Interaksi dalam halaman tetap berfungsi dan tidak memicu navigasi swipe yang tak disengaja.

## 2. Gaya visual retro dan halaman ucapan
- Gunakan estetika pixel-art, warna pastel sky/pink/mint, tipografi retro untuk label, dan halaman penuh layar responsif.
- Sebelum enam halaman cerita, tampilkan dialog retro kecil bergambar kue dengan teks “Love, will you blow this?” serta pilihan Yes/No pada layar pembuka tersendiri. Dialog tidak boleh menumpuk atau menutupi halaman ucapan; setelah Yes, No, atau tombol tutup, halaman pertama harus tampil utuh.
- Halaman ucapan menampilkan “happy birthday, bubby!” di atas lanskap pixel-art pastel yang rinci dan tajam: awan/matahari bertingkat, pepohonan latar dan depan, detail bunga/rumput, serta kontur tanah kotak.
- Semua tombol mudah disentuh, layout responsif, tanpa horizontal overflow, animasi ringan, dan menghormati `prefers-reduced-motion`.

## 3. Menu dan musik
- Halaman menu menampilkan ikon untuk musik, foto, surat, dan wish sebagai bagian dari desain referensi.
- Halaman musik bergaya pemutar piringan hitam, menyediakan play/pause dan volume. Musik tidak autoplay; isi `musicSrc` di konfigurasi untuk mengaktifkan audio.

## 4. Surat, galeri, dan surprise
- Halaman surat menampilkan desain surat retro dan kontrol untuk membuka isi surat lengkap.
- Halaman scrapbook menampilkan foto dengan caption, lazy loading, dan kontrol foto yang membuka tampilan besar.
- Halaman terakhir menampilkan surprise/wish interaktif, pesan ulang tahun, dan opsi replay.

## 5. Konten yang bisa dikustomisasi dan preview
- Simpan nama penerima/pengirim, pesan ucapan, isi surat, foto dan caption, tanggal, lagu, serta warna tema dalam `src/config/birthday.ts` agar dapat diedit tanpa mengubah komponen.
- Saat detail personal belum diberikan, gunakan contoh netral yang mudah diganti.
- Bangun preview terlebih dahulu; jangan menerbitkan ke Vercel/platform tanpa instruksi publikasi eksplisit.
