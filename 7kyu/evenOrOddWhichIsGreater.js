//Task

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
//
//     If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
//
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
//
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

//Solution

function evenOrOdd(str) {
    const arr = str.split('')
    const arrOfOdd = arr.filter((el) => el % 2 !== 0 ).reduce((acc, el) => acc + +el, 0)
    const arrOfEven = arr.filter((el) => el % 2 === 0 ).reduce((acc, el) => acc + +el, 0)
    return arrOfOdd > arrOfEven ? 'Odd is greater than Even' :
        arrOfOdd < arrOfEven ? 'Even is greater than Odd' : 'Even and Odd are the same'
}