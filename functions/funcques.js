// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
// console.log(calFahrenheit(30)) // output: 86

// function calFahrenheit(cel) {
//   const fahr = cel * (9 / 5) + 32
//   return cel + ' derece ' + fahr + " fahrenheit'a eşittir"
// }

// console.log(calFahrenheit(-1))

// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

// let str = 'Selamun Aleykum'

// function reverseString(str) {
//   let str2 = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i]
//   }
//   return str2
// }

// console.log(reverseString('hello world'))

// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)
// const string = 'seles'
// console.log(isPalindrome(string)) // output: true

// const string = 'aile'

// function reverseString(str) {
//   let str2 = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i]
//   }
//   return str2
// }

// const isPalindrome = function (string) {
//   const reversed = reverseString(string) // 'aileelia'
//   console.log(reversed)

//   return reversed == string
//     ? `${string} bir palindrome texttir.`
//     : `${string} bir palindrome text değildir.`
// }

// console.log(isPalindrome(string))

// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo

// function findVowels(str) {
//   let vowels = ''

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == 'a' ||
//       str[i] == 'e' ||
//       str[i] == 'ı' ||
//       str[i] == 'i' ||
//       str[i] == 'o' ||
//       str[i] == 'ö' ||
//       str[i] == 'u' ||
//       str[i] == 'ü'
//     ) {
//       vowels += str[i]
//     }
//   }

//   return vowels
// }

// console.log(findVowels('hello world'))

// 5- Belirli bir sayının faktöriyelini bulan fonksiyonu yazınız?

// function factorial(number) {
//   if (number === 1) {
//     return 1
//   }
//   return number * factorial(number - 1)
// }

// console.log(factorial(5))

// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// function sumOfDivisors(number) {
//   let sum = 0

//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//       sum += i
//     }
//   }
//   return sum
// }

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false
//     }
//   }
//   return number > 1
// }

// console.log(isPrime(7))
