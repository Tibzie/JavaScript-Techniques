// function isEvenOrOdd(num) {
// 	return num%2==1 ? "odd" : "even";
// }



function isEvenOrOdd(num) {
    if(num%2) {
        return "odd";
    } else {
        return "even";
    }
}
const isEvenOrOdd2 = (num) => num%2? "odd" : "even";


console.log(isEvenOrOdd(11));
console.log(isEvenOrOdd2(14.5));

