//Task
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!

//Solution

function expandedForm(num) {
    const arr = num.toString().split('')
    let answer = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0') {
            if (answer === '') {
                answer += `${arr[i] + "0".repeat(arr.length - i -  1)}`
            } else {answer += ` + ${arr[i] + "0".repeat(arr.length - i -  1)}`}
        }
    }
    return answer
}
