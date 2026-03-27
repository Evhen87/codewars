//Task

// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.
//
//     Zero size files can always be saved even HD full.
//
//     Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
//     Number of files that can be fully saved in the HD.

//Solution

function save(sizes, hd) {
    let filesCount = 0
    let saveSize = 0
    for (let fileSize of sizes) {
        saveSize += fileSize

        if (saveSize > hd) {
            return filesCount
        }
        filesCount++
        if (saveSize === hd) {
            return filesCount
        }
    }
    return filesCount
    // your code here
}