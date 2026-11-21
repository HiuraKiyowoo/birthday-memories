# TODO — Birthday Memories

## 1. Experience multi-scene, navigasi, dan responsivitas
- Bangun seluruh tujuh halaman: Opening, Birthday Greeting, Photo Memories, Memory Timeline, Special Letter, Birthday Cake, dan Final Surprise.
- Pengguna dapat berpindah menggunakan swipe kiri/kanan pada mobile, tombol Next/Previous, navigasi keyboard desktop, serta indikator progres halaman.
- Transisi antarscene smooth; setiap halaman mempunyai animasi masuk/keluar berbeda namun konsisten.
- Swipe mendukung touch dan mouse drag, memakai threshold, serta tidak sensitif berlebihan atau mengganggu scroll/interaksi kontrol.
- Desain mobile-first responsif, tanpa horizontal overflow, tombol nyaman disentuh, animasi ringan, dan menghormati prefers-reduced-motion.

## 2. Scene pembuka dan ucapan ulang tahun
- Opening memiliki background gradient estetik, floating particles/bintang, amplop yang muncul perlahan, teks “Something Special For You”, dan tombol “Open Your Surprise” dengan animasi amplop terbuka.
- Birthday Greeting menampilkan “Happy Birthday!”, staggered reveal, confetti, floating balloons, dekorasi bergerak natural, dan pesan singkat yang bisa dikustomisasi.

## 3. Galeri dan timeline kenangan
- Photo Memories menggunakan layout scrapbook/polaroid; foto mengambang ringan, dapat digeser horizontal, memiliki caption, dan membuka zoom saat ditekan.
- Memory Timeline berupa timeline vertikal interaktif dengan tanggal, foto, cerita, scroll reveal, garis yang muncul bertahap, dan kartu dengan smooth transition.
- Gambar dimuat secara lazy.

## 4. Surat spesial dan kue ulang tahun
- Special Letter menampilkan surat digital dengan animasi kertas terbuka, typing animation/teks bertahap, floating hearts, dan tombol untuk membuka seluruh surat.
- Birthday Cake menampilkan kue CSS interaktif, lilin dengan api bergerak, tombol “Make a Wish”, dan kejutan confetti/particle ketika ditekan.

## 5. Penutup, audio, dan personalisasi
- Final Surprise memiliki animasi cinematic, teks “Once Again, Happy Birthday!”, animasi bunga/bintang, pesan penutup, dan tombol replay yang mengulang pengalaman dari awal.
- Background music memiliki play/pause, kontrol yang selalu tersedia, visualizer sederhana, volume control, dan hanya mulai setelah interaksi pertama pengguna; jangan paksa autoplay sebelum interaksi.
- Sediakan satu file konfigurasi khusus yang mudah diedit untuk nama penerima/pengirim, tanggal, pesan ucapan, isi surat, foto/caption, musik, dan tema warna.
- Karena detail personal belum diberikan, gunakan konten contoh netral yang mudah diganti.

## 6. Arah visual dan preview
- Terapkan desain editorial scrapbook romantis modern dengan palet pastel ivory/blush dan aksen berry-rose, layout asimetris lembar kenangan, polaroid, bintang/partikel, serta tipografi elegan.
- Gunakan React, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React, dan Three.js hanya untuk elemen dekoratif 3D ringan.
- Aktifkan preview setelah implementasi; belum melakukan deployment/publish Vercel pada tahap preview.