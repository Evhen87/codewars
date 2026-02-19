//Task

// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
//
//     Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
//
// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
//     Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

//Solution

function makePassword(phrase) {
    const arr = phrase.split(' ')
    let resStr = ''
    for (let i = 0; i < arr.length; i++) {
        const firstLetterOfCurrentWord = arr[i][0]
        if (firstLetterOfCurrentWord.toLowerCase() === 'i') {
            resStr += '1'
        } else if (firstLetterOfCurrentWord.toLowerCase() === 'o') {
            resStr += '0'
        } else if (firstLetterOfCurrentWord.toLowerCase() === 's') {
            resStr += '5'
        } else {
            resStr += firstLetterOfCurrentWord
        }
    }
    return resStr
}