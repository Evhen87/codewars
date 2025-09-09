// Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
//
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

//Solution

// function removeChar(str){
//     return str.split('').splice(1, str.length - 2).join('')
// }

//Solution 2

const removeChar = (str)=> str.split('').splice(1, str.length - 2).join('')

//Best practice



// const removeChar = str => str.slice(1,-1)
