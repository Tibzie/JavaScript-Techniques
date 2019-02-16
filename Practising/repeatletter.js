// ES5
function doubleChar(str) {
	return str.split("").map(function(addAnother) { return addAnother.repeat(2)}).join("");
}

console.log(doubleChar("The fox is in the shop."));

// ES6
const doubleChar2 = (str) => str.split("").map((addAnother) => addAnother.repeat(2)).join("");

console.log(doubleChar2("The fox is in the shop."));