//Task

// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
//     the returned string should only contain lowercase letters

//Solution

function kebabize(str) {
    const arr = str.split('').filter(item => isNaN(item))

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && arr[i].toUpperCase() === arr[i]) {
            arr[i] = arr[i].toLowerCase()

            arr.splice(i, 0, "-")
            i++
        }
        arr[i] = arr[i].toLowerCase()
    }
    return arr.join('')
}