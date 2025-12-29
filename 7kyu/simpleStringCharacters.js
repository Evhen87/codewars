//Task

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
//
//     The order is: uppercase letters, lowercase letters, numbers and special characters.
//
// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.
//
//     Good luck!

//Solution

function solve(s){
    const arr = s.split('')
    const result = [0, 0, 0, 0]

    for (let i = 0; i < arr.length; i++ ) {
        if (typeof +arr[i] === 'number' && !isNaN(+arr[i])) {
            result[2] = result[2] + 1
        } else
        if (arr[i].toLowerCase() !== arr[i]) {
            result[0] = result[0] + 1
        } else if (arr[i].toUpperCase() !== arr[i]) {
            result[1] = result[1] + 1
        } else {result[3] = result[3] + 1}
    }

    return result
}