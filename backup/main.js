const inputCari = document.getElementById('cariMahasiswa');
const hasilPencarian = document.getElementById('hasilPencarian');
const detailMahasiswa = document.getElementById('detailMahasiswa');

function sembunyikanList() {
  hasilPencarian.innerHTML = '';
  hasilPencarian.style.display = 'none';
}

function renderList(daftar) {
  hasilPencarian.innerHTML = '';

  if (daftar.length === 0) {
    hasilPencarian.style.display = 'block';
    const kosong = document.createElement('li');
    kosong.className = 'empty-state';
    kosong.textContent = 'Tidak ada mahasiswa yang cocok.';
    hasilPencarian.appendChild(kosong);
    return;
  }

  hasilPencarian.style.display = 'block';

  daftar.forEach((mhs) => {
    const li = document.createElement('li');
    li.textContent = `${mhs.nama} - ${mhs.nilai}`;
    li.dataset.nim = mhs.nim;

    li.addEventListener('click', () => {
      tampilkanDetail(mhs);
      inputCari.value = '';
      sembunyikanList();
    });

    hasilPencarian.appendChild(li);
  });
}

function tampilkanDetail(mhs) {
  detailMahasiswa.innerHTML = `
    <h3>${mhs.nama}</h3>
    <dl>
      <dt>NIM</dt>
      <dd>${mhs.nim ?? '-'}</dd>
      <dt>Program Studi</dt>
      <dd>${mhs.prodi ?? '-'}</dd>
      <dt>Nilai</dt>
      <dd>${mhs.nilai}</dd>
    </dl>
  `;
  detailMahasiswa.style.display = 'block';
}

function cariMahasiswa(kataKunci) {
  const kunci = kataKunci.trim().toLowerCase();
  if (kunci === '') {
    return [];
  }
  return dataMahasiswa.filter((mhs) =>
    mhs.nama.toLowerCase().includes(kunci)
  );
}

inputCari.addEventListener('input', (e) => {
  const kunci = e.target.value.trim();

  if (kunci === '') {
    sembunyikanList();
    return;
  }

  renderList(cariMahasiswa(kunci));
});

// Tampilan awal: list disembunyikan sampai user mulai mengetik
sembunyikanList();