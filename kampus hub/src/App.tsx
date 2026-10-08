import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import { dataMahasiswa, dataPengumuman } from "./data";
import type { Mahasiswa } from "./data";

function Header() {
  return (
    <header>
      <div className="heading">
        <h1>Kampus Hub</h1>
        <h2>Papan Pengumuman Universitas Wahidiyah</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Pengumuman</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Pengumuman() {
  const [judul, setJudul] = useState("");

  const kunci = judul.trim().toLowerCase();
  const hasil = dataPengumuman.filter((p) =>
    p.judul.toLowerCase().includes(kunci),
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section>
      <h1>Pengumuman Terbaru</h1>
      <form className="search-box" onSubmit={handleSubmit}>
        <label htmlFor="cari">Cari judul: </label>
        <input
          type="text"
          id="cari"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />{" "}
        <button type="submit">Cari</button>
      </form>

      {hasil.length === 0 ? (
        <p className="empty-state">Tidak ada pengumuman yang cocok.</p>
      ) : (
        hasil.map((p) => (
          <article key={p.id}>
            <h2>{p.judul}</h2>
            <p>{p.isi}</p>
          </article>
        ))
      )}
    </section>
  );
}

function CariMahasiswa() {
  const [kataKunci, setKataKunci] = useState("");
  const [terpilih, setTerpilih] = useState<Mahasiswa | null>(null);

  const kunci = kataKunci.trim().toLowerCase();
  const hasil =
    kunci === ""
      ? []
      : dataMahasiswa.filter((m) => m.nama.toLowerCase().includes(kunci));

  function pilih(m: Mahasiswa) {
    setTerpilih(m);
    setKataKunci("");
  }

  return (
    <div className="mahasiswa-section">
      <h2>Nilai Mahasiswa</h2>
      <p className="search-box">
        <label htmlFor="cariMahasiswa">Cari nama mahasiswa:</label>
        <br />
        <input
          type="text"
          id="cariMahasiswa"
          placeholder="Ketik nama mahasiswa..."
          autoComplete="off"
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
        />
      </p>

      {kunci !== "" && (
        <ul className="hasil-pencarian">
          {hasil.length === 0 ? (
            <li className="empty-state">Tidak ada mahasiswa yang cocok.</li>
          ) : (
            hasil.map((m) => (
              <li key={m.nim} onClick={() => pilih(m)}>
                {m.nama} - {m.nilai}
              </li>
            ))
          )}
        </ul>
      )}

      {terpilih && (
        <div className="detail-card">
          <h3>{terpilih.nama}</h3>
          <dl>
            <dt>NIM</dt>
            <dd>{terpilih.nim}</dd>
            <dt>Program Studi</dt>
            <dd>{terpilih.prodi}</dd>
            <dt>Nilai</dt>
            <dd>{terpilih.nilai}</dd>
          </dl>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Kampus Hub. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Pengumuman />
        <CariMahasiswa />
        <h2>Tentang Kami</h2>
        <p>
          Kampus Hub adalah platform pengumuman resmi Universitas Wahidiyah yang
          menyediakan informasi terbaru bagi mahasiswa dan staf.
        </p>
      </main>
      <Footer />
    </>
  );
}