//Task

// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
//
//     So max_rot (or maxRot or ... depending on the language) is such as:
//
//     max_rot(56789) should return 68957
//
// max_rot(38458215) should return 85821534

//Solution

function maxRot(n) {
    const arr = n.toString().split('')
    const arrRes = []
    arrRes.push(n)

    for (let i = 0; i <= arr.length - 1; i++) {
        let el = arr.splice(i, 1)
        arr.push(...el)
        arrRes.push(+arr.join(''))
    }
    console.log(arrRes)
    console.log(Math.max(...arrRes))
    return Math.max(...arrRes)
}

