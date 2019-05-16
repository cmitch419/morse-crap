const { textToSound, listSoundPacks } = require('./lib/morseSound');

const main = () => {
  listSoundPacks();
  console.log('\n');
  textToSound(process.argv[2], process.argv[3]);
};

main();
