//Task

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//
// (the dedicated builtin(s) functionalities are deactivated)

//Solution

reverse = function(array) {
    let arr = []
    for (let i = 1; i < array.length + 1; i++) {

        arr.push(array[array.length - i])
    }
    return arr
}

//Best practice

// const reverse = array =>
//     array.reduce((pre, val) => [val, ...pre], []);