'use strict';

const endpoints = require('./endpoints');

const PORT = process.env.PORT || 3000;

const server = endpoints.listen(PORT, function() {
  console.log('app listening on', server.address());
});
