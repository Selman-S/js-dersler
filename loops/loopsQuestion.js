// Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?

// for (let i = 1000; i < 2000; i++) {

//   if (i % 13 == 3) {
//     console.log(i)
//   }

// }

// Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?

// let sayac = 0
// let sum = 0
// while (sayac < 5) {
//   const sayi = +prompt('bir sayı giriniz')

//   sum += sayi

//   sayac++
// }

// console.log(sum / sayac)

// Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?

// let sum = 0
// let flag = true

// while (flag) {
//   const sayi = +prompt('bir sayı giriniz')

//   if (sayi < 0) {
//     flag = false
//   } else {
//     sum += sayi
//   }
// }

// console.log(sum)

// Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else {
//     console.log(i)
//   }
// }

// Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

// let sayi = 56465432465
// let basamak = 0

// while (true) {
//   sayi = Math.floor(sayi / 10)

//   basamak++
//   if (sayi == 0) {
//     break
//   }
// }
// console.log(basamak)

// Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let result = ''
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    result += '* '
  }

  result += '\n'
}
console.log(result)

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?

// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO

// soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?

//    O
//   OOO
//  OOOOO
// OOOOOOO
