const { readdirSync } = require('fs'),
      { uniqueArray } = require('./util');

const MP3_DIR='./assets/packs',
      MP3_EXT='.mp3';

const getPackNames = (dir=MP3_DIR, ext=MP3_EXT) => {
  const files = readdirSync(dir);
  return uniqueArray(files.map(f => {
    let filename = f.split('/').pop().split(ext).shift();
    return filename.substr(0,filename.length-1);
  }));
};

module.exports = {
  getPackNames
};
