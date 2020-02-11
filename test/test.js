var expect = require('chai').expect;
var assert = require('assert');
describe('Factorial tests', function () {
    describe('Positive tests', function () {
        it('should return 1 when number = 0', function () {
            assert.equal(MathObj.prototype.getFactorial(0), 1);
        });
        it('should return 1 when number = 1', function () {
            assert.equal(MathObj.prototype.getFactorial(1), 1);
        });
        it('should return a number without exponent when 1 < number < 22', function () {
            assert.equal(MathObj.prototype.getFactorial(21), 51090942171709440000);
        });
        it('should return a number without exponent when 22 =< number < 170', function () {
            assert.equal(MathObj.prototype.getFactorial(22), 1.1240007277776077e+21);
        });

    });
    describe('Negative tests', function () {
        it('should return error "There is no factorial for negative numbers" when number is < 0', function () {
            expect(MathObj.prototype.getFactorial(-1)).to.throw(new Error('There is no factorial for negative numbers'));
        });
        it('should return 1 when 0 < number < 1', function () {
            assert.equal(MathObj.prototype.getFactorial(0.5), 1);
        });
        it('should return factorial of int(number) when number is a float and number > 1', function () {
            assert.equal(MathObj.prototype.getFactorial(5.5), getFactorial(5));
        });
        it('should return error "The factorial for numbers > 170 is the infinity" when number is > 170', function () { //because JS can't count factorial of a nb > 170
            expect(MathObj.prototype.getFactorial(170)).to.throw(new Error('The factorial for numbers > 170 is the infinity'));
        });
    });
});