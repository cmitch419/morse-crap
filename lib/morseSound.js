const player = require('play-sound')((opts = {})),
  { textToMorse } = require('./morseCode'),
  { getPackNames } = require('./soundPack'),
  { getRandomInt } = require('./util');

// const SOUND_PACK = ['bork', 'doot', 'doom', 'fart', 'lordeteam', 'morse', 'mrpb'];
const MP3_DIR = './assets/packs';
      SOUND_PACK = getPackNames(MP3_DIR, '.mp3');

const textToSound = (str, pack) => {
  if (pack >= 0) {
    if (pack > SOUND_PACK.length - 1) {
      console.log('Picking a pack at random...');
      pack = getRandomInt(0, SOUND_PACK.length);
    }
    console.log(`Sound pack: ${SOUND_PACK[pack]}\n`);
  } else console.log('You asked for this...');
  console.log('Text:       ' + str.toUpperCase());
  process.stdout.write('Morse:      ');
  _morseToSoundRecursive(textToMorse(str), pack);
};

const listSoundPacks = (packArr=SOUND_PACK) => {
  console.log('Available sound packs:')
  packArr.forEach((v,i) => console.log(`[${i}] ${v}`));
};

const _playSound = (c, pack=null) => {
  process.stdout.write(c);
  if (pack === null || pack < 0) pack = getRandomInt(0, SOUND_PACK.length);
  switch (c) {
    case '.':
      player.play(`${MP3_DIR}/${SOUND_PACK[pack]}0.mp3`);
      return 150;
    case '-':
      player.play(`${MP3_DIR}/${SOUND_PACK[pack]}1.mp3`);
      return 325;
    case ' ':
      player.play(`assets/silent.mp3`);
      return 325;
  }
};

const _morseToSoundRecursive = (str, pack, totTime = 0) => {
  c = str.substr(0, 1);
  const addTime = _playSound(c, pack);
  if (str.length === 0) {
    console.log('\nElapsed:    ' + totTime + ' ms');
    return;
  }
  setTimeout(
    () =>
      _morseToSoundRecursive(str.substr(1, str.length), pack, totTime + addTime),
    addTime
  );
};

module.exports = {
  textToSound,
  listSoundPacks
};
