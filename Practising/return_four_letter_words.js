function isFourLetters(arr) {
    arr = ["Jane", "Peter", "James"];
    const result = arr.filter(name => name.length == 4);
    return result;
}

console.log(isFourLetters());