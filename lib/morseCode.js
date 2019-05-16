const TEXT_TO_MORSE_MAP = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        '/': '-..-.',
        '@': '.--.-.',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----'
      },
      MORSE_TO_TEXT_MAP = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.-.-.-': '.',
        '--..--': ',',
        '..--..': '?',
        '-..-.': '/',
        '.--.-.': '@',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0'
      };

const SPACE_CHARS = ' ',
      SPACE_WORDS = ' ';

const morseToIcon = (str, icons) =>
  icons && Array.isArray(icons) && icons.length === 2
    ? str
        .split('.')
        .join(icons[0])
        .split('-')
        .join(icons[1])
    : str;

const iconToMorse = (str, icons) =>
  icons && Array.isArray(icons) && icons.length === 2
    ? str
        .split(icons[0])
        .join('.')
        .split(icons[1])
        .join('-')
    : str;

const textToMorse = (str, icons = false) =>
  morseToIcon(
    str
      .toLowerCase()
      .split(SPACE_CHARS)
      .map(word =>
        word
          .split('')
          .map(letter =>
            TEXT_TO_MORSE_MAP.hasOwnProperty(letter)
              ? TEXT_TO_MORSE_MAP[letter]
              : ''
          )
          .join(SPACE_CHARS)
      )
      .join(SPACE_WORDS),
    icons
  );

const morseToText = (str, icons = false) =>
  iconToMorse(str, icons)
    .split(SPACE_WORDS)
    .map(word =>
      word
        .split(SPACE_CHARS)
        .map(letter =>
          MORSE_TO_TEXT_MAP.hasOwnProperty(letter) ? MORSE_TO_TEXT_MAP[letter] : ''
        )
        .join('')
    )
    .join(SPACE_CHARS)
    .toUpperCase();

try {
  module.exports = {
    morseToIcon,
    iconToMorse,
    textToMorse,
    morseToText
  };
} catch(e) {
};