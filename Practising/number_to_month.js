function month_name(num) {
	let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let month = monthArray[ num - 1]
	return month
}

console.log(month_name(1));

function month_name2(num) {
	const months = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August', 
		9: 'September', 
		10:	'October', 
		11:	'November', 
		12:	'December'
	};
	return months[num];
}

console.log(month_name2(2));

