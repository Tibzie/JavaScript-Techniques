

function capitaliseMe(myString) {
    const splitt = myString.split("");
    const result = splitt[0].toUpperCase() + myString.slice(1);
    return result;
}

console.log(capitaliseMe("hello"));
