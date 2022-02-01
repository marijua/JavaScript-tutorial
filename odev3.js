let yil = prompt("Kontrol ettirmek istediğiniz yıl : ","2022");
// 400 ile bölümü 0  || 4 ile bölümü 0 && 100 ile bölümü 0 olmamalı
let artikMi = ((yil % 400 == 0) || yil % 4 == 0 && yil % 100 != 0);
console.log(`${yil} Yılı Artık Yıl mı ? = ${artikMi}`);
