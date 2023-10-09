// Check Readme.ms file

function landPerimeter (arr) {
    let perimeter = 0;
    const rowsCount = arr.length;
    const colsCount = arr[0].length;

    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            if (!arr[row][col] || arr[row][col] === 'O') {
                continue;
            }

            if (col === 0 || arr[row][col - 1] === 'O') perimeter++;

            if (col === colsCount - 1 || arr[row][col + 1] === 'O') perimeter++;

            if (row === 0 || arr[row - 1][col] === 'O') perimeter++;

            if (row === rowsCount - 1 || arr[row + 1][col] === 'O') perimeter++;
        }
    }

    return `Total land perimeter: ${perimeter}`;
}
