# 🚀 Panduan Lengkap Deploy Portofolio ke Vercel (100% Gratis)

Panduan langkah demi langkah mempublikasikan website portofolio ke internet menggunakan **Vercel** dengan alamat gratis berkecepatan tinggi (seperti `cokiandthebastards.vercel.app`) dan persiapan custom domain `.com`.

---

## 📋 Daftar Isi
1. [Kenapa Memilih Vercel?](#-kenapa-memilih-vercel)
2. [Prasyarat](#-prasyarat)
3. [Metode 1: Deploy Lewat GitHub (Sangat Direkomendasikan)](#-metode-1-deploy-lewat-github-sangat-direkomendasikan)
4. [Metode 2: Deploy Lewat Vercel CLI (Terminal)](#-metode-2-deploy-lewat-vercel-cli-terminal)
5. [Cara Mengubah Subdomain Jadi Nama Custom (Gratis)](#-cara-mengubah-subdomain-jadi-nama-custom-gratis)
6. [Cara Pasang Custom Domain (.com) Jika Nanti Membeli](#-cara-pasang-custom-domain-com-jika-nanti-membeli)
7. [Checklist & Tips Penting](#-checklist--tips-penting)

---

## 🌟 Kenapa Memilih Vercel?
* **100% Gratis Selamanya**: Kuota bandwidth tier Hobby sangat besar untuk website portofolio.
* **Sangat Cepat**: Menggunakan CDN Edge global (termasuk server di wilayah Asia Tenggara/Jakarta & Singapura).
* **HTTPS/SSL Otomatis**: Website langsung aman dengan gembok hijau tanpa perlu konfigurasi sertifikat manual.
* **Auto-Deploy (CI/CD)**: Setiap kali Anda melakukan perubahan kode dan melakukan `git push`, Vercel otomatis memperbarui website dalam hitungan detik.
* **Alamat Keren**: Domain bawaan `.vercel.app` diakui dan terkesan modern di mata tech recruiter & software engineer.

---

## 🛠️ Prasyarat
Sebelum mulai, pastikan Anda sudah menyiapkan:
1. Akun **GitHub** ([github.com](https://github.com)).
2. Akun **Vercel** ([vercel.com](https://vercel.com)) — *disarankan daftar menggunakan opsi "Continue with GitHub"*.

---

## 🏆 Metode 1: Deploy Lewat GitHub (Sangat Direkomendasikan)

Ini adalah alur kerja standar industri. Setiap kali Anda mengubah CV, menambah proyek baru, atau merapikan CSS, website Anda akan otomatis ter-update sendiri.

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Isi **Repository name**, misalnya: `portofolio` atau `my-portfolio`.
3. Pilih opsi **Public**.
4. Biarkan opsi lain kosong (jangan centang *Add a README file* karena file sudah ada di laptop).
5. Klik tombol hijau **Create repository**.

### Langkah 2: Push Berkas dari Laptop ke GitHub
Buka PowerShell atau Command Prompt di folder proyek portofolio Anda (`d:\coki\projects\Android\Projects\WorkProject\portofolio`), lalu jalankan perintah berikut secara berurutan:

```powershell
# Inisialisasi git di folder lokal
git init

# Tambahkan seluruh file ke staging
git add .

# Simpan snapshot commit pertama
git commit -m "feat: portfolio mobile engineer initial release"

# Ubah nama branch utama menjadi main
git branch -M main

# Hubungkan ke repository GitHub Anda (ganti <USERNAME_ANDA> dan <NAMA_REPO>)
git remote add origin https://github.com/<USERNAME_ANDA>/portofolio.git

# Unggah seluruh file ke GitHub
git push -u origin main
```

*(Jika GitHub meminta login, ikuti petunjuk browser untuk otorisasi).*

---

### Langkah 3: Hubungkan dan Deploy di Vercel Dashboard
1. Buka browser dan login ke [vercel.com](https://vercel.com).
2. Di halaman **Overview / Dashboard**, klik tombol **"Add New..."** di kanan atas, lalu pilih **Project**.
3. Di bagian **Import Git Repository**, Anda akan melihat daftar repository GitHub Anda.
4. Cari repository `portofolio` yang baru saja Anda push, lalu klik tombol **Import**.
5. Di halaman konfigurasi proyek:
   - **Project Name**: Bisa dibiarkan default atau ganti nama (misal: `cokiandthebastards`).
   - **Framework Preset**: Biarkan **Other** (karena HTML/CSS/JS statis murni).
   - **Root Directory**: `./` (biarkan default).
   - **Build and Output Settings**: Tidak perlu diubah apa pun.
6. Klik tombol **Deploy**.
7. Tunggu sekitar 15–30 detik. Layar akan menampilkan kembang api animasi tanda deploy sukses! 🎉
8. Klik tombol **Continue to Dashboard** atau klik pratinjau gambar untuk membuka website Anda.

---

## 💻 Metode 2: Deploy Lewat Vercel CLI (Terminal)

Jika Anda tidak ingin membuat repository GitHub dan ingin langsung melempar folder lokal dari terminal:

1. Install Vercel CLI secara global:
   ```powershell
   npm install -g vercel
   ```
2. Jalankan perintah deploy di folder proyek:
   ```powershell
   vercel
   ```
3. Terminal akan menanyakan beberapa pertanyaan sederhana:
   - `Set up and deploy?` → Ketik **`y`** lalu Enter.
   - `Which scope do you want to deploy to?` → Pilih akun Vercel Anda, tekan Enter.
   - `Link to existing project?` → Ketik **`n`** lalu Enter.
   - `What's your project's name?` → Ketik `cokiandthebastards` lalu Enter.
   - `In which directory is your code located?` → Tekan Enter (untuk `./`).
   - `Want to modify these settings?` → Ketik **`n`** lalu Enter.
4. Untuk deploy final ke mode production:
   ```powershell
   vercel --prod
   ```

---

## 🎨 Cara Mengubah Subdomain Jadi Nama Custom (Gratis)

Secara default, Vercel mungkin memberikan nama dengan akhiran acak jika nama yang diinginkan sudah dipakai orang lain. Anda bisa mengubah atau menambah subdomain khusus gratis kapan saja:

1. Buka dashboard proyek Anda di Vercel.
2. Klik tab **Settings** di bagian atas menu.
3. Di panel sebelah kiri, klik menu **Domains**.
4. Anda akan melihat domain aktif Anda saat ini.
5. Pada kolom input **Domain**, ketik nama yang Anda inginkan dengan akhiran `.vercel.app`:
   Contoh: `cokiandthebastards.vercel.app`
6. Klik tombol **Add**.
7. Vercel akan memverifikasi dalam beberapa detik.
8. 🎉 Sekarang website Anda bisa diakses langsung lewat link:
   👉 **`https://cokiandthebastards.vercel.app`**

---

## 🌐 Cara Pasang Custom Domain (.com) Jika Nanti Membeli

Jika suatu saat nanti Anda membeli domain kustom resmi seperti `CokiAndTheBastards.com` (misalnya di Niagahoster, Namecheap, DomaiNesia, dll):

1. Masuk ke Vercel > Proyek Anda > **Settings** > **Domains**.
2. Masukkan nama domain yang sudah dibeli:
   `cokiandthebastards.com` lalu klik **Add**.
3. Vercel akan merekomendasikan penambahan varian `www.cokiandthebastards.com` (pilih *Yes/Redirect*).
4. Vercel akan menampilkan tabel konfigurasi DNS:
   - **Type A**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **Type CNAME**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
5. Buka dashboard tempat Anda membeli domain > menu **DNS Management** > tambahkan 2 baris record di atas.
6. Kembali ke Vercel dan klik tombol **Refresh**. Status akan berubah menjadi centang hijau **Valid Configuration** dan HTTPS aktif otomatis!

---

## 📌 Checklist & Tips Penting untuk Proyek Ini

- [x] **File Utama**: Pastikan [index.html](file:///d:/coki/projects/Android/Projects/WorkProject/portofolio/index.html) berada langsung di folder terluar (root).
- [x] **Aset Relatif**: Semua tautan file gambar (`assets/images/...`) dan CV (`assets/cv/...`) sudah menggunakan path relatif sehingga tidak akan rusak di server publik.
- [x] **Download CV**: File CV PDF (`assets/cv/CV_Richard_Mobile_IoT_Software_Engineer.pdf`) dapat langsung diunduh pengunjung tanpa kendala.
- [x] **Update Konten**: Setiap kali Anda mengedit teks atau menambah proyek di file `index.html` atau `app.js`, cukup jalankan:
  ```powershell
  git add .
  git commit -m "update: refresh portfolio content"
  git push
  ```
  Vercel akan otomatis melakukan rebuild dan menayangkan perubahannya dalam waktu ~15 detik!
