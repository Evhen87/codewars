//Task

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
//
// The array will never be empty.

//Solution

// function average(scores) {
//     const totalScore = scores.reduce((acc, el) => acc + el, 0)
//     return Math.round(totalScore/scores.length)
// }

//Solution 2

const average = (scores) => Math.round(scores.reduce((acc, el) => acc + el, 0)/scores.length)
