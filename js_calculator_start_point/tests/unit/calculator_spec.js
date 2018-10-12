var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal);
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(3)
    assert.equal(4, calculator.runningTotal);
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal);
  })

  it('should be able to divide two integers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal);
  })

  it ('should concatenate multiple number button clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(5)
    assert.equal(35, calculator.runningTotal);
  })

  it ('should chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(32, calculator.runningTotal)
  })

  it('should clear the running total', function(){
    calculator.numberClick(3);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal);
  })

});
