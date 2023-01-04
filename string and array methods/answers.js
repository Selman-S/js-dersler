

// 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın. Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"





function protectEmail(email) {
  // E-posta adresini "@" işaretine göre böl
  let [username, domain] = email.split('@');
  // Kullanıcı adının son üç karakterini "..." ile değiştir
  let hiddenUsername = username.slice(0, username.length - 3) + '...';
  // Gizlenmiş kullanıcı adı ve etki alanını birleştir ve yeni gizlenmiş e-posta adresini döndür
  return hiddenUsername + '@' + domain;
}

console.log(protectEmail("robin_singh@example.com"));  // Output: "robin_si...@example.com"

// 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3

function average(arr) {
  // Dizideki tüm elemanların toplamını hesapla
  let sum = 0;
   arr.forEach((a) =>sum += a);
  // Dizideki tüm elemanların sayısını hesapla
  let count = arr.length;
  // Ortalamayı hesapla ve döndür
  return sum / count;
}

console.log(average([1,2,3,4,5])); // Output: 3



// 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

 function descendingOrder(n){
  // 1. sayıyı stringe çevir
    let str = n.toString();
  // 2. stringi arraye çevir
    let arr = str.split('');
  // 3. arrayi sırala
    arr.sort();
    // 5. stringi ters çevir
    arr.reverse();
    // 4. arrayi stringe çevir
    let str2 = arr.join('');
  // 6. stringi sayıya çevir
    let num = parseInt(str2);
  // 7. sayıyı döndür

  // tüm işlemleri tek satırda yap
  // let num = parseInt(n.toString().split('').sort().reverse().join(''));
    return num;
}

console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321

// 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.

// Examples:
// Input: "day" Output: "d"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"

function removeVowels(str) {
  // 1. stringi arraye çevir
  // 2. arrayi filtrele
  // 3. arrayi stringe çevir
  return str.split('').filter((a) => !'aeiou'.includes(a)).join('');
}

console.log(removeVowels('day')); // d
console.log(removeVowels('apple')); // ppl
console.log(removeVowels('javascript')); // jvscrpt


// 5. Bir JavaScript dizisinde yinelenen değerleri bulan bir JavaScript programı yazın.

// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9

// çözüm
function findDuplicates(arr) {
  // 1. arrayi sırala
  let sortArr = arr.sort()
  // 2. arrayi filtrele
  let filt =sortArr.filter((a, i) => a === arr[i + 1])
  // 3. arrayi stringe çevir
  return filt.join(',');
  // return arr.sort().filter((a, i) => a === arr[i + 1]).join(',');
}

console.log(findDuplicates([1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10,11,11,12,43,12])); // 1,2,9





// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.

// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285

// çözüm
function sumOfSquares(arr) {
  // 1. arrayi karelerini al
  // 2. arrayi topla
  return arr.map((a) => a * a).reduce((a, b) => a + b);
}

console.log(sumOfSquares([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 285
