'use strict';
const rest = require('restler');
const methods = require('./methods');

class RestlerPromises {}

for (const prop in rest) {
  if (rest.hasOwnProperty(prop)) {
    RestlerPromises.prototype[prop] = methods[prop];
  }
}

module.exports = new RestlerPromises;
