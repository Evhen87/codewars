//Task

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
//     Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

//Solution

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {return -1}

    const min1 = a1.reduce((acc, el) => el.length < acc.length ? el : acc)
    const max1 = a1.reduce((acc, el) => el.length > acc.length ? el : acc)

    const min2 = a2.reduce((acc, el) => el.length < acc.length ? el : acc)
    const max2 = a2.reduce((acc, el) => el.length > acc.length ? el : acc)

    if (min1.length - max2.length < min2.length - max1.length) {
        return Math.abs(min1.length - max2.length)
    }
    return Math.abs(min2.length - max1.length)
}

