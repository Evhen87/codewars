//Task

// Complete function padIt, which accepts 2 parameters:
//
//     str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
//     n: a number indicating how many times to pad the string.

//Solution

function padIt(str,n){
    //coding here
    let num = 0
    while (num < n / 2) {
        str = '*' + str
        num = num + 1
    }

    while (num < n) {
        str = str + '*'
        num = num + 1
    }

    return str
}