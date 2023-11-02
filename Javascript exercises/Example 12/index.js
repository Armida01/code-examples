// Check Readme.ms file

function cakes(recipe, available) {
    let count = 0;
    Object.keys(recipe).forEach((el, index) => {
        if (!Object.keys(available).includes(el)) return count = 0

        if (Math.floor(available[el] / recipe[el]) < count || index == 0) return count = Math.floor(available[el] / recipe[el])

    })

    return count;
}
