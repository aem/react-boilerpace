const resolve = require('path').resolve;

const dev = [
  'webpack-hot-middleware/client',
  resolve(__dirname, '../src/index'),
];

const prod = [
  'webpack-hot-middleware/client',
  resolve(__dirname, '../src/index'),
];

module.exports = {
  dev,
  prod
};
