//Task

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
//     For each word:
//
//     the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples
//
// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

//Solution

function decipherThis(str) {
    const arr = str.split(' ').map(el => el.split('').map(el => isNaN(el) ? el : +el))

    for (let i = 0; i < arr.length; i++) {
        let numbers = ''
        const letters = []

        for (let j = 0; j < arr[i].length; j++) {
            typeof arr[i][j] === 'number' ? numbers = numbers + arr[i][j] : letters.push(arr[i][j])
        }
        numbers = String.fromCharCode(numbers);
        [letters[0], letters[letters.length - 1]] = [letters[letters.length - 1], letters[0]]
        letters.unshift(numbers)

        arr[i] = letters.join('')
    }

    return arr.join(' ');
}