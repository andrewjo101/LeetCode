/**
 * Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * input: nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8
 * output: 4, longest subarray is [4,2,1,1] 
 */


function longestSubarray(nums, k) { 
    // sliding window 
    let left = 0, curr = 0, ans = 0;

    for(let right = 0; right < nums.length; right++){
        //store into curr 
        curr += nums[right]
        while(curr > k){
            //remove left bound if it becomes greater than k 
            curr -= nums[left]
            left ++ 
        }
        ans = Math.max(ans, right - left + 1 )
    }
    return ans;
}

