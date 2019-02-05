function Go(num) {
    num = (Math.floor(Math.random() * 60));
    const dash = "-";
    const result = dash.repeat(num);

    return result + " : " + num;
}

console.log(Go());


