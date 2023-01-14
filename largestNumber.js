/**Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
Since the result may be very large, so you need to return a string instead of an integer.
Ex 1: 
Input: nums = [10,2]
Output: "210"
Ex 2: 
Input: nums = [3,30,34,5,9]
Output: "9534330"
Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 10^9
**/

const largestNumber = function(nums) {
    nums.sort((a,b) => {
        //compare the combined elements 
        const ab = a.toString() + b.toString()
        const ba = b.toString() + a.toString()
        if(parseInt(ab) > parseInt(ba)){
            return -1 //descending order
        }else{
            return 1 
        }
    })
   if(nums[0] === 0){
    return '0';
    //edgecase if array is 0 
   }else{
    return nums.join('')
   };
};