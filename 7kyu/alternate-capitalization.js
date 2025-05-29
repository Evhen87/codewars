//Task
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!
//
//     If you like this Kata, please try:
//
// Indexed capitalization
//
// Even-odd disparity
//Solution
function capitalize(s){
    let capitalizeA = ''
    let capitalizeB = ''
    const splitArr = s.split('')
    for (let i = 0; i < splitArr.length; i++) {
        if (i % 2 === 0) {
            capitalizeA = capitalizeA + splitArr[i].toUpperCase()
        } else {capitalizeA = capitalizeA + splitArr[i]}
    }
    for (let i = 0; i < splitArr.length; i++) {
        if (i % 2 !== 0) {
            capitalizeB = capitalizeB + splitArr[i].toUpperCase()
        } else {capitalizeB = capitalizeB + splitArr[i]}
    }
    return [capitalizeA, capitalizeB];
};