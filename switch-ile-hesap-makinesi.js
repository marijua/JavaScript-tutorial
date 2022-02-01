// Küçüktür işaret : <
// Büyüktür İşareti : >

let islem = prompt("Yapmak istediğiniz işlem : ");

switch(islem)
{
  case 'Çarpma' || 'çarpma' || '*' || 'çarpım' || 'Çarpma': let sayi1 = prompt("Sayı 1'i giriniz"); let sayi2 = prompt("Sayı 2'yi giriniz"); let yeniSayi1 = parseInt(sayi1); let yeniSayi2 = parseInt(sayi2); const carpim = yeniSayi1 * yeniSayi2; console.log(`${yeniSayi1} sayısının ${yeniSayi2} sayısı ile ${islem} isleminin sonucu = ${carpim}`); break; case 'Toplama' || 'toplama' || '+': let sayi3 = prompt("Sayı 1'i giriniz"); let sayi4 = prompt("Sayı 2'yi giriniz"); let yeniSayi3 = parseInt(sayi3); let yeniSayi4 = parseInt(sayi4); const toplam = yeniSayi3 + yeniSayi4; console.log(`${yeniSayi3} sayısının ${yeniSayi4} sayısı ile ${islem} isleminin sonucu = ${toplam}`); break; case 'Çıkarma' || 'çıkarma' || '-': let sayi5 = prompt("Sayi 1'i giriniz"); let sayi6 = prompt("Sayi 2'yi giriniz"); let yeniSayi5 = parseInt(sayi5); let yeniSayi6 = parseInt(sayi6); const cikarma = yeniSayi5 - yeniSayi6; console.log(`${yeniSayi5} sayısının ${yeniSayi6} sayısı ile ${islem} isleminin sonucu = ${cikarma}`); break; case 'Bölme' || 'bölme' || '/': let sayi7 = prompt("Sayi 1'i giriniz"); let sayi8 = prompt("Sayi 2'yi giriniz"); let yeniSayi7 = parseInt(sayi7); let yeniSayi8 = parseInt(sayi8); const bolme = yeniSayi7 / yeniSayi8; console.log(`${yeniSayi7} sayısının ${yeniSayi8} sayısı ile ${islem} isleminin sonucu = ${bolme}`); break;
}
