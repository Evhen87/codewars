//Task

// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.
//
// // Please do not use
//     const forbidden = "
// '
//     `
//                   string
//                   fixed
//                   precision
//                   .keys

//Solution

function reverse(n){
    let res = 0
    const arr = []
    const bitDepth = []
    let cash = n
    for (let i = 1; i < n; i *= 10) {
        bitDepth.push(i)
        arr.push(cash % (i * 10) / i)
        cash -= cash % (i * 10)
    }
    for (let i = 0; i < arr.length; i++) {
        res += (arr[i] * bitDepth[bitDepth.length - i - 1])
    }
    return res
}