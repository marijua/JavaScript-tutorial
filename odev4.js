// Küçüktür işaret : <
// Büyüktür İşareti : >


let rastgeleSayi = (Math.random() * 99)+10 let rastgeleSayiDone = Math.floor(rastgeleSayi); const tahminiSayi = parseInt(prompt("Piyango Oynamak için bir sayı yazınız","10")); let rastgeleBirlerBasamagi  = rastgeleSayiDone % 10; let rastgeleOnlarBasamagi = rastgeleSayiDone / 10; let tahminiBirlerBasamagi = tahminiSayi % 10; let tahminiOnlarBasamagi = tahminiSayi / 10; console.log(`Üretilen Sayı : ${rastgeleSayiDone} ve tahmin edilen sayı : ${tahminiSayi}`); if(rastgeleSayiDone === tahminiSayi) { console.log("Tebrikler 10000 TL kazandınız!"); }else if (rastgeleBirlerBasamagi === tahminiOnlarBasamagi && rastgeleOnlarBasamagi === tahminiBirlerBasamagi) { console.log("Tebrikler 5000 TL kazandınız!"); }else if (rastgeleOnlarBasamagi === tahminiOnlarBasamagi || rastgeleBirlerBasamagi === tahminiBirlerBasamagi) { console.log("Tebrikler 1000 TL kazandınız!") }else { console.log("Ne yazıkki hiçbirşey kazanamadınız"); }
