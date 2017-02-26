const resolve = require('path').resolve;

const rules = [
  {
    test: /\.(js)$/,
    exclude: resolve(__dirname, '../node_modules'),
    loaders: ['react-hot-loader', 'babel-loader']
  },
  { test: /\.(jpe?g|png|svg|ico)$/, use: ['url-loader?limit=10000'] }
];

module.exports = {
  dev: rules,
  prod: rules
};
