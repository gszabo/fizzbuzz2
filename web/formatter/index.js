'use strict';

function format(input) {
  return input
    .map(item => `${item.number} - ${item.value}`)
    .join('\n');
}

module.exports = format;
