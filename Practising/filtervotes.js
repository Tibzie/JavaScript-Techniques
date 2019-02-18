
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    const youngAge = arr.filter((young) =>
        young.age > 17 && young.age < 26 && young.voted === true
    ).length;
    const middleAge = arr.filter((mid) =>
        mid.age > 25 && mid.age < 36 && mid.voted === true
    ).length;

    const adultAge = arr.filter((adult) =>
        adult.age > 35 && adult.age < 56 && adult.voted === true
    ).length;

    return `These are the people who voted:\nYoung Votes: ${youngAge} \nMiddle Age: ${middleAge} \nAdult Age: ${adultAge}`;
}


console.log(voterResults(voters));