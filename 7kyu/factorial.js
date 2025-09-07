//Task

// Your task is to write function factorial.

//Solution

// function factorial(n){
//     if (n === 0) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

//Solution 2

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1)