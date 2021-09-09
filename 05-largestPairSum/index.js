/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let sortedArray = numbers.sort(function(a,b){ 
        return a - b
    });
    let max = sortedArray[sortedArray.length-1];
    let preMax = sortedArray[sortedArray.length-2];

    return Number(max) + Number(preMax);
}
