//Task

// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.
//
// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.
//
//     See the pattern below:
//
//     "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

//Solution

function initials(n){
    const arr = n.split(' ')
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 === arr.length) {
            str += arr[i][0].toUpperCase() + arr[i].slice(1)
        } else {
            str += arr[i][0].toUpperCase() + '.'
        }
    }
    return str
}