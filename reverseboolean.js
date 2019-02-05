function reversed(bool) {
    // return ((bool === true ? false : true) || (bool === false ? true : false));
    return typeof bool === 'boolean' ? !bool : 'boolean expected';
}
console.log(reversed(true));
