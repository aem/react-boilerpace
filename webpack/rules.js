const resolve = require('path').resolve;

const rules = [
  { test: /\.(js)$/, exclude: resolve(__dirname, '../node_modules'), use: ['babel-loader'] },
  { test: /\.(jpe?g|png|svg|ico)$/, use: ['url-loader?limit=10000'] },
  { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
];

module.exports = {
  dev: rules,
  prod: rules
};
