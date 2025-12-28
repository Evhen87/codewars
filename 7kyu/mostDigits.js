//Task

// Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.

//Solution

function findLongest(array){
    const maxLength = Math.max(...array).toString().length
    for (let el of array) {
        if (el.toString().length === maxLength) {
            return el
        }
    }
}