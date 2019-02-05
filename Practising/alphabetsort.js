function alphabetSoup(str) {
	return str.split("").sort().join("");
}

alphabetSoup2 = (str) => str.split("").sort().join("");

console.log(alphabetSoup("alma"));

console.log(alphabetSoup2("apple"));