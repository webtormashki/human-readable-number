let digits = {
            0: '',
            1: 'one', 
            2: 'two', 
            3: 'three', 
            4: 'four', 
            5: 'five', 
            6: 'six', 
            7: 'seven', 
            8: 'eight', 
            9: 'nine'
        };
let ten = {

            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen', 

        };
let dozens = {
            10: 'ten',
            20: 'twenty', 
            30: 'thirty', 
            40: 'forty', 
            50: 'fifty', 
            60: 'sixty', 
            70: 'seventy', 
            80: 'eighty', 
            90: 'ninety'
}
let hundred = {
            100: 'one hundred', 
            200: 'two hundred', 
            300: 'three hundred', 
            400: 'four hundred', 
            500: 'five hundred', 
            600: 'six hundred', 
            700: 'seven hundred', 
            800: 'eight hundred', 
            900: 'nine hundred'
}

module.exports = function toReadable (number) {
    var name = '';

    if (number == 0) {
        return 'zero';
    }

    var i = 10;

    while (number != 0) {
        var digit = number % i;
        number -= digit;
        i *= 10;
        name = getNumberName(digit) + ' ' + name;
    }

    return name.trim();
}

function getNumberName(number) {
    if (number < 10) {
        return digits[number];
    } else if (number >= 10 && number < 100) {
        return dozens[number];
    } else {
        return hundred[number];
    }
}
