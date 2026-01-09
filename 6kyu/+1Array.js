//Task

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
//     If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
//
// Examples
// Valid arrays
//
//     [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
//     [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
//     [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
//     [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays
//
//     [] is invalid because it is empty
//     [1, -9] is invalid because -9 is not a non-negative integer
//     [1, 2, 33] is invalid because 33 is not a single-digit integer

//Solution

function upArray(arr){

    if (arr.length === 0 || arr.some(num => num < 0) || arr.some(num => num.toString().length > 1)) {
        return null
    }
    const revArr = arr.reverse()

    for (let i = 0; i < revArr.length; i++) {

        revArr[i] = revArr[i] + 1
        if (revArr[i].toString().length === 1 ) {
            revArr.reverse()
            return revArr
        } else {
            revArr[i] = 0
            if (i === revArr.length - 1) {
                revArr.push(1)
                revArr.reverse()
                return revArr
            }
        }
    }
}