import { dataMahasiswa } from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Kampus Hub</h1>
      <p>Daftar nilai mahasiswa</p>
      <ul id="nilaiMahasiswa">
        {dataMahasiswa.map((mhs, index) => (
          <li key={mhs.nama}>
            {index + 1}. {mhs.nama} - {mhs.nilai}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
