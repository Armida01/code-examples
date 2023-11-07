// Check Readme.ms file

function rot13(message){
    let str = '';
    let smallLetterMin = "a".codePointAt(0);
    let smallLetterMax = "z".codePointAt(0);
    let capitalLetterMin = "A".codePointAt(0);
    let capitalLetterMax = "Z".codePointAt(0);
    for (let  i = 0; i < message.length; i++) {
        let strUnicode = parseInt(message.charCodeAt(i));
        if (strUnicode <= 109 && strUnicode >= 97 ||
            strUnicode <= 77  && strUnicode >= 65) {
            str += String.fromCodePoint(strUnicode + 13);
        } else if (strUnicode <= 122 && strUnicode >= 110) {
            str += String.fromCodePoint(smallLetterMin + strUnicode + 13 - smallLetterMax - 1);
        } else if (strUnicode <= 90  && strUnicode >= 78) {
            str += String.fromCodePoint(capitalLetterMin + strUnicode + 13 - capitalLetterMax - 1);
        } else {
            str += message[i];
        }
    }
    return str;
}
