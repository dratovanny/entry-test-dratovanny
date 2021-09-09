/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let res = ' ';
    for(let i = 0; i < str.length; i++){
        for(let j = -1; j < i; j++){
            j === -1 ? res=res+str[i].toUpperCase() : res=res+str[i];
        }
    }
    return res.match(/[A-Z][a-z]+|[0-9]+/g).join("-");
}
