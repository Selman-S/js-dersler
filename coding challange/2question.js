
// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
// Examples-->
// check([66, 101], 66) // output -->  true
// check([101, 45, 75, 105, 99, 107], 107) // output -->  true
// check(['t', 'e', 's', 't'], 'e') // output -->  true
// check(['what', 'a', 'great', 'kata'], 'kat') // output -->  false


function check(arr, val) {
  // Dizinin her elemanını döndür
  for (let i = 0; i < arr.length; i++) {
    // Şu anki elemanın val'e eşit olup olmadığını kontrol et
    if (arr[i] === val) {
      // Eğer eşitse, true döndür
      return true;
    }
  }
  // Hiçbir eşleşme bulunamazsa, false döndür
  return false;
}

console.log(check([66, 101], 66)); // çıktı: true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // çıktı: true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // çıktı: false
