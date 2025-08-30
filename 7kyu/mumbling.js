//Task

// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution

// function accum(s) {
//     const arr = s.toLowerCase().split('').map((element, index) => element.repeat(index + 1)
//     ).map((value)=>value[0].toUpperCase() + value.slice(1)).join('-')
//
//     return arr;
// }

//Solution 2

const accum = (s) => s.toLowerCase().split('')
    .map((element, index) => element.repeat(index + 1))
    .map((value)=>value[0].toUpperCase() + value.slice(1)).join('-')