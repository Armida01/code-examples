// Check Readme.ms file

function incrementString (strng) {
    let reversestring = reverseString(strng);
    let number = parseInt(reversestring);

    if(isNaN(number)) return reverseString(1 + reversestring);

    if (number == 0) return reverseString(reversestring.replace(0, 1))

    let numberWithoutZeros = parseInt(reverseString(number.toString()));

    let revNum = reverseString((numberWithoutZeros + 1).toString().padStart(number.toString().length, 0))

    return reverseString(reversestring.replace(number, revNum))

}

function reverseString(str) {
    return str.split('').reverse().join('')
}
