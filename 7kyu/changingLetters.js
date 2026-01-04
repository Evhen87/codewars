//Task

// When provided with a String, capitalize all vowels
//
// For example:
//
//     Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//
// Note: Y is not a vowel in this kata.

//Solution

function swap (string) {
    const vowels = ['a', 'e', 'i', 'o','u'];
    const arr = string.split('');
    for(let i = 0; i < arr.length; i++) {
        if(vowels.includes(arr[i])) {
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join('')
}

//Best practice

// function swap(st){
//     return st.replace(/[aeiou]/g, v => v.toUpperCase() )
// }//z.