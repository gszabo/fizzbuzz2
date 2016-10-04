'use strict';

const format = require('./index.js');
const { expect } = require('chai');

describe('Web formatter', function() {

  it('should separate number and value with a dash', function() {
    const input = [{
      number: 1,
      value: '1'
    }];
    const result = format(input);
    expect(result).to.eql('1 - 1');
  });

  it('should separate lines with a newline', function() {
    const input = [{
      number: 2,
      value: '2'
    }, {
      number: 3,
      value: 'Fizz'
    }];
    const result = format(input);
    expect(result).to.eql('2 - 2\n3 - Fizz');
  });

});
