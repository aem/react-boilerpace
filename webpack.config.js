const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      {test: /\.(js)$/, exclude: resolve(__dirname, 'node_modules'), use: 'babel-loader'},
      {test: /\.(scss)$/, use: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, 'node_modules'),
      resolve(__dirname, 'src')
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    stats: 'errors-only'
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};

module.exports = config;
