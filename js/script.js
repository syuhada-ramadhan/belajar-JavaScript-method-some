// array hewan
const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing", "Sapi"];

// function untuk mencari hewan
function cariHewan(arrayHewan, namaHewan) {
  return arrayHewan.some((elemen) => namaHewan === elemen);
}

// panggil function cariHewan() dan masukan hasil pencarian ke variabel hasil
const hasil = cariHewan(hewan, "Kambing");

// cetak hasil pencarian
console.log(hasil);
