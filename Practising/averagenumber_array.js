function average(array) {
    const result = array.reduce((acc, sum) => {
      return acc + sum;
    });
    return result / array.length;
  }
  
  console.log(average([2, 2, 5, 8]))