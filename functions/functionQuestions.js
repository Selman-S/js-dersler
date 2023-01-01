// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

const calFahrenheit = cel => {
  return (cel * 9) / 5 + 32
}
console.log(calFahrenheit(30))

// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// const reverseString = function (string) {
//   let reverse = ''
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i]
//   }
//   return reverse
// }

// console.log(reverseString('hello world'))

// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)

// function isPalindrome(string) {
//   string = string.toLowerCase()
//   let reverse = ''
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i]
//   }
//

//   return string === reverse
// }

// const string = 'selles'
// console.log(isPalindrome(string))

// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

// function findVowels(string) {
//   let vowels = ''

//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === 'a' ||
//       string[i] === 'e' ||
//       string[i] === 'i' ||
//       string[i] === 'o' ||
//       string[i] === 'u' ||
//       string[i] === 'A' ||
//       string[i] === 'E' ||
//       string[i] === 'İ' ||
//       string[i] === 'O' ||
//       string[i] === 'U'
//     ) {
//       vowels += string[i]
//     }
//   }

//   return vowels
// }

// console.log(findVowels('Uzun bir yazı yazmak istiyorum.'))

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
