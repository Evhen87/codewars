//Task

// Description:
//     Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
//
//     Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//Solution

function remove (string) {
    const arr = string.split(' ')
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        const wordArr = arr[i].split('')
        let exclamCount = 0
        for (let j = 0; j < wordArr.length; j++) {
            const char = wordArr[j]
            if (char === '!') {
                exclamCount++
            }
        }
        exclamCount !== 1 ? resArr.push(arr[i]) : resArr
    }
    return resArr.join(' ');
}