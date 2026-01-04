//Task

// Definition
// A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5
//
// Given a number, determine if it is a special number or not.
//
//     Notes
// The number passed will be positive (N > 0)
//
// All single-digit numbers within the interval [1:5] are considered special numbers

//Solution

function specialNumber(n){
    const specialNumbers = ['0', '1', '2', '3', '4', '5']
    const arr = n.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        if (!specialNumbers.includes(arr[i])) return "NOT!!"
    }
    return "Special!!"
}

//Best practice

// function specialNumber(n){
//     return /[6-9]/.test(n)?"NOT!!":"Special!!"
// }