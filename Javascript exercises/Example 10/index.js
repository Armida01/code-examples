// Check Readme.ms file

function charConcat(string) {
    /* Solution 1 */

     let result = '';

     for (let i = 0; i < Math.floor(string.length / 2); i++ ) {
       result += `${string[i]}${string[string.length - 1 - i]}${i + 1}`
     }

     return result;

    /* Solution 2 */

    const str = string.padStart(string.length + 1, ' ');
    const len = str.length;

    return str.slice(0, Math.ceil(len / 2)).split('').reduce((acc, cur, i) => acc + cur + str[len - i] + i).trim();
}
