// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


// my solution
// function combine() {
//   const result = {};
//   for (let i = 0; i < arguments.length; i++) {
//     for (const key in arguments[i]) {
//       if (result.hasOwnProperty(key)) {
//         result[key] += arguments[i][key];
//       } else {
//         result[key] = arguments[i][key];
//       }
//     }
//   }
//   return result;
// }


// console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 })); // { a: 13, b: 20, c: 36, d: 3 }

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
let sumObj = {}
for (let keysa in objA){
    if(!sumObj[keysa]){
        sumObj[keysa] = objA[keysa]
        console.log('aa')
    }

}
for (let keysb in objB){
     if(!sumObj[keysb]){
        sumObj[keysb] = objB[keysb]
         console.log('bb',objB[keysb])
    }else {
      sumObj[keysb] += objB[keysb]   
         console.log('++')
    }
}

console.log(sumObj)