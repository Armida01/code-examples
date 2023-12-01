// Check Readme.ms file

function alphanumeric(string){
    if (string.length == 0) return false;

    let regex = /^[a-zA-Z0-9]*$/;

    if (string.match(regex)) {
        return true;
    }
    return false

}
