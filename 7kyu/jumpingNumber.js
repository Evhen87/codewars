//Task

// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.
//
// Task
// Given a number, Find if it is Jumping or not .

//Solution

function jumpingNumber(n){
    const arr = n.toString().split('')

    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) !== 1) return "Not!!"
    }
    return "Jumping!!"
}