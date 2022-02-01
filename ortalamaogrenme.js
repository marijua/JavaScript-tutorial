// Küçüktür işaret : <
// Büyüktür İşareti : >

 const isim = prompt("İsminiz Nedir ?");

 let sayi1 = parseInt(prompt(`${isim} isimli öğencinin ilk notu`));
 let sayi2 = parseInt(prompt(`${isim} isimli öğencinin ikinci notu`));
 let sayi3 = parseInt(prompt(`${isim} isimli öğencinin üçüncü notu`));

let ortalama = (sayi1 + sayi2 + sayi3) / 3;

console.log(`${isim} isimli öğrencimizin ortalaması : ${ortalama}`)
