/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * ex: input: [2,7,11,15], target = 9, output: [0,1] 
 */

let sum2 = function(num,target){
    // loop thru the num to find the 2 output numbers
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < num.length; j++){
            // can't be the same numbers
            if (i === j){
                continue;
            }
            // find the numbers that add to the target
            if(num[i] + num[j] === target){
                return [i,j];
            }
        }

    }
};
