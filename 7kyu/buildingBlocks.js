//Task

// Write a class Block that creates a block (Duh..)
//
// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
//
//     Define these methods:
//
//     `getWidth()` return the width of the `Block`
//
//     `getLength()` return the length of the `Block`
//
//     `getHeight()` return the height of the `Block`
//
//     `getVolume()` return the volume of the `Block`
//
//     `getSurfaceArea()` return the surface area of the `Block`

//Solution

class Block{

    constructor([width, length, height]){
        this.height = height;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    getHeight() {
        return this.height
    }
    getVolume() {
        return this.height*this.length*this.width
    }
    getSurfaceArea() {
        return 2 * (this.height * this.length +  this.height * this.width + this.width * this.length)
    }

}