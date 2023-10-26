// Check Readme.ms file

function int32ToIp(int32){
    let str = ``;
    let toBinary = int32.toString(2);

    for(let i = 0; i < 4; i++) {
        let str1 = toBinary.slice(8 * i, 8 + 8 * i);

        if(str1 == '') {
            str += `${0}.`
        } else {
            str += `${parseInt(str1,2)}.`
        }
    }
    return str.slice(0, -1)
}
