const sortGroupBy = (array) => {
    array.sort((a, b) => {
        if (a.category === b.category) {
            if (a.time < b.time)
                return -1

            if (a.time > b.time)
                return 1
        } else {
            return a.category.localeCompare(b.category)
        }
    });
    array.forEach(transaction => {
        console.log(transaction);
    });
}
module.exports = sortGroupBy;