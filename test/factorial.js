MathObj = function () {
};
MathObj.prototype.getFactorial = function (number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    }
    else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.getFactorial(number - 1);
    }
}