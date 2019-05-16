const player = require('play-sound')(opts = {});

const TEXT_TO_MORSE_MAP={ "a":".-", "b":"-...", "c":"-.-.", "d":"-..", "e":".", "f":"..-.", "g":"--.", "h":"....", "i":"..", "j":".---", "k":"-.-", "l":".-..", "m":"--", "n":"-.", "o":"---", "p":".--.", "q":"--.-", "r":".-.", "s":"...", "t":"-", "u":"..-", "v":"...-", "w":".--", "x":"-..-", "y":"-.--", "z":"--..", ".":".-.-.-", ",":"--..--", "?":"..--..", "/":"-..-.", "@":".--.-.", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....", "6":"-....", "7":"--...", "8":"---..", "9":"----.", "0":"-----" }; const MORSE_TO_TEXT_MAP={ ".-":"a", "-...":"b", "-.-.":"c", "-..":"d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---":"j", "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-":"t", "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", "--..":"z", ".-.-.-":".", "--..--":",", "..--..":"?", "-..-.":"/", ".--.-.":"@", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9", "-----":"0" };
const morse_to_icon = (str, icons) => icons && Array.isArray(icons) && icons.length===2 ? str.split('.').join(icons[0]).split('-').join(icons[1]) : str;
const icon_to_morse = (str, icons) => icons && Array.isArray(icons) && icons.length===2 ? str.split(icons[0]).join('.').split(icons[1]).join('-') : str;
const text_to_morse = (str, icons=false) => morse_to_icon(str.split(' ').map(word => word.split('').map(letter => TEXT_TO_MORSE_MAP.hasOwnProperty(letter) ? TEXT_TO_MORSE_MAP[letter] : '').join(' ')).join('   '), icons);
const morse_to_text = (str, icons=false) => icon_to_morse(str,icons).split('   ').map(word => word.split(' ').map(letter => MORSE_TO_TEXT_MAP.hasOwnProperty(letter) ? MORSE_TO_TEXT_MAP[letter] : '').join('')).join(' ');
const SOUND_PACK = ['bork','doot','doom','fart','morse'];
const silent = () => player.play('assets/silent.mp3');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const playSound = (c, pack) => {
  process.stdout.write(c);
  if (!pack || pack < 0 || pack >= SOUND_PACK.length) pack = getRandomInt(0,SOUND_PACK.length);
  switch(c) {
    case '.': 
      player.play(`assets/${SOUND_PACK[pack]}0.mp3`);
      return 150;
    case "-":
      player.play(`assets/${SOUND_PACK[pack]}1.mp3`);
      return 325;
    case " ":
      silent();
      return 400;
  }
}

const text_to_sound = (str, pack) => {
  console.log('Text:  ' + str.toUpperCase());
  process.stdout.write('Morse: ');
  morse_to_sound_recursive(text_to_morse(str), pack);
}

const morse_to_sound_recursive = (str, pack, totTime=0) => {
  c = str.substr(0,1);
  const addTime = playSound(c, pack);
  if (str.length === 0) {
    console.log('\nTime to message: ' + totTime + ' ms');
    return;
  }
  setTimeout(() =>  morse_to_sound_recursive(str.substr(1,str.length), pack, totTime+addTime), addTime);
}

text_to_sound(process.argv[2], process.argv[3]);