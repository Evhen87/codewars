//Task

// A new task for you!
//
//     You have to create a method, that corrects a given time string.
//     There was a problem in addition, so many of the time strings are broken.
//     Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)
//
//     Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have created other katas. Have a look if you like coding and challenges.

//Solution

function timeCorrect(timestring) {
    if (timestring === '') return timestring
    if (!timestring) return null
    const arr = timestring.split(':')
    if (arr.length !== 3) return null
    let rest = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        let twoDigits = arr[i]
        if (isNaN(+twoDigits)) {
            return null
        }
        if (i > 0) {
            if (+twoDigits + rest >= 60 ) {
                arr[i] = ((+twoDigits + rest) % 60 ).toString().padStart(2, "0")
                rest = Math.floor((+twoDigits + rest) / 60)
            } else {
                arr[i] = (+twoDigits + rest).toString().padStart(2, "0")
                rest = 0
            }
        } else {
            arr[i] = ((+twoDigits + rest) % 24).toString().padStart(2, "0")
        }
    }
    return arr.join(':');
}