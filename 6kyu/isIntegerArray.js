//Task

// Write a function that:
//
//     returns true  / True if every element in an array is an integer or a float with no decimals.
//     returns true  / True if array is empty.
//     returns false / False for every other input.

//Solution

function isIntArray(arr) {
    if (!Array.isArray(arr)) return false
    if (!arr.length) return true
    return arr.reduce((acc, el) => typeof el !== 'number' || Number.isNaN(el) || el !== Math.round(el) ? false : acc, true )
}
