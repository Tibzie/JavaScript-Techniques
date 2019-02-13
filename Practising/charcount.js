function charCount(myChar, str) {
	return [...str].filter(letter => letter===myChar).length
}

console.log(charCount("m", "A mouse was running on the map.")); // 2


function charCount2(myChar, str) {
	let count = 0;
	for (let i=0; i<str.length; i++) {
		if (str.charAt(i) === myChar) {
			count++;
		}
	}
	return count;
}

console.log(charCount2("n", "Never gonna give you up, never gonna let you down.")); // 6
