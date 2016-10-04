'use strict';

const request = require('supertest');
const endpoints = require('./index.js');

describe('FizzBuzz Web /api/list endpoint', function() {

  it('should respond with 200 status code', function(done) {
    request(endpoints)
      .get('/api/list?from=2&to=3')
      .expect(200)
      .end(done);
  });

  it('should respond with text/plain', function(done) {
    request(endpoints)
      .get('/api/list?from=2&to=3')
      .expect('Content-Type', /text\/plain/)
      .end(done);
  });

  it('should respond with the fizzbuzz numbers', function(done) {
    request(endpoints)
      .get('/api/list?from=9&to=10')
      .expect('9 - Fizz\n10 - Buzz')
      .end(done);
  });

});
