//Task

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//
//     Examples:
//
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
//
//     If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//Solution

function encrypt(text, n) {
    if (!n || !text) return text
    let arr = text.split('')
    let oddArr = []
    let evenArr = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            j % 2 === 0 ? evenArr.push(arr[j]) : oddArr.push(arr[j])
        }
        arr = [...oddArr, ...evenArr]
        oddArr = []
        evenArr = []
    }

    return arr.join('')
}

function decrypt(encryptedText, n) {
    if (!n || n === !encryptedText) return encryptedText
    const lenArr = Math.floor(encryptedText.length / 2)

    let newArr = []

    for (let i = 0; i < n; i++) {
        let arr = []
        let arr2 = []
        arr = encryptedText.slice(lenArr).split('')
        arr2 = encryptedText.slice(0, lenArr).split('')

        for (let j = 0; j < lenArr + 1; j++) {
            arr[j] ? newArr.push(arr[j]) : newArr
            arr2[j] ? newArr.push(arr2[j]) : newArr
        }
        encryptedText = newArr.join('')
        newArr = []

    }
    return encryptedText
}


