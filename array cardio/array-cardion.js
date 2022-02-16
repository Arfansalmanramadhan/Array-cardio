// Memahami array
const penemu = [
  { pertama: "Albert", terakhir: "Einstein", tahun: 1879, berlalu: 1955 },
  { pertama: "Isaac", terakhir: "Newton", tahun: 1643, berlalu: 1727 },
  { pertama: "Galileo", terakhir: "Galilei", tahun: 1564, berlalu: 1642 },
  { pertama: "Marie", terakhir: "Curie", tahun: 1867, berlalu: 1934 },
  { pertama: "Johannes", terakhir: "Kepler", tahun: 1571, berlalu: 1630 },
  { pertama: "Nicolaus", terakhir: "Copernicus", tahun: 1473, berlalu: 1543 },
  { pertama: "Max", terakhir: "Planck", tahun: 1858, berlalu: 1947 },
  { pertama: "Katherine", terakhir: "Blodgett", tahun: 1898, berlalu: 1979 },
  { pertama: "Ada", terakhir: "Lovelace", tahun: 1815, berlalu: 1852 },
  { pertama: "Sarah E.", terakhir: "Goode", tahun: 1855, berlalu: 1905 },
  { pertama: "Lise", terakhir: "Meitner", tahun: 1878, berlalu: 1968 },
  { pertama: "Hanna", terakhir: "Hammarström", tahun: 1829, berlalu: 1909 },
];

const rakyat = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const rakyat1 = [
  { name: "Wes", tahun: 1988 },
  { name: "Kait", tahun: 1986 },
  { name: "Irv", tahun: 1970 },
  { name: "Lux", tahun: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Array.prototype.filter()
// 1. Mengembalikan array baru yang bersis semua elemen array pemanggil yang  mengembalikan data yang di inginkan
const depan = penemu.filter((a) => a.tahun >= 1500 && a.tahun < 1600);
console.table(depan);
// Array.prototype.map()
// 2. Mengembalikan aaray baru yang berisi hasil pemanggilan fungsi pada setiap elemen dalam array ini
const namaLengkap = penemu.map((a) => `${a.pertama} ${a.terakhir}`);
console.log(namaLengkap);
// Array.prototype.sort()
// 3. Mengurutkan elemen array dan mengembalikan array
// const dipesan = penemu.sort((a, b) => {
//   if (a.tahun > b.tahun) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const dipesan = penemu.sort((a, b) => (a.tahun > b.tahun ? 1 : -1));
console.table(dipesan);
// Array.prototype.reduce()
// 4. Terapkan fungsi terhadap akumulator dan setiap nilai array (dari kiri ke kanan) untuk menguranginya menjadi satu nilai.
const totalTahun = penemu.reduce((total, penemuu) => {
  return total + (penemuu.berlalu - penemuu.tahun);
}, 0);
console.log(totalTahun);
// 5. Urutkan penemu berdasarkan tahun hidup
const tertua = penemu.sort((a, b) => {
  const penemuTerakhir = a.berlalu - a.tahun;
  const penemuBerikut = b.berlalu - b.tahun;
  return penemuTerakhir > penemuBerikut ? -1 : 1;
});
console.table(tertua);
// 6. buat daftar Boulevards di Paris yang berisi 'de' di mana saja dalam namanya
// 7. urutkan Latihan
// Urutkan orang menurut abjad dengan nama belakang
const alpha = rakyat.sort((yangTerakhir, yangBetikutnya) => {
  const [aTerakhir, aPertama] = yangTerakhir.split(", ");
  const [bTerakhir, bPertama] = yangBetikutnya.split(", ");
  // if (aTerakhir > bTerakhir) {
  //   return 1;
  // } else {
  //   return -1;
  // }
  return aTerakhir > bTerakhir ? 1 : -1;
});
console.log(alpha);
// 8. Kurangi Latihan
// Jumlahkan instance dari masing-masing ini
const data = ["mobil", "mobil", "truk", "truk", "sepeda", "berjalan", "mobil", "van", "sepeda", "berjalan", "mobil", "van", "mobil ", "truk", "tongkat pogo"];
const angkutan = data.reduce((objec, item) => {
  if (!objec[item]) {
    objec[item] = 0;
  }
  objec[item]++;
  return objec;
}, {});
console.log(angkutan);
// Array.prototype.some()
// 9. Metode some() ini menguji apakah setidaknya satu elemen dalam array lolos dari pengujian yang diterapkan oleh fungsi yang disediakan.
// const dewasa = rakyat1.some((orang) => {
//   const tahunSekarang = new Date().getFullYear();
//   if (tahunSekarang - orang.tahun >= 19) {
//     return true;
//   }
// });

const dewasa = rakyat1.some((orang) => ((new Date()).getFullYear()) - orang.tahun >= 19);

console.log(dewasa);
// Array.prototype.every()
// 10. Metode every()ini menguji apakah semua elemen dalam array lulus pengujian yang diterapkan oleh fungsi yang disediakan.
const dewasaa = rakyat1.every((orang) => ((new Date()).getFullYear()) - orang.tahun >= 19);
console.log(dewasaa);
// 11. Array.prototype.find()
//  Metode find()mengembalikan nilai elemen pertama dalam array yang disediakan yang memenuhi fungsi pengujian yang disediakan
const komentar = comments.find(komentar => komentar.id === 823423)
console.log(komentar);
// 12. Array.prototype.findIndex()
// Metode findIndex()mengembalikan indeks elemen pertama dalam array yang memenuhi fungsi pengujian yang disediakan .
const komentarr = comments.findIndex(komentar => komentar.id === 823423)
console.log(komentarr);