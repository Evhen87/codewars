//Task

// Compare two strings by comparing the sum of their values (ASCII character code).
//
// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.
//
//     Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

//Solution

function compare(s1, s2) {
    if (!s1 && !s2) return true
    const valueFN = (str) => {
        if (!str || str === '' || str.toLowerCase() === str.toUpperCase()) return ''
        const arr = str.toUpperCase().split('')
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(+arr[i])) return ''
            sum += arr[i].charCodeAt(0)
        }
        return sum
    }
    return valueFN(s1) === valueFN(s2)
}