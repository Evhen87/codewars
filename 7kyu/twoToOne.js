//Task

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//Solution

// function longest(s1, s2) {
//     return (s1 + s2).split('').reduce((acc, el) => acc.includes(el) ? acc : [...acc, ...el], []).sort().join('')
// }

//Solution 2

const longest = (s1, s2) => (s1 + s2).split('').
reduce((acc, el) => acc.includes(el) ? acc : [...acc, ...el], []).sort().join('')