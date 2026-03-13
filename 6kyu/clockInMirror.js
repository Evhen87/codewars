//Task

// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22
//
// He knows that the time is 11:38
//
// in the same manner:
//
//     05:25 --> 06:35
//
// 01:50 --> 10:10
//
// 11:58 --> 12:02
//
// 12:01 --> 11:59
//
// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.
//
//     Return the real time as a string.
//
//     Consider hours to be between 1 <= hour < 13.
//
// So there is no 00:20, instead it is 12:20.
//
// There is no 13:20, instead it is 01:20.

//Solution

function WhatIsTheTime(timeInMirror) {
    const arr = timeInMirror.split(':')
    let sumMirrorMinute = +arr[1] + arr[0] * 60
    let realMinute = 720 - sumMirrorMinute
    if (realMinute < 0) {
        realMinute = 720 + realMinute
    }
    arr[0] = ((Math.floor(realMinute / 60) || 12) + '').padStart(2, "0")
    arr[1] = (realMinute % 60 + '').padStart(2, "0")
    return arr.join(':')
}