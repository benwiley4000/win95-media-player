/* eslint-disable no-console */

const base64Img = require('base64-img');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const iconsSrcDir = path.join(__dirname, 'src', 'icons');
const iconsLibDir = path.join(__dirname, 'lib', 'icons');

mkdirp.sync(iconsLibDir);

fs.readdir(path.join(__dirname, 'src', 'icons'), (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  for (const file of files) {
    base64Img.base64(path.join(iconsSrcDir, file), (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      fs.writeFile(
        path.join(iconsLibDir, file + '.js'),
        `module.exports='${data}'`,
        err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
        }
      );
    });
  }
});
