function differenceMinMax(array) {
    let minNum = Math.min(...array);
    let maxNum = Math.max(...array);
    let diff = maxNum - minNum;
    return diff;
  }
console.log(differenceMinMax([0, 7, 11, 100]));