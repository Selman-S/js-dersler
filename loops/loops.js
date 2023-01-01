// Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?

// for (let i = 1000; i <= 2000; i++) {
//   if (i % 13 === 3) {
//     console.log(`${i} `);
//   }
// }

// Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?

// let toplam = 0;
// for (let i = 0; i < 5; i++) {
//   let sayi = Number(prompt("Sayı giriniz"));
//   toplam +=sayi

// }
// console.log(toplam / 5);

// Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?

// let sum = 0
// while (true) {
//   let number = parseInt(prompt('Lütfen bir sayı girin: '))
//   if (number < 0) {
//     break
//   }
//   sum += number
// }
// console.log(sum)

// let flag = true
// let sum = 0
// do {
//   let number = parseInt(prompt('Lütfen bir sayı girin: '))
//   if (number < 0) {
//     flag = false
//   }
//   sum += number
// } while (flag)
// console.log(sum)

// Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// for (let i = 1; i <= 100; i++) {
//   // 1'den 100'e kadar döngü
//   if (i % 3 === 0 && i % 5 === 0) {
//     // eğer i hem 3'e hem de 5'e tam bölünürse
//     console.log('FizzBuzz') // "FizzBuzz" yazdır
//   } else if (i % 3 === 0) {
//     // eğer i sadece 3'e tam bölünürse
//     console.log('Fizz') // "Fizz" yazdır
//   } else if (i % 5 === 0) {
//     // eğer i sadece 5'e tam bölünürse
//     console.log('Buzz') // "Buzz" yazdır
//   } else {
//     // i hiçbirine tam bölünmezse
//     console.log(i) // sayıyı yazdır
//   }
// }

// Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

// let num = 131231243543
// let count = 0
// while (num != 0) {
//   num = Math.floor(num / 10)
//   count++
// }
// console.log(count)

// Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

// let n = Number(prompt('Sayı giriniz'))

// let n1 = 0
// let n2 = 1
// let count = 2
// let n3
// let result = ''
// result += n1
// result += ' ' + n2
// for (let i = 2; i < n; i++) {
//   n3 = n1 + n2
//   result += ' ' + n3
//   n1 = n2
//   n2 = n3
//   count++
// }

// console.log(result)

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let result = ''
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     result += '* '
//   }
//   result += '\n'
// }

// console.log(result)

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO

// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += 'O'
//   }
//   str += '\n'
// }

// console.log(str)

// soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//    O
//   OOO
//  OOOOO
// OOOOOOO

// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i + j >= 8) {
//       str += 'O'
//     } else {
//       str += ' '
//     }
//   }
//   str += '\n'
// }

// console.log(str)
