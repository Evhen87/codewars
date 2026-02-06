//Task

// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
//     Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//     "ODEWARSC",
//     "DEWARSCO",
//     "EWARSCOD",
//     "WARSCODE",
//     "ARSCODEW"
//     "RSCODEWA",
//     "SCODEWAR" ]
// Good luck!

//Solution

function scrollingText(text){
    let upperText = text.toUpperCase()
    const resArr = []

    for (let i = 0; i < upperText.length; i++) {
        resArr.push(upperText)
        const firstLetter = upperText[0]
        upperText = upperText.slice(1, upperText.length) + firstLetter
    }

    return resArr
}