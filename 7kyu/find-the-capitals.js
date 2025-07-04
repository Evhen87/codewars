//Task
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

//Solution
const capitals = function (word) {
    const arr = []
    const splited = word.split('')
    const splitedUpprcase = word.toUpperCase().split('')
    for (let i = 0; i < splited.length; i++) {
        if (splited[i] === splitedUpprcase[i]) {
            arr.push(i)
        }
    }
    return arr
};