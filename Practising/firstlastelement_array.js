function firstLast(array) {
    let first = array[0];
    let last = array[array.length-1];
    let newArr = [];
    newArr.push(first);
    newArr.push(last);
    return newArr;
}

console.log(firstLast([1, 2, 5, 8]));