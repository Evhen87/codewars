//Task

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//Solution

function highestRank(arr){
    const sortedArr = arr.sort((a, b) => a - b)
    let count = 0
    let currentCount = 0
    let mostFrequent = Math.max(...arr)
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0) {
            currentCount = 1
        } else {
            sortedArr[i] === sortedArr[i - 1] ? currentCount++ : currentCount = 1
        }
        if (currentCount >= count) {
            count = currentCount
            mostFrequent = sortedArr[i]
        }
    }
    return mostFrequent
}