496. Next Greater Element I

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
Hide Tags Stack
Hide Similar Problems (M) Next Greater Element II

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
// stack + map
// Key observation:
// Suppose we have a decreasing sequence followed by a greater number
// For example [5, 4, 3, 2, 1, 6] then the greater number 6 is the next greater element for all previous numbers in the sequence

// We use a stack to keep a decreasing sub-sequence, whenever we see a number x greater than stack.peek() we pop all elements less than x and for all the popped ones, their next greater element is x
// For example [9, 8, 7, 3, 2, 1, 6]
// The stack will first contain [9, 8, 7, 3, 2, 1] and then we see 6 which is greater than 1 so we pop 1 2 3 whose next greater element should be 6
var nextGreaterElement = function(findNums, nums) {
    let stack = [],
        map = new Map(); // map from x to next greater element of x

    for (let i = 0; i < nums.length; i++) {

        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            let smallN = stack.pop();
            map.set(smallN, nums[i]);// nums[i] is it's greater number now
        }
        stack.push(nums[i]);// push every number in anyway, when while(....), pop something
    }

    for (let j = 0; j < findNums.length; j++) {// remember to type .length, typo
        findNums[j] = map.has(findNums[j]) ? map.get(findNums[j]) : -1;
    }

    return findNums;
};

