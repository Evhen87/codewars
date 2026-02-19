//Task

// Given a varying number of integer arguments, return the digits that are not present in any of them.
//
//     Example:
//
// [12, 34, 56, 78]  =>  "09"
//     [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

//Solution

function unusedDigits(...args) {
    let digits = '0123456789'
    let resDigits = ''
    const str = args.join('')
    for (let i = 0; i < digits.length; i++ ) {
        if (!str.includes(digits[i])) {
            resDigits += digits[i]
        }
    }
    return resDigits;
}