// Make a function that returns a number half the length,
// and rounded down. You'll need to use Math.floor().

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// ES5

function halfLength(myString) {
    return Math.floor(myString.length / 2);
}
console.log(halfLength("Hello World"));

// ES6 

const countHalfLength = myString => Math.floor(myString.length / 2);
console.log(countHalfLength("Hello World"));

