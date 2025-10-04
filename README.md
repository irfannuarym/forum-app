# Proyek: Membangun Aplikasi React dengan Redux

Membuat aplikasi React bertemakan “Aplikasi Forum Diskusi” yang memanfaatkan API dari Dicoding Forum API.

### Kriteria Utama 1: Fungsionalitas Aplikasi
1. Terdapat cara untuk mendaftar akun.
2. Terdapat cara untuk login akun.
3. Menampilkan daftar thread.
4. Ketika item thread dipilih, menampilkan detail thread beserta komentar di dalamnya.
5. Pengguna dapat membuat thread.
6. Pengguna dapat membuat komentar di dalam sebuah thread.
7. Menampilkan Loading Indicator ketika memuat data dari API.

##### Catatan penting:
1. Perihal authorization dalam mengakses resource threads kami bebaskan. Anda boleh mengharuskan pengguna untuk login ataupun tidak ketika ingin melihat threads. Namun, dalam berinteraksi mengubah data, seperti membuat thread atau komentar, pengguna wajib terotentikasi.
2. Item thread pada halaman daftar thread yang ditampilkan harus mengandung informasi berikut ini.
   - Judul dari thread.
   - Potongan dari body thread (opsional).
   - Waktu pembuatan thread.
   - Jumlah komentar.
   - Informasi pembuat thread:
     - Nama
     - Avatar (opsional)
3. Halaman detail thread harus mengandung informasi berikut ini.
   - Judul dari thread.
   - Body dari thread.
   - Waktu pembuatan thread.
   - Informasi pembuat thread:
     - Nama
     - Avatar
   - Komentar pada thread tersebut. Minimal informasi yang harus ditampilkan adalah:
     - Konten dari komentar.
     - Waktu pembuatan komentar.
     - Informasi pembuat komentar:
       - Nama
       - Avatar (opsional)

### Kriteria Utama 2: Bugs Highlighting
1. Menggunakan ESLint pada source code aplikasi. Indikasinya adalah terdapat berkas konfigurasi ESLint pada proyek.
2. Menerapkan salah satu Code Convention berikut.
  - Dicoding Academy JavaScript Style Guide.
  - AirBnB JavaScript Style Guide.
  - Google JavaScript Style Guide.
  - StandardJS Style Guide.
3. Tidak ada indikasi error yang ditampilkan ESLint.
4. Menggunakan React Strict Mode.

### Kriteria Utama 3: Arsitektur Aplikasi
1. Hampir seluruh state aplikasi (terutama yang bersumber dari API) disimpan pada Redux Store. Form input atau controlled component diperbolehkan untuk mengelola state-nya sendiri.
2. Tidak ada pemanggilan REST API yang dilakukan di dalam lifecycle atau efek pada komponen.
3. Memisahkan kode UI dengan State di folder yang terpisah.
4. React component bersifat modular dan reusable.

### 🚀 Instalasi
1. Clone Repository
```bash
git clone https://github.com/irfannuarym/react-redux-app.git
cd react-redux-app
```
2. Install Dependencies
```bash
npm install
# atau
yarn install
```
3. Setup Environment Variables
Buat file .env di root folder:
```env
REACT_APP_API_URL=https://forum-api.dicoding.dev/v1
REACT_APP_ENV=development
```
4. Jalankan Aplikasi
```bash
npm run dev
# atau
yarn dev
```