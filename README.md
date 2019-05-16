# Morse Crap
## Description
```- .... .. ... .-. . .--. --- .. ... .- .... --- - -- . ... ... --..-- -... .- -... -.-- .-.-.-  .. - -.. --- . ... .- -... ..- -. -.-. .... --- ..-. ... - ..- .--. .. -.. - .... .. -. --. ... .. -. ...- --- .-.. ...- .. -. --. -- --- .-. ... . -.-. --- -.. . --..-- .-.. .. -.- . .-. . .--. .-.. .- -.-. .. -. --. ... .... --- .-. - .- -. -.. .-.. --- -. --. -.-. .... .- .-. .- -.-. - . .-. ... .-- .. - .... .-- .... .- - . ...- . .-. --- - .... . .-. -.-. .... .- .-. .- -.-. - . .-. ... -.-- --- ..- .-- .- -. - .- -. -.. .--. .-.. .- -.-- .. -. --. -... .- -.-. -.- -- --- .-. ... . -.-. --- -.. . .-- .. - .... -.-. ..- ... - --- -- ... --- ..- -. -.. ... .-.-.-  .. .... .- ...- . -. --- .. -.. . .- .-- .... -.-- .. -- .- -.. . - .... .. ... .-.-.-```

## Getting started
```
npm install
npm start -- "something you want translated into morse code" <index of sound pack>
```

## Making your own sound pack
For now, this feature only works with MP3s.
### Naming convention
Sound file for the short character:
```
assets/packs/<pack name goes here>0.mp3
```
Sound file for the long character:
```
assets/packs/<pack name goes here>1.mp3
```
Sound file for breaks between characters and words:
```
assets/silent.mp3
```

When you add a pair of mp3 files, they will be included in the index of sound packs when the script is run.

## Other dumb stuff
lib/morseCode.js is a fun boy.
```
text_to_morse('<text you want to convert to morse code>'[, icons: ['<shortChar>', '<longChar>']])

morse_to_text('<morse code you want to convert to text>'[, icons: ['<shortChar>', '<longChar>']])
```
The optional icons array can be used to replace the short and long characters with characters of your choosing (🦀 🦀🦀🦀🦞 🦀 🦞🦀 🦀🦀🦀 🦀🦀🦀🦀 🦀 🦀🦞🦀🦀 🦀🦞🦀🦀 🦀🦀🦞🦀 🦀🦀 🦀🦀🦀 🦀🦀🦀🦀 🦀 🦞🦞 🦞🦞🦞 🦀🦞🦞🦞 🦀🦀 🦀🦀🦀)