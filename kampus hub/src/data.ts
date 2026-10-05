export interface Mahasiswa {
  nama: string;
  nilai: number;
  nim: string;
  prodi: string;
}

export interface Pengumuman {
  id: number;
  judul: string;
  isi: string;
}

export const dataMahasiswa: Mahasiswa[] = [
  { nama: "Nasywa Salsabila", nilai: 90, nim: "123456", prodi: "Teknik Informatika" },
  { nama: "Rizky Ramadhan", nilai: 80, nim: "123457", prodi: "Manajemen" },
  { nama: "Nur Wajid", nilai: 85, nim: "123458", prodi: "Akuntansi" },
  { nama: "Fufu Fafa", nilai: 75, nim: "123459", prodi: "Psikologi" },
  { nama: "Abdul Dayat", nilai: 95, nim: "123460", prodi: "Hukum" },
];

export const dataPengumuman: Pengumuman[] = [
  {
    id: 1,
    judul: "Administrasi Kampus",
    isi: "Mulai 12 September 2026, loket administrasi akademik melayani pukul 08.00–15.00 WIB (Senin–Jumat).",
  },
  {
    id: 2,
    judul: "Akademik",
    isi: "Perkuliahan semester ganjil 2026/2027 dimulai pada 15 September 2026. Pastikan semua mahasiswa telah melakukan registrasi.",
  },
  {
    id: 3,
    judul: "Layanan & Fasilitas",
    isi: "Jaringan WiFi di area Gedung Fakultas Teknik akan mengalami perbaikan pada 14 September 2026 pukul 09.00–12.00 WIB. Mohon maaf atas ketidaknyamanannya.",
  },
];