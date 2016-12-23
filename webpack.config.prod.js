const baseConfig = require('./webpack.config');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const config = Object.assign({}, baseConfig, {
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});

module.exports = config;
