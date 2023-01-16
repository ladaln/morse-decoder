const MORSE_TABLE = {
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
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    
    let decode = '';
    let substr = '';
    let t = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        let letter = '';
        substr = expr.slice(i, i + 10);
        if (substr == '**********'){
            decode = decode + ' ';
        }
        else {

            for (let j = 0; j < 9; j = j + 2) {
                t = substr.slice(j, j + 2);
                if (t == '11') {
                    letter = letter + '-'
                }
                if (t == '10') {
                    letter = letter + '.'
                }
                if (t == '00') {
                    continue;
                }
            }

            for (let key in MORSE_TABLE) {
                if (key == letter) {
                    decode = decode + MORSE_TABLE[key];
                }
            }
        }
    } return decode;
}

module.exports = {
    decode
}
