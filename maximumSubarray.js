/*Given an integer array nums, find the subarray which has the largest sum and return its sum.
/ ex1: Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

ex2: Input: nums = [1]
Output: 1

ex 3: Input: nums = [5,4,-1,7,8]
Output: 23
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let solution = nums[0];

    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
        solution = Math.max(solution, nums[i])
    }

    return solution;


};