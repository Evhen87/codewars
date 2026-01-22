//Task

// Move every letter in the provided string forward 10 letters through the alphabet.
//
//     If it goes past 'z', start again at 'a'.
//
//     Input will be a string with length > 0.

//Solution

// function moveTen(s){
//     return s.split('')
//         .map(el => el.charCodeAt(0) + 10 < 123 ? el.charCodeAt(0) + 10 : (+el.charCodeAt(0) + 36))
//         .map(el => String.fromCharCode(el)).join('')
// }

//Solution

const moveTen = (s) => s.split('')
        .map(el => el.charCodeAt(0) + 10 < 123 ? el.charCodeAt(0) + 10 : (+el.charCodeAt(0) + 10 - 26))
        .map(el => String.fromCharCode(el)).join('')