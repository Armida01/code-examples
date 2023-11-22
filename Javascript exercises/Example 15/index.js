// Check Readme.ms file

function sumTwoSmallestNumbers(numbers) {
    let sum = 0;

    sum += getSmallestElement(numbers);

    if(numbers.length > 2) {
        let removeFfirstSmallest = numbers.splice(numbers.indexOf(sum),1);

        sum += getSmallestElement(numbers)
    }

    return sum
}

function getSmallestElement(arr) {
    return Math.min(...arr)
}
