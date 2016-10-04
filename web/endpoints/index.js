'use strict';

const format = require('../formatter');
const FizzBuzzPrinter = require('../../fizz-buzz-printer');

const express = require('express');
const endpoints = express();

endpoints.get('/api/list', function(req, res) {
  const { from, to } = req.query;
  const printer = new FizzBuzzPrinter({
    from: parseInt(from),
    to: parseInt(to)
  });
  const text = format(printer.print());
  res.type('text/plain').send(text);
});

module.exports = endpoints;
