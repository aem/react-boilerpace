const resolve = require('path').resolve;

const index = resolve(__dirname, '../src/index');

module.exports = {
  dev: index,
  prod: index
};
