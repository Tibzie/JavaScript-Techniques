function percentDiff(num1, num2) {
	const difference = Math.abs(num1-num2);
	const average = (num1+num2)/2;
	const result = difference/average*100;
	return parseFloat(result.toFixed(1));
}

console.log(percentDiff(2000, 23000));
