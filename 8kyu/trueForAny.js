//Task

// The task is to write a function that accepts two parameters: an array and a callback function (in Ruby: a block).
//
// The function should return true if the callback function / block returns true for any item in the array, otherwise return false.
//
//     The function should return false if the array is empty.

//Solution

// function any(arr, fun){
//     return arr.map(el => fun(el)).reduce((acc, el) => el === true ? el : acc, false)
// }

//Solution 2

const any = (arr, fun) => arr.map(el => fun(el)).reduce((acc, el) => el === true ? el : acc, false)