const TEXT_TO_MORSE_MAP={ "a":".-", "b":"-...", "c":"-.-.", "d":"-..", "e":".", "f":"..-.", "g":"--.", "h":"....", "i":"..", "j":".---", "k":"-.-", "l":".-..", "m":"--", "n":"-.", "o":"---", "p":".--.", "q":"--.-", "r":".-.", "s":"...", "t":"-", "u":"..-", "v":"...-", "w":".--", "x":"-..-", "y":"-.--", "z":"--..", ".":".-.-.-", ",":"--..--", "?":"..--..", "/":"-..-.", "@":".--.-.", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....", "6":"-....", "7":"--...", "8":"---..", "9":"----.", "0":"-----" }; const MORSE_TO_TEXT_MAP={ ".-":"a", "-...":"b", "-.-.":"c", "-..":"d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---":"j", "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-":"t", "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", "--..":"z", ".-.-.-":".", "--..--":",", "..--..":"?", "-..-.":"/", ".--.-.":"@", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9", "-----":"0" };
const morse_to_icon = (str, icons) => icons && Array.isArray(icons) && icons.length===2 ? str.split('.').join(icons[0]).split('-').join(icons[1]) : str;
const icon_to_morse = (str, icons) => icons && Array.isArray(icons) && icons.length===2 ? str.split(icons[0]).join('.').split(icons[1]).join('-') : str;
const text_to_morse = (str, icons=false) => morse_to_icon(str.split(' ').map(word => word.split('').map(letter => TEXT_TO_MORSE_MAP.hasOwnProperty(letter) ? TEXT_TO_MORSE_MAP[letter] : '').join(' ')).join('  '), icons);
const morse_to_text = (str, icons=false) => icon_to_morse(str,icons).split('  ').map(word => word.split(' ').map(letter => MORSE_TO_TEXT_MAP.hasOwnProperty(letter) ? MORSE_TO_TEXT_MAP[letter] : '').join('')).join(' ');