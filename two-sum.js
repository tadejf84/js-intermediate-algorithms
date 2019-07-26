/*
* two sum algorithm
* given an array of integers, return indices of the two numbers such that they add up to a specific target
*/
function twoSum (arr, target) {
    const prevVals = {};
    const n = arr.length;

    // for each number in array get diff for target first
    // if this value exists in object return both indexes
    for(let i = 0; i < n; i++) {
        const missingValue = target - arr[i];
        if(missingValue in prevVals) {
            return [prevVals[missingValue], i];
        } else {
            prevVals[arr[i]] = i;
        }
    }
}