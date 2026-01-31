//Task

// Bob is a lazy man.
//
//     He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
//
//     Example:
//
// "hel2!lo" --> 6
//
// "wicked .. !" --> 6
//
// "!?..A" --> 1

//Solution

function countLettersAndDigits(input) {
    let counter = 0
    for (let i = 0; i < input.length; i++) {
        const currentSymbol = input[i]
        if (currentSymbol !== ' ') {
            if (currentSymbol.toUpperCase() !== currentSymbol.toLowerCase()) {
                counter++
            } else if (!isNaN(+currentSymbol)) {
                counter++
            }
        }
    }
    return counter;
}