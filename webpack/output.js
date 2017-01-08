const resolve = require('path').resolve;

const rootFolder = resolve(__dirname, '..');

const client = {
  path: resolve(rootFolder, 'build/assets'),
  publicPath: '/assets/',
  filename: '[name].js',
  chunkFilename: '[name].[hash].js'
};

module.exports = {
  dev: client,
  prod: client
};
