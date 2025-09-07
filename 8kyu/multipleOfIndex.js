//Task

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Solution

function multipleOfIndex(array) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        if (i === 0 && array[i] === 0) {
            newArr.push(array[0])
        }

        if (array[i] % i === 0) {

            newArr.push(array[i])
        }
    }
    return newArr
}

//Best practice

// const multipleOfIndex = array =>
//     array.filter((element, index) => element % index == 0 || element == 0)