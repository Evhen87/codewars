//Task

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
//
//     If n == 0 return an empty sequence []

//Solution

// function first(arr, n) {
//     if (n === undefined) {
//         return [arr[0]]
//     }
//     arr.splice(n)
//     return arr;
// }

//Best practice
const first = (arr, n = 1) => arr.slice(0, n)