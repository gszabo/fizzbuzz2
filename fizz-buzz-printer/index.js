'use strict';

const fizzBuzz = require('../fizz-buzz');

class FizzBuzzPrinter {

  constructor(range) {
    this._range = range;
  }

  print() {
    const result = [];

    for (let i = this._range.from; i <= this._range.to; i++) {
      result.push({
        number: i,
        value: fizzBuzz(i)
      });
    }

    return result;
  }

}

module.exports = FizzBuzzPrinter;
