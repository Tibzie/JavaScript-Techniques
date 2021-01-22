// checks if number exists in the array

function contains(array, number) {

    return array.includes(number) ? true : false;
}

console.log(contains([1, 2, 3, 4], 9));

function contains2(array, number) {
    for(let i = 0; i<=array.length; i++) {
    if(array[i] === number) {
        return true
    }
    }
    return false;
}
console.log(contains2([1, 2, 3, 4], 9));