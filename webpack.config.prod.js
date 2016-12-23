const baseConfig = require('./webpack.config');
const webpack = require('webpack');

const config = Object.assign({}, baseConfig, {
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});

module.exports = config;
