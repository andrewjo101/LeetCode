/** 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    //create a sorted array
    //create an empty hash
    //iterate over the input, and store the value in the hash
    //if there is no key, store the value at the i'th index of the input, else push 
   
    const sorted = strs.map(el => el.split('').sort().join(''));
    const hash ={};
   
    for(let i = 0; i < strs.length; i++){
        if(!hash[sorted[i]]){
            hash[sorted[i]] = [strs[i]];
        }else{
            hash[sorted[i]].push(strs[i]);
        } 
    }
    return Object.values(hash);
   };