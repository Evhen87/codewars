//Task

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//Solution

// function reverse(str) {
//     return str.trim().split(' ').map((el, ind) => ind % 2 === 0 ? el : el.split('').reverse().join('')).join(' ')
// }

//Solution 2

const reverse = (str) => str.trim().split(' ')
    .map((el, ind) => ind % 2 === 0 ? el : el.split('').reverse().join('')).join(' ')