14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

Hide Company Tags Yelp
Hide Tags String
Example
For strings "ABCD", "ABEF" and "ACEF", the LCP is "A"

For strings "ABCDEFG", "ABCEFG" and "ABCEFA", the LCP is "ABC"

/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. Method 1, start from the first one, compare prefix with next string, until end;
// 2. Method 2, start from the first char, compare it with all string, and then the second char
// I am using method 1 here
// prefix = strs[0], then update the prefix!
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) {
        return '';
    }
    
    let prefix = strs[0];
    // i starts from 1, use strs[0] to compare to the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        // use while not if!! when it meets all the conditions, continue!!
        while (j < strs[i].length && j < prefix.length && prefix.charAt(j) === strs[i].charAt(j)) {
            j++;
        }
        // corner case!
        if (j === 0) {
            return '';
        }
        // update prefix
        prefix = prefix.substring(0, j);
    }
    return prefix;
};
