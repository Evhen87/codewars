//Task

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

//Solution

// String.prototype.vowel = function() {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     const str = `${(this).toLowerCase()}`
//     return  vowels.includes(str);
// };

//Solution 2

String.prototype.vowel = function() {
    return  ['a', 'e', 'i', 'o', 'u'].includes(`${(this).toLowerCase()}`);
};