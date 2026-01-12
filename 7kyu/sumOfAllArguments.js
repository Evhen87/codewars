//Task

// Write a function that finds the sum of all its arguments.
//
//     eg:
//
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

//Solution

// function sum(...args) {
//     return [...args].reduce((acc, el) => acc + el, 0)
// }

//Solution 2

const sum = (...args) => [...args].reduce((acc, el) => acc + el, 0)