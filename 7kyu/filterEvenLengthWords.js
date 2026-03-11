//Task

// Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.
//
//     Example
//     ["One", "Two", "Three", "Four"] --> ["Four"]

//Solution

function filterEvenLengthWords(words) {
    return words.filter(word => word.length % 2 === 0)
}