//Task

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
//     All inputs will be valid.

//Solution

function digits(n) {
    return Math.abs(n).toString().split('').length
}

//Solution 2
//const digits = (n) => Math.abs(n).toString().split('').length

//const digits = (n) => Math.abs(n).toString().length