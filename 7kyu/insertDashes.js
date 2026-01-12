//Task

// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.
//
//     Examples
// 454793 ---> "4547-9-3"
// 0 ---> "0"
// 1 ---> "1"
// 13579  ---> "1-3-5-7-9"
// 86420 ---> "86420"

//Solution

// function insertDash(num) {
//     const arr = num.toString().split('')
//     let res = arr[0]
//
//     for (let i = 1; i < arr.length; i++ ) {
//         if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
//             res += `-${arr[i]}`
//         } else {res += `${arr[i]}`}
//     }
//     return res
// }

//Solution 2

const insertDash = (num) => num.toString().split('')
    .reduce((acc, el, i, arr) => i !== 0 && el % 2 !== 0 && arr[i - 1] % 2 !== 0 ? acc + `-${el}` : acc + `${el}`, '')