//Task

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//     The first letter must be converted to its ASCII code.
//     The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
//     encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//Solution

const encryptThis = function (text) {
    if (text.length === 1) return text.charCodeAt(0) + ''
    let arr = text.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 1) {
            arr[i] = arr[i].charCodeAt(0) + ''
        } else if (arr[i].length === 2) {
            arr[i] = arr[i].split('')[0].charCodeAt(0) + arr[i].slice(1, 2)
        } else {
            arr[i] = arr[i].split('')[0].charCodeAt(0) + arr[i].slice(arr[i].length - 1) + arr[i].slice(2, arr[i].length - 1) + arr[i].slice(1, 2)
        }
    }
    return arr.join(' ')
};