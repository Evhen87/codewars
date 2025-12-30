//Task

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
//
// The result should also be ordered from highest to lowest.
//
//     Examples:
//
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []

//Solution

function twoHighest(arr) {
    if (arr.length <= 1 ) return arr

    const twoHighestValues = []

    let maxValue = Math.max(...arr)
    twoHighestValues.push(maxValue)
    let filteredArr = arr.filter(el => el !== maxValue)

    maxValue = Math.max(...filteredArr)
    twoHighestValues.push(maxValue)

    return twoHighestValues
}
