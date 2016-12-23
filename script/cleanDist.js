import fs from 'fs';

const clearDist = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        clearDist(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
clearDist('./dist');
if (!fs.existsSync('./dist')) fs.mkdirSync('./dist');
if (!fs.existsSync('./dist/images')) fs.mkdirSync('./dist/images');
