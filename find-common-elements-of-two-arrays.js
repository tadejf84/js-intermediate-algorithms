/**
 * Find common elements in two arrays - array intersection
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * 
 * @returns {array} array intersection
 */
function findCommonEl(arr1, arr2) {
    let el,
        exists = {},
        common = [];

    for (let i of arr1) {
        el = i;

        for (let j of arr2) {
            if (el === j && !exists[j]) {
                common.push(el);
                exists[j] = true;
            }
        }

    }

    return common;
}

