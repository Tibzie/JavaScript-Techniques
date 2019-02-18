function flatten(arr) {
    // your code here    

    // Option 1
        // const r = arrays.concat.apply([], arrays);
        // return r;
    // Option 2
        return [].concat(...arr);
    // OR (2.5)
        // return Array.prototype.concat(...arr);

}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];