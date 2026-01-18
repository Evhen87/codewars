//Task

// To participate in a prize draw each one gives his/her firstname.
//
//     Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
//
//     The length of the firstname is added to the sum of these ranks hence a number som.
//
//     An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
//
//     Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
//
// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
//
//     Task:
// parameters: st a string of firstnames, we an array of weights, n a rank
//
// return: the firstname of the participant whose rank is n (ranks are numbered from 1)
//
// Example:
//     names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4
//
// The function should return: "PauL"
// Notes:
//     The weight array is at least as long as the number of names, it may be longer.
//
//     If st is empty return "No participants".
//
//     If n is greater than the number of participants then return "Not enough participants".
//
//     See Examples Test Cases for more examples.

//Solution

function rank(st, we, n) {
    if (!st) return "No participants";

    const names = st.split(',');
    if (n > names.length) return "Not enough participants";

    console.log(names)
    const numbers = names.map(el => el.toLowerCase().split(''))
        .map(el => el.reduce((acc, el) => acc + el.charCodeAt(0) - 'a'.charCodeAt(0) + 1, 0))
        .map((el, i) => (el + names[i].length) * we[i])
    console.log(numbers)

    const obj = names.map((el, i) => {return {name: el, som: numbers[i]}})
    console.log(obj)

    obj.sort((a, b) => {
        if (a.som === b.som) {
            return a.name.localeCompare(b.name)
        }
        return b.som - a.som
    })

    console.log(obj)

    return obj[n - 1].name;

//   const sortedNums = [...numbers].sort((a, b) => a - b)
//   console.log(sortedNums)

//   const numRes = sortedNums[n - 1]
//   console.log(numRes)

//   const ind = numbers.findIndex(el => el === numRes)
//   console.log(numbers)
//   console.log(ind)
//   console.log('Result', arr[ind])

}

//Solved with AI