// Küçüktür işaret : <
// Büyüktür İşareti : >

 const isim = prompt("İsminiz Nedir ?");

 let sagKenar = parseInt(prompt(`${isim} üçgenin sağ kenarının uzunluğu nedir`));
 let solKenar = parseInt(prompt(`${isim} üçgenin sol kenarının uzunluğu nedir`));
 let altKenar = parseInt(prompt(`${isim} üçgenin alt kenarının uzunluğu nedir`));

if(sagKenar === solKenar === altKenar)
{
  console.log(`${isim} bu bir eşkenar üçgendir`);
}else if(sagKenar === solKenar && sagKenar !== altKenar)
{
  console.log(`${isim} bu bir ikizkenar üçgen`);
}else
{
  console.log(`${isim} bu bir çeşitkenar üçgen`);
}
