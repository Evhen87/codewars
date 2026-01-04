//Task

// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

//Solution

function high(x){
    const arr = x.split(' ')
    let indexOfHighest = 0
    let highestScore = 0
    for (let i = 0; i < arr.length ; i++) {
        let score = 0
        for (let j = 0; j < arr[i].length; j++) {
            score = score + arr[i][j].charCodeAt(0) - 'a'.charCodeAt(0) + 1
        }
        if (score > highestScore) {
            highestScore = score
            indexOfHighest = i
        }
    }
    return arr[indexOfHighest]
}