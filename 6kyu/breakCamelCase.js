// Task

// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Solution

function solution(string) {

    const arr = string.split('')
    let resArr = []
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            resArr.push(arr[i])
        } else {
            resArr.push(' ')
            resArr.push(arr[i])
        }
    }
    return resArr.join('');
}

// Best practice

// const solution = string => {
//     return [...string].map((char) => {
//         return (char === char.toUpperCase()) ? ` ${char}` : char;
//     }).join('');
// }