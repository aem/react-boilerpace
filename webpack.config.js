const CompressionPlugin = require('compression-webpack-plugin');
const resolve = require('path').resolve;
const webpack = require('webpack');

const config = {
  entry: [
    resolve(__dirname, './src/index.js')
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, exclude: resolve(__dirname, 'node_modules'), use: 'babel-loader'}
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, 'node_modules'),
      resolve(__dirname, 'src')
    ]
  },
  devtool: 'eval-source-map',
  performance: false,
  stats: 'errors-only',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
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
};

module.exports = config;
