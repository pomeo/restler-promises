'use strict';
const request = require('./request');
const rest = require('restler');

for (const prop in rest) {
  if (rest.hasOwnProperty(prop)) {
    exports[prop] = function(url, options) {
      const r = rest[prop](url, options);
      return new Promise((resolve, reject) => {
        request(r)
          .then(resolve)
          .catch(reject);
      });
    };
  }
}
