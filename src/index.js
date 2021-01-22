module.exports = function reverse (n) {
    let nNumberString = "";
    n = Math.abs(n);
    nNumberString = n.toString().split("").reverse().join("");

    return nNumberString;
}
