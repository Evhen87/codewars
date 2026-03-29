//Task

// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #16
//
// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
//
// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

//Solution

function noRepeat(str) {
    for (let i = 0; i < str.length; i++ ) {
        const char = str[i]
        const right = str.slice(i + 1)
        const left = str.slice(0, i)
        if (!(left + right).includes(char)) {
            return char
        }
    }
}