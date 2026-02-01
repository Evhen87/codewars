//Task

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//
//     Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//Solution

function consonantCount(str) {
    const notLettersLength = str.replace(/[a-zA-Z]/g, '').length
    const notVowelsLength = str.replace(/[aeiouAEIOU]/g, '').length
    return notVowelsLength - notLettersLength
}