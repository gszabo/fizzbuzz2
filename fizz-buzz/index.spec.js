'use strict';

const { expect } = require('chai');
const fizzBuzz = require('./index.js');

describe('FizzBuzz', function() {

  it('should return 1 when given one', function() {
    expect(fizzBuzz(1)).to.eql('1');
  });

  it('should return 2 when given two', function() {
    expect(fizzBuzz(2)).to.eql('2');
  });

  it('should return Fizz when given 3', function() {
    expect(fizzBuzz(3)).to.eql('Fizz');
  });

  it('should return Fizz when given 6', function() {
    expect(fizzBuzz(6)).to.eql('Fizz');
  });

  it('should return Buzz when given 5', function() {
    expect(fizzBuzz(5)).to.eql('Buzz');
  });

  it('should return Buzz when given 10', function() {
    expect(fizzBuzz(10)).to.eql('Buzz');
  });

  it('should return FizzBuzz when given 15', function() {
    expect(fizzBuzz(15)).to.eql('FizzBuzz');
  });

  it('should return FizzBuzz when given 30', function() {
    expect(fizzBuzz(30)).to.eql('FizzBuzz');
  });

});
