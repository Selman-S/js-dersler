// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function operate(operator, value1, value2) {
  // Hangi işlemi yapacağımızı belirlemek için bir switch yapısı kullanın
  switch (operator) {
    case '+':
      // Değerleri topla
      return value1 + value2;
    case '-':
      // Değerleri çıkar
      return value1 - value2;
    case '*':
      // Değerleri çarp
      return value1 * value2;
    case '/':
      // Değerleri böl
      return value1 / value2;
    default:
      // Geçersiz bir operatör sağlanırsa, NaN döndür
      return NaN;
  }
}

console.log(operate('+', 4, 7)); // çıktı: 11
console.log(operate('-', 15, 18)); // çıktı: -3
console.log(operate('*', 5, 5)); // çıktı: 25
console.log(operate('/', 49, 7)); // çıktı: 7

