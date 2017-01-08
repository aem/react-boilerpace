const devtool = require('./devtool').dev;
const entry = require('./entry').dev;
const rules = require('./rules').dev;
const output = require('./output').dev;
const plugins = require('./plugins').dev;
const resolve = require('./resolve').dev;

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
