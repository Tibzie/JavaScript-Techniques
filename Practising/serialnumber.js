
function generateSerialNumber() {
    let rand1 = [...Array(16)].map(() => {
      // getting an array of 16 random characters, turning it into string
      // random characters from this pool "0123456789abcdefghijklmnopqrstuvwxyz"
      // remove first two characters and then start from the first immediately 
      return Math.random().toString(36).substr(2, 1);
  });
    // joins the array elements together and changes them to uppercase
    const randStr = rand1.join("").toUpperCase();
    // 4 characters
    const blockOne = randStr.slice(0, 4);
    // 3 characters
    const blockTwo = randStr.slice(4, 7);
    // 5 characters
    const blockThree = randStr.slice(7, 12);
    // 4 characters
    const blockFour = randStr.slice(12, 16);
    return `${blockOne}-${blockTwo}-${blockThree}-${blockFour}`;
}

console.log(generateSerialNumber());

