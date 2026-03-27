//Task

// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.
//
//     How it worked
// There were a number of stations, where:
//
// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
//
//     Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.
//
//     NOTE: Each rider travels as far as he can, but never more than 100 miles.

//Solution

function riders(stations) {
    let riders = 1
    let distance = 0
    for (let i = 0; i < stations.length; i++) {
        distance += stations[i]
        if (distance > 100) {
            riders++
            distance = stations[i]
        }
    }
    return riders
}