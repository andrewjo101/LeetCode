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
    // edgecase if theres only one number
    if(nums.length === 1){
        return nums;
    }
    //iterate through each number, make a decision to use my current number or the accumalted number

    let maxValue = nums[0];
    let accValue = nums[0];

    
    for(i = 1; i < nums.length; i++){
        let calcNum = Math.max(nums[i], accValue + nums[i]);
        if(calcNum > maxValue){
            maxValue = calcNum;
        }
        accValue = calcNum;
    }
    return maxValue; 
};