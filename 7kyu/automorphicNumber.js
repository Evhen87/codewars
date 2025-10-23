//Task

// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.
//
//     Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

//Solution

function automorphic(n){
    const square = n**2

    const nArr = n.toString().split('')
    const squareArr = square.toString().split('')

    for (let i = 0; i < nArr.length; i++) {
        if (nArr[nArr.length - 1 - i] !== squareArr[squareArr.length - 1 - i]) {
            return "Not!!"
        }
    }

    return "Automorphic!!"
}

//Best practice

// const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
