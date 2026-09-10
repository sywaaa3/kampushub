const nilaiMahasiswa = document.getElementById('nilaiMahasiswa');

dataMahasiswa.forEach((mhs, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1}. ${mhs.nama} - ${mhs.nilai}`;
  nilaiMahasiswa.appendChild(li);
  console.log(`${index + 1}. ${mhs.nama} - ${mhs.nilai}`);
});