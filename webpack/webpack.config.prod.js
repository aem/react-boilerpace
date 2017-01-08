const devtool = require('./devtool').prod;
const entry = require('./entry').prod;
const rules = require('./rules').prod;
const output = require('./output').prod;
const plugins = require('./plugins').prod;
const resolve = require('./resolve').prod;

const config = {
  entry,
  output,
  module: {
    rules
  },
  resolve,
  devtool,
  performance: false,
  stats: 'errors-only',
  plugins
};

module.exports = config;
