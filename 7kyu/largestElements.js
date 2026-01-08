//Task

// Write a program that outputs the top n elements from a list.
//
//     Example:
//
// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
//     ==> [6, 7]

//Solution

// function largest(n, array) {
//     array.sort((a, b) => a -b)
//     return array.slice(array.length - n);
// }

//Solution 2

const largest = (n, array) => array.sort((a, b) => a -b).slice(array.length - n)