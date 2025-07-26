//Task
// Your task is simply to count the total number of lowercase letters in a string.
//
//     Examples
// "abc" ===> 3
//
// "abcABC123" ===> 3
//
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
// "" ===> 0;
//
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
// "abcdefghijklmnopqrstuvwxyz" ===> 26

//Solution

function lowercaseCount(str){
    const arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) {
            count++
        }
    }
    return count
}

//Best practice

// function lowercaseCount(str){
//     return str.replace(/[^a-z]/g, "").length;
// }