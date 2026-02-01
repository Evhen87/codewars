//Task

// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
//
// Each 8 bits on the binary string represent 1 character on the ASCII table.
//
//     The input string will always be a valid binary string.
//
//     Characters can be in the range from "00000000" to "11111111" (inclusive)
//
// Note: In the case of an empty binary string your function should return an empty string.

//Solution

function binaryToString(binary) {
    const arr = []
    let startPosition = 0
    for (let i = 8; i <= binary.length; i = i + 8 ) {
        arr.push(binary.slice(startPosition, i))
        startPosition = i
    }

    const res = arr.map(bin => parseInt(bin, 2))
        .map(decimal => String.fromCharCode(decimal))

    return res.join('')
}
