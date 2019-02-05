
function getLastItem(arr) {
	arr = [ 'cat', 'dog', 'duck'];
    return (arr.pop());
}

console.log(getLastItem());

function getLastItem2(arr) {
	arr = [ 'cat', 'dog', 'duck'];
    for(i=0; i<=arr.length; i++) {
        return (arr.pop());
    }
}

console.log(getLastItem2());
