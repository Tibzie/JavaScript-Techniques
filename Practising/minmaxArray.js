function minMax(arr) {
    arr = [ 1, 2, 5, 3, 9, 56, 23];
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return min + " " + max;
    
}

console.log(minMax());


function minMax2(arr) {
    arr = [ 1, 2, 5, 3, 9, 56, 23];
    
    const sorting = arr.sort((a, b ) => a-b);
    // console.log(sorting);
    // console.log(sorting.slice(0)[0]);
    // console.log(sorting.slice(-1)[0]);
    return sorting.slice(0)[0] + " " + sorting.slice(-1)[0];
    
    
}

console.log(minMax2());
