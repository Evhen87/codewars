//Task

// Create a function that takes a string as a parameter and does the following, in this order:
//
//     Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:
//
//     the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

//Solution

function changer(str) {
    let string = ''
    const wovel = 'AEIOUaeiou'
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase()
        if (isNaN(+letter)) {
            letter = String.fromCharCode(letter.charCodeAt(0) < 122 ? letter.charCodeAt(0) + 1 : 97)
            if (wovel.includes(letter)) {
                letter = letter.toUpperCase()
            } else {
                letter = letter.toLowerCase()
            }
        }
        string += letter
    }
    return string
}