//Task

// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1

//Solution

function sameCase(a, b){
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    }
    let upperA = a.toUpperCase()
    let upperB = b.toUpperCase()
    if (a === upperA && b === upperB) {
        return 1
    }
    if (a !== upperA && b !== upperB) {
        return 1
    }
    if (a === upperA && b !== upperB){
        return 0
    }
    if (a !== upperA && b === upperB){
        return 0
    }


}