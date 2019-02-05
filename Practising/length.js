
function comp(str1, str2) {
    const a = str1.length;
    const b = str2.length;
    if(a==b) {
        return true;
    } else {
        return false;
    }
}

console.log(comp("aba", "cde"));

const compStrings = (str1, str2) => (str1.length == str2.length ? true : false);

// function comp2(str1, str2) {
//     return (str1.length == str2.length ? true : false);
// }

console.log(compStrings("aba", "cded"));