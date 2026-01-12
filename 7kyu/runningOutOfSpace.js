//Task

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
//     For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

//Solution

function spacey(array) {
    const arr = []
    let str = ''

    for (let i = 0; i < array.length; i++) {
        str += array[i]
        arr.push(str)
    }
    return arr
}

//Best Practice

// function spacey(array){
//     let string = ''
//     return array.map( (e) => string += e )
// }