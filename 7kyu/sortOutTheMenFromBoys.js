// Task
//
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

//Solution

function menFromBoys(arr){
    let oddArr = []
    let evenArr = []
    arr.map(el => (el % 2 === 0) ? evenArr.push(el) : oddArr.push(el))
    oddArr.sort((a, b) => b - a)
    evenArr.sort((a, b) => a - b)
    return [ ...evenArr, ...oddArr ].reduce((acc, el) => acc.includes(el) ? acc : [...acc, el], [])
}

