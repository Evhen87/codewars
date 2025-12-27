//Task

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
//
// Examples:
//
//     uniTotal("a") == 97
// uniTotal("aaa") == 291

//Solution

function uniTotal (string) {
    let sun = 0
    for (let i = 0; i < string.length; i++) {
        sun = sun + string.charCodeAt(i)
    }
    return sun
}