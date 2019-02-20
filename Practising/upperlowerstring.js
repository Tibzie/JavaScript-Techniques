// Make a function that will return any given string into all caps
// followed by the same string all lowercase.
// capilizeAndLowercase("Hello") // => "HELLOhello"

// ES5

function capilizeAndLowercase(myString) {
    return myString.toUpperCase() + myString.toLowerCase();
}
console.log(capilizeAndLowercase("Hello"));

function capilizeAndLowercase2(myString) {
    return `${myString}`.toUpperCase() + `${myString}`.toLowerCase();
}
console.log(capilizeAndLowercase2("Hi"));

// ES6

const lettCapLow = myString => myString.toUpperCase() + myString.toLowerCase();

console.log(lettCapLow("Bonjour"));
