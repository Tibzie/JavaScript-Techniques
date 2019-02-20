
// return a random number between the string's length and 0;


function randomU(myString) {
    const splitt = myString.split("");
    const result = Math.floor(Math.random() * myString.length);
    return result;
}

console.log(randomU("Good morning"));
