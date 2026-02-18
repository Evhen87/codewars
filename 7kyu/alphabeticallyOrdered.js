//Task

// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
//
// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

//Solution

function alphabetic(s) {
    for (let i = 0; i < s.length - 1; i++ ) {
        const currentCharCode = s[i].charCodeAt(0)
        const nextCharCode = s[i + 1].charCodeAt(0)
        if (currentCharCode > nextCharCode) return false;
    }
    return true;
}