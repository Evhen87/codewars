//Task

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
//     Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

//Solution

const orderedCount = function (text) {
    // Implement me!
    let arr = []
    for (let i = 0; i < text.length; i++) {
        const arrEl = arr.find(el => el[0] === text[i])
        if (arrEl) {
            arrEl[1] += 1
        } else {
            arr.push([text[i], 1])
        }
    }
    return arr;
}