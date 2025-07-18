//Task

// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)

//Solution

function sumDigits(number) {
    const arr = Math.abs(number).toString().split('')
    return arr.reduce((acc, el) => acc + el * 1, 0)
}
//Solution 2

//const sumDigits = (number) => Math.abs(number).toString().split('').reduce((acc, el) => acc + el * 1, 0)
