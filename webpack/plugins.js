const webpack = require('webpack');

const dev = [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    },
    __development__: true,
    __production__: false
  })
];

const prod = [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    },
    __development__: false,
    __production__: true
  })
];

module.exports = {
  dev,
  prod
};
