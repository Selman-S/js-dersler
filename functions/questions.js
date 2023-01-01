// 5- Belirli bir string ifadenin içindeki harfleri alfabetik sıraya göre sıralayan fonksiyonu yazınız?

// function sortAlphabetically(string) {
//   let sorted = string.split('').sort().join('')
//   return sorted
// }

// console.log(sortAlphabetically('hello'))

// 6- Belirli bir string ifadenin içindeki harfleri tekrar sayan fonksiyonu yazınız?

// function countLetters(string) {
//   let letterCount = {}
//   for (let i = 0; i < string.length; i++) {
//     if (letterCount[string[i]]) {
//       letterCount[string[i]]++
//     } else {
//       letterCount[string[i]] = 1
//     }
//   }
//   return letterCount
// }

// console.log(countLetters('hello'))

// 7- Belirli bir string ifadenin içindeki kelimeleri sayan fonksiyonu yazınız?

// function countWords(string) {
//   let wordCount = {}
//   let words = string.split(' ')
//   for (let i = 0; i < words.length; i++) {
//     if (wordCount[words[i]]) {
//       wordCount[words[i]]++
//     } else {
//       wordCount[words[i]] = 1
//     }
//   }
//   return wordCount
// }

// console.log(countWords('hello world hello'))

// 8- Belirli bir string ifadenin içindeki kelimeleri alfabetik sıraya göre sıralayan fonksiyonu yazınız?

// function sortWordsAlphabetically(string) {
//   let words = string.split(' ')
//   let sorted = words.sort()
//   return sorted
// }

// console.log(sortWordsAlphabetically('selami nerdesin sen'))

// 9- Belirli bir string ifadenin içindeki kelimelerin harf sayılarını bulan fonksiyonu yazınız?

// function countLettersInWords(string) {
//   let words = string.split(' ')
//   let letterCount = {}
//   for (let i = 0; i < words.length; i++) {
//     if (letterCount[words[i]]) {
//       letterCount[words[i]]++
//     } else {
//       letterCount[words[i]] = 1
//     }
//   }
//   return letterCount
// }

// console.log(countLettersInWords('hello world hello'))

// 10- Belirli bir string ifadenin içindeki kelimelerin harf sayılarını alfabetik sıraya göre sıralayan fonksiyonu yazınız?

// function countLettersInWordsAlphabetically(string) {
//   let words = string.split(' ')
//   let letterCount = {}
//   for (let i = 0; i < words.length; i++) {
//     if (letterCount[words[i]]) {
//       letterCount[words[i]]++
//     } else {
//       letterCount[words[i]] = 1
//     }
//   }
//   let sorted = Object.keys(letterCount).sort()
//   return sorted
// }

// console.log(countLettersInWordsAlphabetically('hello world hello'))

// 11- Belirli bir string ifadenin içindeki kelimelerin harf sayılarını tekrar sayan fonksiyonu yazınız?

// function countLettersInWords(string) {
//   let words = string.split(' ')
//   let letterCount = {}
//   for (let i = 0; i < words.length; i++) {
//     if (letterCount[words[i]]) {
//       letterCount[words[i]]++
//     } else {
//       letterCount[words[i]] = 1
//     }
//   }
//   return letterCount
// }

// console.log(countLettersInWords('hello world hello'))

// 3- Belirli bir sayının fibonacci serisindeki değerini bulan fonksiyonu yazınız?

// function fibonacci(number) {
//   if (number <= 1) {
//     return 1
//   }
//   return fibonacci(number - 1) + fibonacci(number - 2)
// }

// console.log(fibonacci(12))

// 5- Belirli bir sayının asal çarpanlarını bulan fonksiyonu yazınız?

// function primeFactors(number) {
//   let factors = [],
//     divisor = 2

//   while (number > 2) {
//     if (number % divisor === 0) {
//       factors.push(divisor)
//       number = number / divisor
//     } else {
//       divisor++
//     }
//   }
//   return factors
// }

// console.log(primeFactors(69))

// 6- Belirli bir sayının en büyük ortak bölenini bulan fonksiyonu yazınız?

// function greatestCommonDivisor(number1, number2) {
//   let divisor = 2,
//     greatestDivisor = 1

//   if (number1 < 2 || number2 < 2) {
//     return 1
//   }

//   while (number1 >= divisor && number2 >= divisor) {
//     if (number1 % divisor === 0 && number2 % divisor === 0) {
//       greatestDivisor = divisor
//     }
//     divisor++
//   }
//   return greatestDivisor
// }

// console.log(greatestCommonDivisor(14, 21))

// 7- Belirli bir sayının en küçük ortak katını bulan fonksiyonu yazınız?

// function leastCommonMultiple(number1, number2) {
//   let multiple = 2,
//     lcm = 1

//   if (number1 > number2) {
//     multiple = number1
//   } else {
//     multiple = number2
//   }

//   while (true) {
//     if (multiple % number1 === 0 && multiple % number2 === 0) {
//       lcm = multiple
//       break
//     }
//     multiple++
//   }
//   return lcm
// }

// console.log(leastCommonMultiple(9, 6))

// 8- Belirli bir sayının tam bölenlerini bulan fonksiyonu yazınız?

// function findDivisors(number) {
//   let divisors = []

//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i)
//     }
//   }
//   return divisors
// }

// console.log(findDivisors(100))

// console.log(sumOfDivisors(100))

// 10- Belirli bir sayının mükemmel olup olmadığını bulan fonksiyonu yazınız?

// function isPerfect(number) {
//   let sum = 0

//   for (let i = 0; i < number; i++) {
//     if (number % i === 0) {
//       sum += i
//     }
//   }
//   return sum === number
// }

// console.log(isPerfect(6))

// 11- Belirli bir sayının Armstrong sayısı olup olmadığını bulan fonksiyonu yazınız?

// function isArmstrong(number) {
//   let sum = 0,
//     temp = number,
//     remainder

//   while (temp > 0) {
//     remainder = temp % 10
//     sum += remainder * remainder * remainder
//     temp = parseInt(temp / 10)
//   }
//   return sum === number
// }

// console.log(isArmstrong(153))

// 12- java script ile bir yazı içindeki en uzun kelimeyi yazdıran fonksiyonu yazar mısın

// function findLongestWord(string) {
//   // Dizgeyi boşluklara göre parçalara ayırır
//   var words = string.split(' ');

//   // En uzun kelimeyi saklamak için başlangıç değeri olarak ilk kelimeyi kullanır
//   var longestWord = words[0];

//   // Her kelime için döngü oluşturur
//   for (var i = 0; i < words.length; i++) {
//     // Şu anda incelenen kelime, en uzun kelimeye göre daha uzunsa
//     if (words[i].length > longestWord.length) {
//       // En uzun kelimeyi günceller
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// var string = "veri bilimi makine öğrenimi";
// var longestWord = findLongestWord(string);
// console.log(longestWord);
