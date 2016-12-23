import fs from 'fs';
import { ncp } from 'ncp';

ncp.limit = 5;

ncp('./src/images/', './dist/images/', (err) => {
  if (err) return console.error(err);
  console.log('Image assets moved to /dist/images');
});
