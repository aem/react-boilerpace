const resolve = require('path').resolve;

const rootFolder = resolve(__dirname, '..');

const res = {
  modules: [
    resolve(rootFolder, 'node_modules'),
    resolve(rootFolder, 'src')
  ]
};

module.exports = {
  dev: res,
  prod: res
};
