//Task

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase

//Solution

String.prototype.toAlternatingCase = function () {
    let newStr = ''
    for (const char of this) {
        if (char === char.toUpperCase()) {
            newStr += char.toLowerCase()
        } else {
            newStr += char.toUpperCase()
        }
    }
    return newStr
}