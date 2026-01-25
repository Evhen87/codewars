//Task

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
//
//     For example:
//
//     solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

//Solution

function solve(arr){
    const sortArr = arr.sort((a, b) => a - b)

    const resArr = []

    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 === 0) {
            resArr.push(sortArr[sortArr.length - 1 - i / 2])
        } else {resArr.push(sortArr[Math.round(i / 2) - 1])}
    }

    return resArr
}