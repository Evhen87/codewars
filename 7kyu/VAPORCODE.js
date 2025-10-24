//Task

// ASC Week 1 Challenge 4 (Medium #1)
//
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
//
//     Note that spaces should be ignored in this case.

//Solution

// function vaporcode(string) {
//     return string.toUpperCase().split('').filter(el=> el !== ' ').join('')
// }

//Solution 2

const vaporcode = (string) => string.toUpperCase().split('').filter(el=> el !== ' ').join('')