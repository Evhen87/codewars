//Task

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.

//Solution

function divCon(x){
    const numSum = x.filter(el =>  typeof el === 'number')
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const strSum = x.filter(el =>  typeof el === 'string')
        .reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0)

    return numSum - strSum

}