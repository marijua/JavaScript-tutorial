// Küçüktür işaret : <
// Büyüktür İşareti : >

let islem = prompt("Yapmak istediğiniz işlem : ");

if (islem == 'Çarpma' || islem ==  'çarpma' || islem == 'x' || islem == '*')
{
  let sayi1 = prompt("Sayı 1");
  let sayi2 = prompt("Sayı 2");
  let yeniSayi1 = parseInt(sayi1);
  let yeniSayi2 = parseInt(sayi2);
  let carpim = yeniSayi1 * yeniSayi2;
  console.log(`${yeniSayi1} Sayısı ile ${yeniSayi2} Sayısının ${islem} işleminden sonraki sonuç = ${carpim}`);
}else if(islem == 'Toplama' || islem == 'toplama' || islem == '+')
{
  let sayi1 = prompt("Sayı 1");
  let sayi2 = prompt("Sayı 2");
  let yeniSayi1 = parseInt(sayi1);
  let yeniSayi2 = parseInt(sayi2);
  let toplama = yeniSayi1 + yeniSayi2;
  console.log(`${yeniSayi1} Sayısı ile ${yeniSayi2} Sayısının ${islem} işleminden sonraki sonuç = ${toplama}`);
}else if (islem == 'Çıkarma' || islem == 'çıkarma' || islem == '-')
{
  let sayi1 = prompt("Sayı 1");
  let sayi2 = prompt("Sayı 2");
  let yeniSayi1 = parseInt(sayi1);
  let yeniSayi2 = parseInt(sayi2);
  let cikarma = yeniSayi1 - yeniSayi2;
  console.log(`${yeniSayi1} Sayısı ile ${yeniSayi2} Sayısının ${islem} işleminden sonraki sonuç = ${cikarma}`);
}else if (islem == 'Bölme' || islem == 'bölme' || islem ==  '/')
{
  let sayi1 = prompt("Sayı 1");
  let sayi2 = prompt("Sayı 2");
  let yeniSayi1 = parseInt(sayi1);
  let yeniSayi2 = parseInt(sayi2);
  let bolme = yeniSayi1 / yeniSayi2;
  console.log(`${yeniSayi1} Sayısı ile ${yeniSayi2} Sayısının ${islem} işleminden sonraki sonuç = ${bolme}`);
}else
{
  console.log(`'${islem}' Hatalı bir değer`);
}
