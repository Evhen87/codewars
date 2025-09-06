//Task

//

//Solution

// function include(arr, item){
//     return arr.findIndex(el => el === item) !== -1
// }

//Solution 2

const include = (arr, item) => arr.findIndex(el => el === item) !== -1

//Best practice

// const include = (arr, item) => arr.includes(item);