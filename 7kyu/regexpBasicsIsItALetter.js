//Task

// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

//Solution

String.prototype.isLetter = function() {
    if ([...this].length !== 1) return false
    return this.toString().toUpperCase() !== this.toString().toLowerCase();
}