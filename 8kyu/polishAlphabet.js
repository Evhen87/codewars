//Task

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
//
//     Your task is to change the letters with diacritics:
//
// ą -> a,
//     ć -> c,
//     ę -> e,
//     ł -> l,
//     ń -> n,
//     ó -> o,
//     ś -> s,
//     ź -> z,
//     ż -> z
// and print out the string without the use of the Polish letters.
//
//     For example:
//
//     "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//Solution

// function correctPolishLetters (string) {
//     const obj = {
//         'ą': 'a',
//         'ć': 'c',
//         'ę': 'e',
//         'ł': 'l',
//         'ń': 'n',
//         'ó': 'o',
//         'ś': 's',
//         'ź': 'z',
//         'ż': 'z'
//     }
//
//     const arr = string.split('')
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             arr[i] = obj[arr[i]]
//         }
//     }
//
//     return arr.join('')
// }

//Solution 2

function correctPolishLetters (string) {
    const obj = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    }

    return string.split('').map(el => obj[el] ? el = obj[el] : el).join('')
}