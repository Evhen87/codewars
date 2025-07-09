//Task
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
//     Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

//Solution
const isAnagram = function(test, original) {
    if (test.length !== original.length) return false
    const arrOriginal = original.toLowerCase().split('')
    const arrTest = test.toLowerCase().split('')
    let arr = []
    for (let i = 0; i < arrOriginal.length; i++) {
        for (let j = 0; j < arrTest.length; j++) {
            if (arrOriginal[i] === arrTest[j]) {
                arr[i] = arrTest.splice(j, 1).join()
                break
            }
        }
    }
    console.log(original.toLowerCase())
    console.log(arr.join(''))
    console.log(original.toLowerCase() === arr.join(''))
    if (original.toLowerCase() === arr.join('')) {
        return true
    }
    return false
};
//Best practice
// function isAnagram (test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
// }
