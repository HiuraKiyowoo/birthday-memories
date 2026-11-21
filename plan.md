# Rencana — Birthday Memories

## Pendekatan implementasi

Bangun pengalaman web React + Vite + TypeScript, mobile-first. Aplikasi berupa satu rangkaian tujuh scene dalam pengalaman penuh-layar, bukan tujuh route terpisah: navigasi Next/Previous, swipe sentuh, drag mouse, tombol keyboard, indikator progres, transisi Framer Motion, dan pengaman agar swipe tidak memotong interaksi kontrol. Scene meliputi Opening, Birthday Greeting, Photo Memories, Memory Timeline, Special Letter, Birthday Cake, dan Final Surprise. Semua konten personal berada dalam satu berkas konfigurasi yang mudah diedit; karena nama, foto, tanggal, dan musik belum diberikan, isi awal menggunakan contoh netral/placeholder yang dapat diganti.

Gunakan CSS/Tailwind untuk ilustrasi ringan (amplop, balon, kue, lilin, partikel, confetti, dan visualizer) agar tidak membebani smartphone. Framer Motion menangani transisi scene, staggered reveal, dan interaksi kartu. Galeri memakai foto placeholder yang mudah diganti, lazy loading, zoom dialog, dan caption. Timeline mendukung reveal saat discroll. Surat memiliki animasi mengetik dan kontrol untuk membuka teks lengkap. Musik tidak autoplay; pemutaran baru dimulai setelah interaksi dan memiliki tombol play/pause serta volume. Hormati `prefers-reduced-motion` dan sediakan navigasi alternatif selain swipe.

Struktur utama: `src/config/birthday.ts` untuk personalisasi; `src/components/` untuk shell, navigasi, kontrol audio, dekorasi, dan komponen reusable; `src/scenes/` untuk tujuh scene; `src/hooks/` untuk gesture dan navigasi; `src/index.css` untuk tema dan animasi ringan; `public/` untuk route manifest dan aset. Proyek awal kosong, jadi scaffold Vite React TypeScript dan konfigurasi Tailwind akan dibuat setelah rencana disetujui. Tidak diperlukan backend atau database.

## Desain

Tiga arah visual yang dipertimbangkan: (1) *editorial scrapbook romantis* (<0.10), (2) *fairytale pastel sinematik* (<0.10), (3) *minimalis floral modern* (<0.10). Pilihan: editorial scrapbook romantis, karena paling cocok mengubah kenangan dan surat menjadi hadiah digital yang terasa personal.

- **Gerakan desain:** scrapbook editorial kontemporer dengan nuansa surat cinta dan cetakan foto instan.
- **Prinsip inti:** hangat dan personal; kaya detail tetapi tetap lapang; interaksi jelas; animasi lembut dan hemat performa.
- **Filosofi warna:** dasar ivory hangat dan blush, dengan plum/berry sebagai aksen khas serta sentuhan champagne untuk momen perayaan.
- **Paradigma layout:** setiap scene seperti lembar scrapbook dalam panggung penuh layar; elemen foto, pita, dan catatan ditempatkan asimetris, dengan kartu bertumpuk, bukan dashboard/grid generik.
- **Motif khas:** tepi foto polaroid dengan pita kecil; bintang/partikel lembut; garis tulisan tangan pada surat dan timeline.
- **Interaksi:** tombol besar dan mudah dijangkau; swipe terasa seperti membalik halaman; gestur tidak menggantikan tombol; klik foto membuka tampilan besar.
- **Animasi:** pergantian scene memakai kombinasi fade/slide/scale yang halus; elemen dekoratif melayang perlahan; confetti hanya pada momen spesifik; durasi dan gerak dikurangi bila `prefers-reduced-motion` aktif.
- **Tipografi:** serif elegan untuk headline dan surat, sans-serif bersih untuk navigasi/isi, aksen script hanya untuk catatan pendek.
- **Esensi brand:** hadiah digital yang mengubah ucapan ulang tahun menjadi perjalanan kenangan interaktif; personal, lembut, meriah.
- **Suara brand:** intim, tulus, dan tidak berlebihan. Contoh: “Ada satu hari yang layak dirayakan lebih lama.” dan “Simpan harapanmu, lalu tiup lilinnya.”
- **Wordmark:** “Birthday Memories” dengan serif editorial dan bintang kecil sebagai tanda baca visual.
- **Warna brand khas:** berry-rose, digunakan hemat agar terasa istimewa.

## Alur preview dan Vercel

Setelah persetujuan, implementasikan keseluruhan tujuh scene, aktifkan server preview platform dan tampilkan hasilnya untuk ditinjau. Belum ada deploy atau publish dalam langkah ini. Setelah preview disetujui, deployment Vercel dapat dibahas/dikerjakan sebagai tahap terpisah sesuai akses dan konfigurasi yang tersedia; jangan memublikasikan tanpa instruksi eksplisit.